// QR Code Section Module
// Renders the QR code generation page

let qrTimerInterval; // Variable to store the timer interval

function renderQRCodePage() {
    const container = document.getElementById('qr-code-content');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Generate QR Code</h3>
                <p class="card-description">Create QR codes for attendance, assignments, or resources</p>
            </div>
            <div class="card-content space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <label class="label">Purpose</label>
                            <select class="select" id="qr-purpose-select" onchange="state.qrPurpose = this.value">
                                <option value="attendance">Attendance</option>
                                <option value="assignment">Assignment</option>
                                <option value="resource">Resource</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="label">Course</label>
                            <select class="select" id="qr-course-select" onchange="state.selectedCourse = this.value">
                                ${state.courses.map(c => `<option value="${c.code}">${c.code} - ${c.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="label">Validity Period</label>
                            <select class="select" id="qr-validity-select">
                                <option value="5">5 Minutes</option>
                                <option value="10">10 Minutes</option>
                                <option value="15">15 Minutes</option>
                                <option value="30">30 Minutes</option>
                                <option value="60">1 Hour</option>
                            </select>
                        </div>
                        <button class="btn w-full" onclick="generateQRCode()">
                            <i data-lucide="qr-code" class="w-4 h-4 mr-2"></i> Generate QR Code
                        </button>
                    </div>
                    <div class="flex flex-col items-center justify-center p-6 rounded-lg relative" style="background-color: var(--muted);">
                        <div id="qr-display-area" class="text-center">
                            <i data-lucide="qr-code" class="w-24 h-24 text-muted-foreground mx-auto mb-4"></i>
                            <p class="text-muted-foreground">Generate a QR code to see it here</p>
                        </div>
                        <div id="qr-timer-display" class="hidden mt-4 text-center">
                            <p class="text-sm font-medium text-muted-foreground mb-1">Expires in:</p>
                            <div class="timer-display text-2xl font-bold font-mono">00:00</div>
                        </div>
                        <div id="qr-expired-overlay" class="hidden absolute inset-0 bg-background/80 flex flex-col items-center justify-center rounded-lg backdrop-blur-sm">
                            <i data-lucide="clock" class="w-12 h-12 text-destructive mb-2"></i>
                            <p class="text-lg font-semibold text-destructive">QR Code Expired</p>
                            <button class="btn btn-sm btn-outline mt-4" onclick="generateQRCode()">Regenerate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateQRCode() {
    // Clear existing timer if any
    if (qrTimerInterval) clearInterval(qrTimerInterval);

    // Reset UI states
    document.getElementById('qr-expired-overlay').classList.add('hidden');
    const timerDisplayContainer = document.getElementById('qr-timer-display');
    timerDisplayContainer.classList.remove('hidden');

    const validityMinutes = parseInt(document.getElementById('qr-validity-select').value);
    const expiresAt = new Date(Date.now() + validityMinutes * 60000).toISOString();

    const qrData = {
        purpose: state.qrPurpose,
        course: state.selectedCourse,
        teacher: state.userInfo.name,
        timestamp: new Date().toISOString(),
        expiresAt: expiresAt,
        id: Math.random().toString(36).substr(2, 9)
    };

    const displayArea = document.getElementById('qr-display-area');
    displayArea.innerHTML = ''; // Clear previous

    // Create canvas for QR code
    const canvas = document.createElement('canvas');
    displayArea.appendChild(canvas);

    QRCode.toCanvas(canvas, JSON.stringify(qrData), { width: 256 }, function (error) {
        if (error) console.error(error);
        console.log('success!');
    });

    // Add download button
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn btn-outline mt-4';
    downloadBtn.id = 'qr-download-btn';
    downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4 mr-2"></i> Download';
    downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.download = `qr-${state.qrPurpose}-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };
    displayArea.appendChild(downloadBtn);
    lucide.createIcons();

    // Start Countdown Timer
    startQRTimer(validityMinutes * 60);
}

function startQRTimer(durationSeconds) {
    let timer = durationSeconds;
    const timerElement = document.querySelector('.timer-display');

    updateTimerDisplay(timer, timerElement);

    qrTimerInterval = setInterval(function () {
        timer--;
        updateTimerDisplay(timer, timerElement);

        if (timer <= 0) {
            clearInterval(qrTimerInterval);
            handleQRExpiration();
        }
    }, 1000);
}

function updateTimerDisplay(seconds, element) {
    const minutes = parseInt(seconds / 60, 10);
    const remainingSeconds = parseInt(seconds % 60, 10);

    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    element.textContent = displayMinutes + ":" + displaySeconds;

    // Visual warning when less than 1 minute
    if (seconds < 60) {
        element.classList.add('text-destructive');
    } else {
        element.classList.remove('text-destructive');
    }
}

function handleQRExpiration() {
    const overlay = document.getElementById('qr-expired-overlay');
    overlay.classList.remove('hidden');

    const downloadBtn = document.getElementById('qr-download-btn');
    if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }

    lucide.createIcons();
}
