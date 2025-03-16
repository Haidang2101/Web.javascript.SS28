let employees = [];

function addEmployee() {
    let id = prompt("ID:");
    let name = prompt("Tên:");
    let position = prompt("Vị trí:");
    let salary = parseFloat(prompt("Lương:"));

    employees.push({ id, name, position, salary });
    alert("Thêm thành công");
}

function deleteEmployee() {
    let id = prompt("Nhập ID cần xóa:");
    let index = -1;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        let confirmDelete = prompt("Bạn có chắc muốn xóa nhân viên?(y/n)");
        if (confirmDelete == "y") {
            employees.splice(index, 1);
            alert("Nhân viên đã bị xóa.");
        } else {
            alert("Hủy xóa.");
        }
    } else {
        alert("Không tìm thấy ID nhân viên");
    }
}

function updateSalary() {
    let id = prompt("Nhập ID cần cập nhật lương:");
    let employee = null;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employee = employees[i];
            break;
        }
    }

    if (employee) {
        let salary = parseFloat(prompt("Nhập mức lương mới:"));
        employee.salary = salary;
        alert("Cập nhập thành công");
    } else {
        alert("Không tìm thấy ID nhân viên");
    }
}

function searchEmployee() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let results = [];

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase().includes(name.toLowerCase())) {
            results.push(employees[i]);
        }
    }

    if (results.length > 0) {
        let message = "Danh sách nhân viên tìm thấy:\n";
        for (let i = 0; i < results.length; i++) {
            message += `ID: ${results[i].id}, Tên: ${results[i].name}, Vị trí: ${results[i].position}, Lương: ${results[i].salary}\n`;
        }
        alert(message);
    } else {
        alert("Không tìm thấy nhân viên");
    }
}

let choice;

do {
    choice = prompt("MENU\nQuản lý nhân viên:\n1. Thêm nhân viên\n2. Xóa nhân viên theo ID\n3. Cập nhật lương nhân viên\n4. Tìm kiếm nhân viên theo tên\n5. Thoát\nChọn một tùy chọn:");
    switch (choice) {
        case "1":
            addEmployee();
            break;
        case "2":
            deleteEmployee();
            break;
        case "3":
            updateSalary();
            break;
        case "4":
            searchEmployee();
            break;
        case "5":
            alert("Thoát");
            break;
        default:
            alert("Lựa chọn sai");
    }
} while (choice !== "5");
