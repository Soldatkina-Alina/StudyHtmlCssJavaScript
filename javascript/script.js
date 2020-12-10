$("#myForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 10
        },
        lastname: {
            required: true,
            minlength: 10
        },
        day: {
            required: true,
            digits: true
        },
        year: {
            required: true,
            digits: true
        },
        month: {
            validateDate: true
        }

    },
    messages: {
        lastname: {
            required: "Поле фамилия обязательно для заполнения",
            minlength: jQuery.validator.format("Длина должна быть больше 10-ти символов")
        },
        name: {
            required: "Поле имя обязательно для заполнения",
            minlength: jQuery.validator.format("Длина должна быть больше 10-ти символов")
        },
        day: {
            required: "",
            digits: "",
        },
        year: {
            required: "",
            digits: "",
        }

    },
    submitHandler: function () {
        alert("Валидация успешна!");
    }
});

jQuery.validator.addMethod("notEqual", function (value, element, param) {
    return this.optional(element) || value != param;
}, "");

jQuery.validator.addMethod("validateDate", function (value, element) {
    var massMonth = {
        "Январь": 1,
        "Февраль": 2,
        "Март": 3,
        "Апрель": 4,
        "Май": 5,
        "Июнь": 6,
        "Июль": 7,
        "Август": 8,
        "Сентябрь": 9,
        "Октябрь": 10,
        "Ноябрь": 11,
        "Декабрь": 12
    };
    var month = massMonth[value];
    return this.optional(element) || month != undefined;
}, "");
