// Dashboard Section Module
// Renders the main dashboard with profile, stats, and quick actions

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
