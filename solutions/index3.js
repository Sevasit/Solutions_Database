const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 67 },
];

function groupStudentsByGrade(students) {
    const result = {
    };
    const sorted = students.sort((a, b) => b.grade - a.grade);
    for (const student of sorted) {
        if (student.grade >= 90) {
            if (!result["A"]) {
                result["A"] = [];
            }
            result["A"].push(student);
        } else if (student.grade >= 80 && student.grade <= 89) {
            if (!result["B"]) {
                result["B"] = [];
            }
            result["B"].push(student);
        } else if (student.grade >= 70 && student.grade <= 79) {
            if (!result["C"]) {
                result["C"] = [];
            }
            result["C"].push(student);
        } else {
            if (!result["F"]) {
                result["F"] = [];
            }
            result["F"].push(student);
        }

    }
    return result;
}

console.log(groupStudentsByGrade(students));