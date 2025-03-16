let dSachNV = [];

function themNhanVien() {
    let id = prompt("Nhập ID nhân viên:");
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí công việc:");
    let salary = +prompt("Nhập mức lương:");

    if (dSachNV.some(nv => nv.id === id)) {
        alert("ID này đã tồn tại. Vui lòng chọn ID khác.");
    } else {
        let newEmployee = {
            id: id,
            name: name,
            position: position,
            salary: salary
        };
        dSachNV.push(newEmployee);
        alert("Đã thêm nhân viên mới.");
    }
}

function xoaNhanVien() {
    let id = prompt("Nhập ID nhân viên cần xóa:");

    let employee = dSachNV.find(nv => nv.id === id);

    if (employee) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employee.name} với ID ${id}?`);
        if (confirmDelete) {
            dSachNV = dSachNV.filter(nv => nv.id !== id);
            alert(`Đã xóa nhân viên với ID ${id}.`);
        }
    } else {
        alert("Không tìm thấy nhân viên với ID này.");
    }
}

function capNhatLuong() {
    let id = prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = dSachNV.find(nv => nv.id === id);

    if (employee) {
        let newSalary = +prompt(`Nhập mức lương mới cho nhân viên ${employee.name}:`);
        employee.salary = newSalary;
        alert(`Đã cập nhật mức lương của nhân viên ${employee.name}.`);
    } else {
        alert("Không tìm thấy nhân viên với ID này.");
    }
}

function timKiemNhanVien() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let result = dSachNV.filter(nv => nv.name.toLowerCase().includes(name.toLowerCase()));

    if (result.length > 0) {
        alert("Danh sách nhân viên tìm được:\n" + result.map(nv => `ID: ${nv.id}, Tên: ${nv.name}, Vị trí: ${nv.position}, Lương: ${nv.salary}`).join("\n"));
    } else {
        alert("Không tìm thấy nhân viên với tên này.");
    }
}

function hienThiMenu() {
    let luaChon;
    do {
        luaChon = parseInt(prompt("Chọn chức năng:\n1. Thêm nhân viên mới\n2. Xóa nhân viên theo ID\n3. Cập nhật mức lương\n4. Tìm kiếm nhân viên theo tên\n5. Thoát"));

        switch (luaChon) {
            case 1:
                themNhanVien();
                break;
            case 2:
                xoaNhanVien();
                break;
            case 3:
                capNhatLuong();
                break;
            case 4:
                timKiemNhanVien();
                break;
            case 5:
                alert("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
                break;
        }
    } while (luaChon !== 5);
}

hienThiMenu();
