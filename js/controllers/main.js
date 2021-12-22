



var validation = new Validation();

function getId(id) {
    return document.getElementById(id)
}
function sendDetailUser() {
    const fullName = getId('fullName').value
    const email = getId('email').value
    const phone = getId('phone').value
    const content = getId('content').value

    let isValid = true

    isValid &= validation.checkEmpty(fullName, 'tb_fullName', 'Họ tên không được để trống ') && validation.checkName(fullName, 'tb_fullName', 'Họ tên phải là ký tự chữ ')
    isValid &= validation.checkEmpty(email, 'tb_email', 'Email không được để trống ') && validation.checkEmail(email, 'tb_email', 'email không hợp lệ ')
    isValid &= validation.checkEmpty(phone, 'tb_phone', 'Số điện thoại không được để trống ') && validation.checkPhone(phone, 'tb_phone', 'Số điện thoại không hợp lệ ')
    isValid &= validation.checkEmpty(content, 'tb_content', 'Nội dung không được để trống') && validation.checkMin(content, 'tb_content', 'Nội dụng phải nhiều hơn 100 kí tự ')

    if (isValid) {
        $.notify("Gửi thông tin thành công !", "success");

        setTimeout(function () {
            location.reload();
        }, 2000)

    }


}

