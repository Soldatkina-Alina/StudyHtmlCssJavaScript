
// Переменная содержащая номер по которому нужно искать эелмент в массиве
var needType = 2;

//Массив с именами
var _0x794d = ["\x41", "\x48", "\x49", "\x43", "\x44", "\x45", "\x46",
    "\x47\x65\x74\x44\x61\x74\x61", //7
    "\x66\x75\x6E\x63\x74\x69\x6F\x6E", //8
    "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", //9
    "\x70\x61\x72\x73\x65"];

//Массив с данными и функцией их 
var Study = new (function () {
    var _0xeee8x2 = [{ id: 1, name: _0x794d[0], type: 1 }, //1
    { id: 2, name: null, type: 2 }, //2
    { id: 7, name: _0x794d[0], type: 3 }, //3
    { id: 8, type: 1 }, //4
    { id: 9, name: _0x794d[1], type: 1 }, //5
    { id: 10, name: _0x794d[2], type: 2 }, //6
    { id: 3, name: _0x794d[3], type: 1 }, //7
    { id: 4, name: _0x794d[4], type: 2 }, //8
    { id: 11, name: _0x794d[5], type: 1 }, //9
    { id: 6, name: _0x794d[6], type: 1 }]; //10

    this[_0x794d[7]] = function (_0xeee8x3) {
        if (typeof _0xeee8x3 === _0x794d[8]) {
            setTimeout(function () {
                var _0xeee8x4 = JSON[_0x794d[10]](JSON[_0x794d[9]](_0xeee8x2)); _0xeee8x3(_0xeee8x4) //JSON.parse(JSON.stringify(_0xeee8x2))
            }, 100)
        }
    }
})()

// Вывод массива в приемлемом виде на экран
var printMass = function (data, text = "") {
    var a = document.getElementById("test");
    var arr = a.childNodes;
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerHTML += "<br/><br><b>" + text + "</b>";
        for (var j = 0; j < data.length; j++)
            arr[i].innerHTML += "<br/><br>" + "ID:" + data[j]["id"] + " | Name:" + data[j]["name"] + " | Type:" + data[j]["type"];
    }
}

// Сортировка массива по возрастанию id 
var SortMassById = function (data) {
    printMass(data.sort((prev, next) => prev.id - next.id), "Сортировка по возрастанию id ");
}

// Сортировка массива по возрастанию type и по убыванию id
var SortMassByIdAndType = function (data) {
    data.sort(function (x1, x2) {
        if (x1.type < x2.type) return -1;
        if (x1.type > x2.type) return 1;

        if (x1.id < x2.id) return 1;
        if (x1.id > x2.id) return -1;

        return 0;
    });

    printMass(data, "Сортировка по возрастанию type и по убыванию id");
}

// Выбор из массива элементов, тип которых равен 2
var getElementWithSomeType = function (data) {

    printMass(data.filter(function (val) {
        return val.type === needType;
    }), "Только элементы с type = 2");
}

// Выбор из массива элементов, тип которых равен 2
var getElementWithName = function (data) {

    printMass(data.filter(function (val) {
        return val.name != undefined;
    }), "Элементы с заполненным именем");
}

//Добавлие в массив элемента с id недостающего идентификатора и сортировка массива по убыванию
var addLostIden = function (data) {
    var lastId = data.sort((prev, next) => prev.id - next.id)[data.length - 1]["id"];
    var firstId = data.sort((prev, next) => prev.id < next.id)[data.length - 1]["id"];
    for (var i = firstId; i <= lastId; i++) {
        var isFind = false;
        for (var j = 0; j < data.length; j++)
            if (data[j]["id"] === i)
                isFind = true;
        if (!isFind)
            data.push({ id: i });
    }

    printMass(data.sort((prev, next) => prev.id < next.id), "Добавлие недостающего идентификатора и сортировка по убыванию");
}
// Выбор из массива элементов с 3 по 5
var SpliceElem = function (data) {

    var removed = data.splice(3, 5);
    printMass(removed, "Элементы с 3 по 5");
}

// Функция вызывающая поочередно все переменные для дейтсвий с массивом
var getMass = function () {
    Study.GetData(SortMassById);

    Study.GetData(SortMassByIdAndType);

    Study.GetData(getElementWithSomeType);

    Study.GetData(getElementWithName);

    Study.GetData(addLostIden);

    Study.GetData(SpliceElem);
}

//Начало работы
getMass();
