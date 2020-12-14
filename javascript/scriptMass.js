
// Переменная содержащая номер по которому нужно искать элемент в массиве
var needType = 2;

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
    //alert(data[0].id);
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
