// Grades Section Module
// Renders the evaluation and grades page

function renderGradesPage() {
    const container = document.getElementById('grades-content');
    container.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <div>
                <h2 class="text-2xl font-semibold">Evaluation & Grades</h2>
                <p class="text-muted-foreground">View and manage student grades</p>
            </div>
        </div>
        <div class="card">
            <div class="card-content p-0">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Roll No</th>
                                <th class="text-right">Assignments</th>
                                <th class="text-right">Midterm</th>
                                <th class="text-right">Final</th>
                                <th class="text-right">Total</th>
                                <th class="text-center">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.grades.map(g => `
                                <tr>
                                    <td class="font-medium">${g.studentName}</td>
                                    <td class="text-muted-foreground">${g.rollNo}</td>
                                    <td class="text-right">${g.assignments}</td>
                                    <td class="text-right">${g.midterm}</td>
                                    <td class="text-right">${g.final}</td>
                                    <td class="text-right font-medium">${g.total}</td>
                                    <td class="text-center"><span class="badge badge-outline">${g.grade}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
