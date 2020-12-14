$("#myForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        lastname: {
            required: true,
            minlength: 3
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
            minlength: jQuery.validator.format("Длина должна быть больше 2-х символов")
        },
        name: {
            required: "Поле имя обязательно для заполнения",
            minlength: jQuery.validator.format("Длина должна быть больше 3-х символов")
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
        alert("Регистрация успешна!");
        createTable();
    }
});

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

jQuery.validator.addMethod("notEqual", function (value, element, param) {
    return this.optional(element) || value != param;
}, "");

jQuery.validator.addMethod("validateDate", function (value, element) {

    var month = massMonth[value];
    return this.optional(element) || month != undefined;
}, "");

var createTable = function () {
    var uName = document.getElementById("name").value;

    var mydata = [{
        userName: document.getElementById("name").value,
        userLastName: document.getElementById("lastname").value,
        date: (document.getElementById("day").value + "/" + massMonth[document.getElementById("month").value] + "/"+ document.getElementById("year").value),
        city: document.getElementById("city").value
    }
    ];
    $("#grid").jqGrid({
        datatype: "local",
        data: mydata,
        colNames: ['Имя', 'Фамилия', 'Дата рождения', 'Город'],
        colModel: [{
            name: 'userName',
            width: 150,
            center: true
        }, {
            name: 'userLastName',
            width: 150
        }, {
            name: 'date',
            width: 150
        }, {
            name: 'city',
            width: 100
        }],
        //multiselect: true,
        height: "auto",
    });
};

//createTable();
