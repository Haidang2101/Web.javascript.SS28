let dSachNV = [];

function themNhanVien() {
    let id = prompt("Nhập ID nhân viên:");
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí công việc:");
    let salary = +prompt("Nhập mức lương:");

    if (dSachNV.some(nv => nv.id === id)) {
        console.log("ID này đã tồn tại. Vui lòng chọn ID khác.");
    } else {
        let nhanVienMoi = {
            id: id,
            name: name,
            position: position,
            salary: salary
        };
        dSachNV.push(nhanVienMoi);
        console.log("Đã thêm nhân viên mới.");
    }
}

function xoaNhanVien() {
    let id = prompt("Nhập ID nhân viên cần xóa:");

    let nhanVien = dSachNV.find(nv => nv.id === id);

    if (nhanVien) {
        let xacNhanXoa = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${nhanVien.name} với ID ${id}?`);
        if (xacNhanXoa) {
            dSachNV = dSachNV.filter(nv => nv.id !== id);
            console.log(`Đã xóa nhân viên với ID ${id}.`);
        }
    } else {
        console.log("Không tìm thấy nhân viên với ID này.");
    }
}

function capNhatLuong() {
    let id = prompt("Nhập ID nhân viên cần cập nhật lương:");
    let nhanVien = dSachNV.find(nv => nv.id === id);

    if (nhanVien) {
        let luongMoi = +prompt(`Nhập mức lương mới cho nhân viên ${nhanVien.name}:`);
        nhanVien.salary = luongMoi;
        console.log(`Đã cập nhật mức lương của nhân viên ${nhanVien.name}.`);
    } else {
        console.log("Không tìm thấy nhân viên với ID này.");
    }
}

function timKiemNhanVien() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let ketQua = dSachNV.filter(nv => nv.name.toLowerCase().includes(name.toLowerCase()));

    if (ketQua.length > 0) {
        console.log("Danh sách nhân viên tìm được:");
        for (let i = 0; i < ketQua.length; i++) {
            let nv = ketQua[i];
            console.log(`ID: ${nv.id}, Tên: ${nv.name}, Vị trí: ${nv.position}, Lương: ${nv.salary}`);
        }
    } else {
        console.log("Không tìm thấy nhân viên với tên này.");
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
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
                break;
        }
    } while (luaChon !== 5);
}

hienThiMenu();
