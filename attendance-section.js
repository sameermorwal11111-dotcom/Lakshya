// Attendance Section Module
// Renders the attendance tracking page with class selection and student list

function renderAttendancePage() {
    const container = document.getElementById('attendance-content');
    container.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <div>
                <h2 class="text-2xl font-semibold">Mark Attendance</h2>
                <p class="text-muted-foreground">Track student attendance for your classes</p>
            </div>
        </div>

        <div class="card mb-6">
            <div class="card-content p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="space-y-2">
                        <label class="label">Select Course</label>
                        <select id="attendance-course-select" class="select" onchange="updateAttendanceList()">
                            ${state.courses.map(c => `<option value="${c.code}">${c.code} - ${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="label">Select Date</label>
                        <input type="date" id="attendance-date" class="input" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="space-y-2">
                        <label class="label">Session</label>
                        <select class="select">
                            <option>Morning (9:00 AM - 12:00 PM)</option>
                            <option>Afternoon (1:00 PM - 4:00 PM)</option>
                            <option>Evening (4:00 PM - 7:00 PM)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="flex items-center justify-between">
                    <h3 class="card-title">Student List</h3>
                    <div class="flex gap-2">
                        <button class="btn btn-outline btn-sm" onclick="markAllAttendance(true)">
                            <i data-lucide="check-circle" class="w-4 h-4 mr-1"></i> Mark All Present
                        </button>
                        <button class="btn btn-outline btn-sm" onclick="markAllAttendance(false)">
                            <i data-lucide="x-circle" class="w-4 h-4 mr-1"></i> Mark All Absent
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-content p-0">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Roll No</th>
                                <th>Student Name</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody id="attendance-table-body">
                            ${state.attendanceList.map(student => `
                                <tr>
                                    <td class="font-medium">${student.rollNo}</td>
                                    <td>${student.studentName}</td>
                                    <td class="text-center">
                                        <span class="badge ${student.present ? 'badge-default' : 'badge-secondary'}" id="status-${student.studentId}">
                                            ${student.present ? 'Present' : 'Absent'}
                                        </span>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-outline btn-sm" onclick="toggleAttendance(${student.studentId})">
                                            <i data-lucide="${student.present ? 'x' : 'check'}" class="w-4 h-4"></i>
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-content">
                <div class="flex items-center justify-between pt-4 border-t">
                    <div class="text-sm text-muted-foreground">
                        Present: <span class="font-semibold" id="present-count">${state.attendanceList.filter(s => s.present).length}</span> / 
                        Total: <span class="font-semibold">${state.attendanceList.length}</span>
                    </div>
                    <button class="btn" onclick="saveAttendance()">
                        <i data-lucide="save" class="w-4 h-4 mr-2"></i> Save Attendance
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateAttendanceList() {
    // Refresh the attendance list when course changes
    renderAttendancePage();
    lucide.createIcons();
}

function toggleAttendance(studentId) {
    const student = state.attendanceList.find(s => s.studentId === studentId);
    if (student) {
        student.present = !student.present;
        renderAttendancePage();
        lucide.createIcons();
    }
}

function markAllAttendance(present) {
    state.attendanceList.forEach(student => {
        student.present = present;
    });
    renderAttendancePage();
    lucide.createIcons();
}

function saveAttendance() {
    const courseSelect = document.getElementById('attendance-course-select');
    const dateInput = document.getElementById('attendance-date');
    const course = courseSelect.value;
    const date = dateInput.value;

    const presentCount = state.attendanceList.filter(s => s.present).length;
    const totalCount = state.attendanceList.length;

    alert(`Attendance saved successfully!\nCourse: ${course}\nDate: ${date}\nPresent: ${presentCount}/${totalCount}`);
}
