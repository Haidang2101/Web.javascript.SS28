let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

function filter(students) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        let scores = students[i].scores;
        let average = (scores.math + scores.english + scores.literature) / 3;
        if (average >= 8) {
            result.push(students[i]);
        }
    }
    return result;
}
console.log("Danh sách sinh viên điểm trung bình >= 8:");
console.log(filter(students));