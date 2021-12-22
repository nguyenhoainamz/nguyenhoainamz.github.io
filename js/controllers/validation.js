function Validation() {
    //Phương thức
    //kiểm tra ô nhập liệu có bị trống hay không
    this.checkEmpty = function (inputval, spanID, message) {
        //trim: Xóa khoảng trắng trước và sau chuỗi
        // "   test   " => "test"
        // "       "=> ""
        if (inputval.trim() == "") {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkName = function (inputval, spanID, message) {
        // RegExp: đối tượng giúp chuyển đổi từ string sang kiêu Regular expressions
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if (pattern.test(inputval)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }

    }

    this.checkEmail = function (inputval, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputval.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkPhone = function (inputval, spanID, message) {
        const regexPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        if (regexPhone.test(inputval)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkMin = function (inputval, spanID, message) {

        if (inputval.trim().length > 100) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }



}