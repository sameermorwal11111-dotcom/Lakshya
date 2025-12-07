// Assignments Section Module
// Renders the assignments page with filtering and modal handlers

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
