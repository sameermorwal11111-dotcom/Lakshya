// Schedule Section Module
// Renders the today's schedule page

function renderSchedulePage() {
    const container = document.getElementById('schedule-content');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Today's Schedule</h3>
                <p class="card-description">Your complete timetable</p>
            </div>
            <div class="card-content">
                <div class="space-y-4">
                    ${state.todaySchedule.map(item => `
                        <div class="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted transition-colors" style="border: 1px solid var(--border);">
                            <div class="flex flex-col items-center min-w-[80px]" style="min-width: 80px;">
                                <i data-lucide="clock" class="w-5 h-5 text-muted-foreground mb-1"></i>
                                <span class="font-medium">${item.time}</span>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-medium text-lg">${item.title}</h4>
                                <p class="text-sm text-muted-foreground">${item.course}</p>
                                <div class="flex items-center gap-2 mt-1">
                                    <i data-lucide="map-pin" class="w-3 h-3 text-muted-foreground"></i>
                                    <span class="text-xs text-muted-foreground">${item.room}</span>
                                </div>
                            </div>
                            <span class="badge badge-secondary">${item.type}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
