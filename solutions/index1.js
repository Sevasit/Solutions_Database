

const projects = [
    { name: "Project A", budget: 5000, priority: 1 },
    { name: "Project B", budget: 3000, priority: 2 },
    { name: "Project C", budget: 2000, priority: 3 },
];

const totalBudget = 8000;


function allocateBudgets(projects, totalBudget) {
    //เรียงลำดับความสำคัญของโปรเจคจากน้อยไปมาก
    const sorted = projects.sort((a, b) => a.priority - b.priority);
    let remainingBudget = totalBudget;
    const result = [];
    // loop array object
    for (const item of sorted) {
        // ถ้างบที่เหลือ >= งบที่ต้องการจะได้รับงบ (เอา object ที่ได้รับงบเข้า array result)
        if (remainingBudget >= item.budget) {
            result.push({
                name: item.name,
                allocated: item.budget
            });
            remainingBudget -= item.budget;
            // ถ้างบที่เหลือ < งบที่ต้องการจะได้รับงบ (เอา object ที่ไม่ได้รับงบเข้า array result)
        } else {
            result.push({
                name: item.name,
                allocated: 0
            });
        }
    }
    return result;
}

console.log(allocateBudgets(projects, totalBudget));