function validateForm() {
    const email = document.getElementById('businessEmail').value;
    const phone = document.getElementById('phone').value;

    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Ngăn không cho gửi form
    }

    // Kiểm tra số điện thoại
    const phonePattern = /^[0-9]*$/; // Chỉ cho phép số
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain only digits.");
        return false; // Ngăn không cho gửi form
    }

    return true; // Cho phép gửi form
}