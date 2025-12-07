// State Management
const state = {
    currentPage: 'dashboard',
    theme: 'light',
    sidebarOpen: true,
    userInfo: {
        name: 'Dr. Priya Sharma',
        email: 'priya.sharma@ecb.ac.in',
        institute: 'Engineering College Bikaner'
    },
    assignments: [
        {
            id: 1,
            title: 'Data Structures Lab 1',
            batch: 'B.Tech CSE - 3rd Sem',
            course: 'Data Structures',
            dueDate: '2024-12-01',
            totalMarks: 50,
            submissions: 28,
            totalStudents: 35,
            status: 'active',
            description: 'Implement stack and queue operations',
            fileName: 'DS_Lab1_Instructions.pdf'
        },
        {
            id: 2,
            title: 'Algorithm Analysis Project',
            batch: 'B.Tech CSE - 5th Sem',
            course: 'Algorithms',
            dueDate: '2024-12-05',
            totalMarks: 100,
            submissions: 15,
            totalStudents: 32,
            status: 'active',
            description: 'Analyze time complexity of sorting algorithms',
            fileName: 'Algorithm_Project.pdf'
        },
        {
            id: 3,
            title: 'Database Design Assignment',
            batch: 'B.Tech CSE - 7th Sem',
            course: 'Database Systems',
            dueDate: '2024-11-28',
            totalMarks: 75,
            submissions: 30,
            totalStudents: 30,
            status: 'closed',
            description: 'Design a relational database for library management',
            fileName: 'DB_Assignment.pdf'
        }
    ],
    courses: [
        { id: 1, name: 'Data Structures', code: 'CSE-101', students: 35, schedule: 'Mon, Wed, Fri 9:00 AM', room: 'CS-201', semester: 'Fall 2024' },
        { id: 2, name: 'Algorithms', code: 'CSE-202', students: 32, schedule: 'Tue, Thu 11:00 AM', room: 'CS-202', semester: 'Fall 2024' },
        { id: 3, name: 'Database Systems', code: 'CSE-303', students: 30, schedule: 'Mon, Wed 2:00 PM', room: 'CS-203', semester: 'Fall 2024' },
        { id: 4, name: 'Software Engineering', code: 'CSE-401', students: 28, schedule: 'Tue, Thu 4:00 PM', room: 'CS-204', semester: 'Fall 2024' }
    ],
    notifications: [
        { id: 1, type: 'student', title: 'New Assignment Submission', message: 'John Doe submitted Data Structures Lab 1', time: '5 mins ago', read: false },
        { id: 2, type: 'admin', title: 'Faculty Meeting', message: 'Department meeting scheduled for tomorrow at 2 PM', time: '1 hour ago', read: false },
        { id: 3, type: 'system', title: 'Grade Deadline', message: 'Please submit final grades by December 15', time: '2 hours ago', read: true },
        { id: 4, type: 'student', title: 'Assignment Query', message: 'Sarah Wilson asked a question about Algorithm project', time: '3 hours ago', read: true },
        { id: 5, type: 'admin', title: 'New Policy Update', message: 'Updated attendance policy has been released', time: '1 day ago', read: true }
    ],
    todaySchedule: [
        { time: '09:00 AM', title: 'Data Structures Lecture', course: 'CSE-101', room: 'CS-201', type: 'class', batch: 'B.Tech CSE - 3rd Sem' },
        { time: '11:00 AM', title: 'Algorithms Lab', course: 'CSE-202', room: 'CS-Lab-1', type: 'lab', batch: 'B.Tech CSE - 5th Sem' },
        { time: '02:00 PM', title: 'Faculty Meeting', course: 'Department', room: 'Meeting Room', type: 'meeting', batch: '' },
        { time: '04:00 PM', title: 'Student Consultation', course: 'Office Hours', room: 'Faculty Room 12', type: 'consultation', batch: '' }
    ],
    grades: [
        { studentId: 1, studentName: 'John Doe', rollNo: 'CSE001', course: 'CSE-101', assignments: 45, midterm: 38, final: 85, total: 168, grade: 'A' },
        { studentId: 2, studentName: 'Sarah Wilson', rollNo: 'CSE002', course: 'CSE-101', assignments: 42, midterm: 35, final: 78, total: 155, grade: 'B+' },
        { studentId: 3, studentName: 'Mike Johnson', rollNo: 'CSE003', course: 'CSE-101', assignments: 48, midterm: 40, final: 90, total: 178, grade: 'A+' },
        { studentId: 4, studentName: 'Emily Brown', rollNo: 'CSE004', course: 'CSE-101', assignments: 40, midterm: 33, final: 75, total: 148, grade: 'B' },
        { studentId: 5, studentName: 'David Lee', rollNo: 'CSE005', course: 'CSE-101', assignments: 35, midterm: 28, final: 65, total: 128, grade: 'C+' },
        { studentId: 6, studentName: 'Lisa Chen', rollNo: 'CSE006', course: 'CSE-202', assignments: 47, midterm: 39, final: 88, total: 174, grade: 'A' },
        { studentId: 7, studentName: 'Tom Anderson', rollNo: 'CSE007', course: 'CSE-202', assignments: 43, midterm: 36, final: 80, total: 159, grade: 'B+' },
        { studentId: 8, studentName: 'Anna Smith', rollNo: 'CSE008', course: 'CSE-202', assignments: 38, midterm: 30, final: 70, total: 138, grade: 'B' },
        { studentId: 9, studentName: 'Chris Brown', rollNo: 'CSE009', course: 'CSE-303', assignments: 49, midterm: 40, final: 92, total: 181, grade: 'A+' },
        { studentId: 10, studentName: 'Jessica Davis', rollNo: 'CSE010', course: 'CSE-303', assignments: 44, midterm: 37, final: 82, total: 163, grade: 'A' },
        { studentId: 11, studentName: 'Robert Taylor', rollNo: 'CSE011', course: 'CSE-303', assignments: 36, midterm: 29, final: 68, total: 133, grade: 'C+' },
        { studentId: 12, studentName: 'Maria Garcia', rollNo: 'CSE012', course: 'CSE-401', assignments: 46, midterm: 38, final: 86, total: 170, grade: 'A' },
        { studentId: 13, studentName: 'James Wilson', rollNo: 'CSE013', course: 'CSE-401', assignments: 41, midterm: 34, final: 76, total: 151, grade: 'B+' },
        { studentId: 14, studentName: 'Patricia Moore', rollNo: 'CSE014', course: 'CSE-401', assignments: 33, midterm: 26, final: 62, total: 121, grade: 'C' },
        { studentId: 15, studentName: 'Daniel Martinez', rollNo: 'CSE015', course: 'CSE-101', assignments: 39, midterm: 32, final: 73, total: 144, grade: 'B' }
    ],
    stats: {
        totalStudents: 125,
        activeCourses: 4,
        pendingReviews: 43,
        upcomingClasses: 3,
        averageAttendance: 87.5
    },
    batches: ['B.Tech CSE - 3rd Sem', 'B.Tech CSE - 5th Sem', 'B.Tech CSE - 7th Sem'],
    selectedBatch: 'all',
    qrCodeUrl: '',
    qrPurpose: 'attendance',
    selectedCourse: 'CSE-101',
    attendanceList: [
        { studentId: 1, studentName: 'John Doe', rollNo: 'CSE001', present: false },
        { studentId: 2, studentName: 'Sarah Wilson', rollNo: 'CSE002', present: false },
        { studentId: 3, studentName: 'Mike Johnson', rollNo: 'CSE003', present: false },
        { studentId: 4, studentName: 'Emily Brown', rollNo: 'CSE004', present: false },
        { studentId: 5, studentName: 'David Lee', rollNo: 'CSE005', present: false },
        { studentId: 6, studentName: 'Lisa Chen', rollNo: 'CSE006', present: false },
        { studentId: 7, studentName: 'Tom Anderson', rollNo: 'CSE007', present: false },
        { studentId: 8, studentName: 'Anna Smith', rollNo: 'CSE008', present: false },
        { studentId: 9, studentName: 'Chris Brown', rollNo: 'CSE009', present: false },
        { studentId: 10, studentName: 'Jessica Davis', rollNo: 'CSE010', present: false }
    ]
};

// Initialize Application
// This function is called by component-loader.js after all components are loaded
function initializeApp() {
    initTheme();
    setupNavigation();
    renderCurrentPage();
    updateHeader();
    lucide.createIcons();
}

// Fallback: Initialize if components are already loaded (for dashboard.html compatibility)
document.addEventListener('DOMContentLoaded', () => {
    // Check if components are already in DOM (dashboard.html)
    if (document.querySelector('header') && document.querySelector('.sidebar')) {
        initializeApp();
    }
    // Otherwise, component-loader.js will call initializeApp()
});

// Theme Handling
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    state.theme = savedTheme;
    applyTheme();

    document.getElementById('theme-toggle').addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', state.theme);
        applyTheme();
    });
}

function applyTheme() {
    if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // Re-render icons if needed, but usually CSS handles colors
}

// Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            state.currentPage = page;

            // Update active state in sidebar
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            renderCurrentPage();

            // Mobile sidebar handling
            if (window.innerWidth < 1024) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        });
    });

    // Sidebar toggle
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
    });

    // Logout functionality
    const logoutButtons = document.querySelectorAll('[data-lucide="log-out"]');
    logoutButtons.forEach(btn => {
        btn.closest('button').addEventListener('click', () => {
            // Clear user data
            localStorage.removeItem('vc_user');
            // Redirect to login page
            window.location.href = 'index.html';
        });
    });
}

function updateHeader() {
    document.getElementById('user-name').textContent = state.userInfo.name;
    document.getElementById('user-institute').textContent = state.userInfo.institute;
    document.getElementById('user-initial').textContent = state.userInfo.name.charAt(0);

    const unreadCount = state.notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notification-badge');
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// Rendering Pages
function renderCurrentPage() {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));

    // Show current page
    const pageId = `${state.currentPage}-section`;
    const pageEl = document.getElementById(pageId);
    if (pageEl) {
        pageEl.classList.add('active');

        // Render specific content based on page
        switch (state.currentPage) {
            case 'dashboard': renderDashboard(); break;
            case 'attendance': renderAttendancePage(); break;
            case 'qr-code': renderQRCodePage(); break;
            case 'assignments': renderAssignmentsPage(); break;
            case 'schedule': renderSchedulePage(); break;
            case 'grades': renderGradesPage(); break;

        }
        lucide.createIcons();
    }
}

// --- Dashboard ---
function renderDashboard() {
    const container = document.getElementById('dashboard-content');
    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Profile Card -->
            <div class="card">
                <div class="card-content flex flex-col items-center text-center p-6">
                    <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mb-4" style="width: 8rem; height: 8rem; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 9999px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 1rem;">
                        <span class="text-5xl" style="font-size: 3rem;">PS</span>
                    </div>
                    <h3 class="text-xl mb-1 font-semibold">${state.userInfo.name}</h3>
                    <p class="text-muted-foreground mb-1">Assistant Professor</p>
                    <p class="text-sm text-muted-foreground">Computer Science & Engineering</p>
                    
                    <div class="flex items-center justify-around w-full mt-6 pt-6 border-t" style="border-top: 1px solid var(--border);">
                        <div class="text-center">
                            <p class="text-3xl text-primary font-bold" style="color: var(--primary);">6</p>
                            <p class="text-xs text-muted-foreground">Courses</p>
                        </div>
                        <div class="text-center">
                            <p class="text-3xl text-primary font-bold" style="color: var(--primary);">450</p>
                            <p class="text-xs text-muted-foreground">Students</p>
                        </div>
                        <div class="text-center">
                            <p class="text-3xl text-primary font-bold" style="color: var(--primary);">12</p>
                            <p class="text-xs text-muted-foreground">Years</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Professional Info -->
            <div class="card lg:col-span-2">
                <div class="card-header">
                    <h3 class="card-title">Professional Information</h3>
                </div>
                <div class="card-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${renderInfoItem('mail', 'Email Address', state.userInfo.email, 'blue')}
                        ${renderInfoItem('phone', 'Phone Number', '+91 9876543220', 'cyan')}
                        ${renderInfoItem('graduation-cap', 'Qualification', 'PhD in Computer Science', 'blue')}
                        ${renderInfoItem('book-open', 'Specialization', 'AI & Machine Learning', 'green')}
                        ${renderInfoItem('briefcase', 'Experience', '12 years', 'orange')}
                        ${renderInfoItem('calendar', 'Joining Date', 'August 2012', 'pink')}
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            ${renderStatCard('Total Students', state.stats.totalStudents, 'users', 'blue')}
            ${renderStatCard('Active Courses', state.stats.activeCourses, 'book-open', 'green')}
            ${renderStatCard('Pending Reviews', state.stats.pendingReviews, 'clipboard-list', 'orange')}
            ${renderStatCard('Classes Today', state.stats.upcomingClasses, 'calendar', 'purple')}
            ${renderStatCard('Avg Attendance', state.stats.averageAttendance + '%', 'trending-up', 'cyan')}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <!-- Today's Schedule Preview -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title flex items-center gap-2">
                        <i data-lucide="calendar" class="w-5 h-5"></i> Today's Schedule
                    </h3>
                    <p class="card-description">Your classes and meetings for today</p>
                </div>
                <div class="card-content space-y-3">
                    ${state.todaySchedule.slice(0, 3).map(item => `
                        <div class="flex items-start gap-4 p-3 rounded-lg" style="background-color: var(--muted);">
                            <div class="flex flex-col items-center">
                                <i data-lucide="clock" class="w-4 h-4 text-muted-foreground mb-1"></i>
                                <span class="text-xs text-muted-foreground">${item.time}</span>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium">${item.title}</p>
                                <p class="text-sm text-muted-foreground">${item.course} • ${item.room}</p>
                            </div>
                            <span class="badge badge-secondary">${item.type}</span>
                        </div>
                    `).join('')}
                    <button class="btn btn-outline w-full mt-4" onclick="navigateTo('schedule')">View Full Schedule</button>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Quick Actions</h3>
                    <p class="card-description">Frequently used features</p>
                </div>
                <div class="card-content">
                    <div class="grid grid-cols-2 gap-4">
                        <button class="btn btn-outline h-20 flex-col gap-2" onclick="navigateTo('qr-code')" style="height: 5rem;">
                            <i data-lucide="qr-code" class="w-6 h-6"></i> Generate QR
                        </button>
                        <button class="btn btn-outline h-20 flex-col gap-2" onclick="navigateTo('assignments')" style="height: 5rem;">
                            <i data-lucide="plus" class="w-6 h-6"></i> New Assignment
                        </button>
                        <button class="btn btn-outline h-20 flex-col gap-2" onclick="navigateTo('grades')" style="height: 5rem;">
                            <i data-lucide="bar-chart-3" class="w-6 h-6"></i> View Grades
                        </button>
                        <button class="btn btn-outline h-20 flex-col gap-2" onclick="navigateTo('schedule')" style="height: 5rem;">
                            <i data-lucide="clock" class="w-6 h-6"></i> Schedule
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderInfoItem(icon, label, value, color) {
    // Simplified color handling for vanilla CSS
    return `
        <div class="flex items-center gap-3 p-3 rounded-lg" style="background-color: var(--muted);">
            <div class="p-2 bg-background rounded-lg">
                <i data-lucide="${icon}" class="w-5 h-5" style="color: var(--primary);"></i>
            </div>
            <div>
                <p class="text-xs text-muted-foreground">${label}</p>
                <p class="text-sm font-medium">${value}</p>
            </div>
        </div>
    `;
}

function renderStatCard(label, value, icon, color) {
    return `
        <div class="card">
            <div class="card-content p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-muted-foreground">${label}</p>
                        <p class="text-2xl mt-1 font-semibold">${value}</p>
                    </div>
                    <div class="p-3 rounded-lg" style="background-color: var(--muted);">
                        <i data-lucide="${icon}" class="w-6 h-6 text-primary"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- Assignments ---
function renderAssignmentsPage() {
    const container = document.getElementById('assignments-content');
    const filteredAssignments = state.selectedBatch === 'all'
        ? state.assignments
        : state.assignments.filter(a => a.batch === state.selectedBatch);

    container.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <div>
                <h2 class="text-2xl font-semibold">Assignments</h2>
                <p class="text-muted-foreground">Manage and track student assignments</p>
            </div>
            <button class="btn" onclick="openCreateAssignmentModal()">
                <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Create Assignment
            </button>
        </div>

        <div class="flex gap-4 mb-6">
            <div class="flex-1 relative">
                <i data-lucide="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" style="top: 50%; transform: translateY(-50%); position: absolute; left: 0.75rem;"></i>
                <input type="text" placeholder="Search assignments..." class="input pl-10" style="padding-left: 2.5rem;">
            </div>
            <select class="select w-64" onchange="filterAssignments(this.value)">
                <option value="all" ${state.selectedBatch === 'all' ? 'selected' : ''}>All Batches</option>
                ${state.batches.map(b => `<option value="${b}" ${state.selectedBatch === b ? 'selected' : ''}>${b}</option>`).join('')}
            </select>
        </div>

        <div class="grid gap-4">
            ${filteredAssignments.map(a => `
                <div class="card">
                    <div class="card-content p-6">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <div class="flex items-center gap-3 mb-2">
                                    <h3 class="text-lg font-medium">${a.title}</h3>
                                    <span class="badge ${a.status === 'active' ? 'badge-default' : 'badge-secondary'}">${a.status}</span>
                                </div>
                                <p class="text-sm text-muted-foreground mb-4">${a.description}</p>
                                
                                <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                                    <div><p class="text-xs text-muted-foreground">Batch</p><p class="text-sm font-medium">${a.batch}</p></div>
                                    <div><p class="text-xs text-muted-foreground">Course</p><p class="text-sm font-medium">${a.course}</p></div>
                                    <div><p class="text-xs text-muted-foreground">Due Date</p><p class="text-sm font-medium">${a.dueDate}</p></div>
                                    <div><p class="text-xs text-muted-foreground">Total Marks</p><p class="text-sm font-medium">${a.totalMarks}</p></div>
                                    <div><p class="text-xs text-muted-foreground">Submissions</p><p class="text-sm font-medium">${a.submissions}/${a.totalStudents}</p></div>
                                </div>
                            </div>
                            <div class="flex gap-2 ml-4">
                                <button class="btn btn-outline btn-sm" onclick="alert('View functionality would open modal')"><i data-lucide="eye" class="w-4 h-4 mr-1"></i> View</button>
                                <button class="btn btn-outline btn-sm" onclick="openEditAssignmentModal(${a.id})"><i data-lucide="edit" class="w-4 h-4 mr-1"></i> Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function filterAssignments(batch) {
    state.selectedBatch = batch;
    renderAssignmentsPage();
    lucide.createIcons();
}

let currentAssignmentId = null;
let uploadedFile = null;

function openCreateAssignmentModal() {
    currentAssignmentId = null;
    uploadedFile = null;
    const modal = document.getElementById('assignment-modal');
    const title = document.getElementById('assignment-modal-title');
    const submitBtn = document.getElementById('assignment-submit-btn');

    title.textContent = 'Create Assignment';
    submitBtn.textContent = 'Create Assignment';

    // Reset form
    document.getElementById('assignment-name').value = '';
    document.getElementById('assignment-due-date').value = '';

    // Populate batch options
    const batchSelect = document.getElementById('assignment-batch');
    batchSelect.innerHTML = '<option value="">Select Batch</option>';
    state.batches.forEach(batch => {
        const option = document.createElement('option');
        option.value = batch;
        option.textContent = batch;
        batchSelect.appendChild(option);
    });

    // Populate course options
    const courseSelect = document.getElementById('assignment-course');
    courseSelect.innerHTML = '<option value="">Select Course</option>';
    state.courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.code;
        option.textContent = `${course.code} - ${course.name}`;
        courseSelect.appendChild(option);
    });

    // Reset file upload
    document.getElementById('file-preview').classList.add('hidden');
    document.getElementById('file-drop-area').classList.remove('hidden');

    setupFileUpload();
    modal.classList.add('open');
    lucide.createIcons();
}

function openEditAssignmentModal(assignmentId) {
    const assignment = state.assignments.find(a => a.id === assignmentId);
    if (!assignment) return;

    currentAssignmentId = assignmentId;
    uploadedFile = null;

    const modal = document.getElementById('assignment-modal');
    const title = document.getElementById('assignment-modal-title');
    const submitBtn = document.getElementById('assignment-submit-btn');

    title.textContent = 'Edit Assignment';
    submitBtn.textContent = 'Update Assignment';

    // Fill form with existing data
    document.getElementById('assignment-name').value = assignment.title;
    document.getElementById('assignment-due-date').value = assignment.dueDate;

    // Populate and select batch
    const batchSelect = document.getElementById('assignment-batch');
    batchSelect.innerHTML = '<option value="">Select Batch</option>';
    state.batches.forEach(batch => {
        const option = document.createElement('option');
        option.value = batch;
        option.textContent = batch;
        if (batch === assignment.batch) option.selected = true;
        batchSelect.appendChild(option);
    });

    // Populate and select course
    const courseSelect = document.getElementById('assignment-course');
    courseSelect.innerHTML = '<option value="">Select Course</option>';
    state.courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.code;
        option.textContent = `${course.code} - ${course.name}`;
        if (course.course === assignment.course) option.selected = true;
        courseSelect.appendChild(option);
    });

    // Show existing file if available
    if (assignment.fileName) {
        document.getElementById('file-name').textContent = assignment.fileName;
        document.getElementById('file-preview').classList.remove('hidden');
        document.getElementById('file-drop-area').classList.add('hidden');
    } else {
        document.getElementById('file-preview').classList.add('hidden');
        document.getElementById('file-drop-area').classList.remove('hidden');
    }

    setupFileUpload();
    modal.classList.add('open');
    lucide.createIcons();
}

function setupFileUpload() {
    const dropArea = document.getElementById('file-drop-area');
    const fileInput = document.getElementById('file-input');

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.add('drag-over'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.remove('drag-over'), false);
    });

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false);

    // Handle file input change
    fileInput.addEventListener('change', function () {
        if (this.files.length > 0) {
            handleFiles(this.files);
        }
    });
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (files.length > 0) {
        uploadedFile = files[0];
        document.getElementById('file-name').textContent = uploadedFile.name;
        document.getElementById('file-preview').classList.remove('hidden');
        document.getElementById('file-drop-area').classList.add('hidden');
        lucide.createIcons();
    }
}

function removeFile() {
    uploadedFile = null;
    document.getElementById('file-input').value = '';
    document.getElementById('file-preview').classList.add('hidden');
    document.getElementById('file-drop-area').classList.remove('hidden');
    lucide.createIcons();
}

function saveAssignment() {
    const name = document.getElementById('assignment-name').value.trim();
    const batch = document.getElementById('assignment-batch').value;
    const course = document.getElementById('assignment-course').value;
    const dueDate = document.getElementById('assignment-due-date').value;

    if (!name || !batch || !course || !dueDate) {
        alert('Please fill in all required fields');
        return;
    }

    if (currentAssignmentId) {
        // Update existing assignment
        const assignment = state.assignments.find(a => a.id === currentAssignmentId);
        if (assignment) {
            assignment.title = name;
            assignment.batch = batch;
            assignment.course = state.courses.find(c => c.code === course)?.name || course;
            assignment.dueDate = dueDate;
            if (uploadedFile) {
                assignment.fileName = uploadedFile.name;
            }
        }
    } else {
        // Create new assignment
        const newAssignment = {
            id: state.assignments.length + 1,
            title: name,
            batch: batch,
            course: state.courses.find(c => c.code === course)?.name || course,
            dueDate: dueDate,
            totalMarks: 100,
            submissions: 0,
            totalStudents: 35,
            status: 'active',
            description: name,
            fileName: uploadedFile ? uploadedFile.name : ''
        };
        state.assignments.push(newAssignment);
    }

    closeAssignmentModal();
    renderAssignmentsPage();
    lucide.createIcons();
}

function closeAssignmentModal() {
    document.getElementById('assignment-modal').classList.remove('open');
    currentAssignmentId = null;
    uploadedFile = null;
}

// --- QR Code ---
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
                        <button class="btn w-full" onclick="generateQRCode()">
                            <i data-lucide="qr-code" class="w-4 h-4 mr-2"></i> Generate QR Code
                        </button>
                    </div>
                    <div class="flex flex-col items-center justify-center p-6 rounded-lg" style="background-color: var(--muted);">
                        <div id="qr-display-area" class="text-center">
                            <i data-lucide="qr-code" class="w-24 h-24 text-muted-foreground mx-auto mb-4"></i>
                            <p class="text-muted-foreground">Generate a QR code to see it here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateQRCode() {
    const qrData = {
        purpose: state.qrPurpose,
        course: state.selectedCourse,
        teacher: state.userInfo.name,
        timestamp: new Date().toISOString(),
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
    downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4 mr-2"></i> Download';
    downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.download = `qr-${state.qrPurpose}-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };
    displayArea.appendChild(downloadBtn);
    lucide.createIcons();
}

// --- Schedule ---
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

// --- Grades ---
function renderGradesPage() {
    const container = document.getElementById('grades-content');

    // Initialize filter states if not exists
    if (!state.gradesFilter) {
        state.gradesFilter = {
            searchQuery: '',
            selectedCourse: 'all',
            selectedGrade: 'all'
        };
    }

    // Filter grades based on search and filters
    let filteredGrades = state.grades;

    // Apply search filter
    if (state.gradesFilter.searchQuery) {
        const query = state.gradesFilter.searchQuery.toLowerCase();
        filteredGrades = filteredGrades.filter(g =>
            g.studentName.toLowerCase().includes(query) ||
            g.rollNo.toLowerCase().includes(query)
        );
    }

    // Apply course filter
    if (state.gradesFilter.selectedCourse !== 'all') {
        filteredGrades = filteredGrades.filter(g => g.course === state.gradesFilter.selectedCourse);
    }

    // Apply grade filter
    if (state.gradesFilter.selectedGrade !== 'all') {
        filteredGrades = filteredGrades.filter(g => g.grade === state.gradesFilter.selectedGrade);
    }

    // Get unique courses and grades for filters
    const uniqueCourses = [...new Set(state.grades.map(g => g.course))];
    const uniqueGrades = [...new Set(state.grades.map(g => g.grade))].sort();

    container.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <div>
                <h2 class="text-2xl font-semibold">Evaluation & Grades</h2>
                <p class="text-muted-foreground">View and manage student grades</p>
            </div>
            <button class="btn" onclick="alert('Export functionality would download grades as CSV/PDF')">
                <i data-lucide="download" class="w-4 h-4 mr-2"></i> Export Grades
            </button>
        </div>
        
        <!-- Search and Filter Section -->
        <div class="grades-filter-section card mb-6">
            <div class="card-content p-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Search Input -->
                    <div class="relative flex-1">
                        <i data-lucide="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" style="top: 50%; transform: translateY(-50%); position: absolute; left: 0.75rem;"></i>
                        <input 
                            type="text" 
                            id="grades-search-input"
                            placeholder="Search by name or roll number..." 
                            class="input pl-10" 
                            style="padding-left: 2.5rem;"
                            value="${state.gradesFilter.searchQuery}"
                            oninput="filterGrades('search', this.value)"
                        >
                    </div>
                    
                    <!-- Course Filter -->
                    <select class="select" id="grades-course-filter" onchange="filterGrades('course', this.value)">
                        <option value="all" ${state.gradesFilter.selectedCourse === 'all' ? 'selected' : ''}>All Courses</option>
                        ${uniqueCourses.map(course => `
                            <option value="${course}" ${state.gradesFilter.selectedCourse === course ? 'selected' : ''}>${course}</option>
                        `).join('')}
                    </select>
                    
                    <!-- Grade Filter -->
                    <select class="select" id="grades-grade-filter" onchange="filterGrades('grade', this.value)">
                        <option value="all" ${state.gradesFilter.selectedGrade === 'all' ? 'selected' : ''}>All Grades</option>
                        ${uniqueGrades.map(grade => `
                            <option value="${grade}" ${state.gradesFilter.selectedGrade === grade ? 'selected' : ''}>${grade}</option>
                        `).join('')}
                    </select>
                </div>
                
                <!-- Filter Summary -->
                <div class="flex items-center justify-between mt-4 pt-4 border-t" style="border-top: 1px solid var(--border);">
                    <p class="text-sm text-muted-foreground">
                        Showing <span class="font-semibold text-foreground">${filteredGrades.length}</span> of <span class="font-semibold text-foreground">${state.grades.length}</span> students
                    </p>
                    ${(state.gradesFilter.searchQuery || state.gradesFilter.selectedCourse !== 'all' || state.gradesFilter.selectedGrade !== 'all') ? `
                        <button class="btn btn-ghost btn-sm" onclick="clearGradesFilters()">
                            <i data-lucide="x" class="w-4 h-4 mr-1"></i> Clear Filters
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
        
        <!-- Grades Table -->
        <div class="card">
            <div class="card-content p-0">
                <div class="table-container">
                    ${filteredGrades.length > 0 ? `
                        <table>
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Roll No</th>
                                    <th>Course</th>
                                    <th class="text-right">Assignments</th>
                                    <th class="text-right">Midterm</th>
                                    <th class="text-right">Final</th>
                                    <th class="text-right">Total</th>
                                    <th class="text-center">Grade</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${filteredGrades.map(g => `
                                    <tr>
                                        <td class="font-medium">${g.studentName}</td>
                                        <td class="text-muted-foreground">${g.rollNo}</td>
                                        <td class="text-sm">${g.course}</td>
                                        <td class="text-right">${g.assignments}/50</td>
                                        <td class="text-right">${g.midterm}/40</td>
                                        <td class="text-right">${g.final}/100</td>
                                        <td class="text-right font-medium">${g.total}/200</td>
                                        <td class="text-center">
                                            <span class="grade-badge grade-badge-${g.grade.replace('+', 'plus').toLowerCase()}">${g.grade}</span>
                                        </td>
                                        <td class="text-center">
                                            <button class="btn btn-ghost btn-sm" onclick="viewStudentDetails(${g.studentId})" title="View Details">
                                                <i data-lucide="eye" class="w-4 h-4"></i>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    ` : `
                        <div class="flex flex-col items-center justify-center p-12 text-center">
                            <i data-lucide="search-x" class="w-16 h-16 text-muted-foreground mb-4"></i>
                            <h3 class="text-lg font-semibold mb-2">No students found</h3>
                            <p class="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                            <button class="btn btn-outline" onclick="clearGradesFilters()">Clear Filters</button>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;
}

// Filter grades function
function filterGrades(filterType, value) {
    if (!state.gradesFilter) {
        state.gradesFilter = {
            searchQuery: '',
            selectedCourse: 'all',
            selectedGrade: 'all'
        };
    }

    switch (filterType) {
        case 'search':
            state.gradesFilter.searchQuery = value;
            break;
        case 'course':
            state.gradesFilter.selectedCourse = value;
            break;
        case 'grade':
            state.gradesFilter.selectedGrade = value;
            break;
    }

    renderGradesPage();
    lucide.createIcons();
}

// Clear all filters
function clearGradesFilters() {
    state.gradesFilter = {
        searchQuery: '',
        selectedCourse: 'all',
        selectedGrade: 'all'
    };
    renderGradesPage();
    lucide.createIcons();
}

// View student details (placeholder function)
function viewStudentDetails(studentId) {
    const student = state.grades.find(g => g.studentId === studentId);
    if (student) {
        alert(`Student Details:\n\nName: ${student.studentName}\nRoll No: ${student.rollNo}\nCourse: ${student.course}\n\nAssignments: ${student.assignments}/50\nMidterm: ${student.midterm}/40\nFinal: ${student.final}/100\nTotal: ${student.total}/200\nGrade: ${student.grade}`);
    }
}




// Helper to switch pages
function navigateTo(page) {
    state.currentPage = page;
    document.querySelectorAll('.nav-item').forEach(nav => {
        if (nav.getAttribute('data-page') === page) nav.classList.add('active');
        else nav.classList.remove('active');
    });
    renderCurrentPage();
}
