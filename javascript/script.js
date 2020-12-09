function validate() {

    event.preventDefault();

    var name = document.form.name;
    var lastname = document.getElementById("last");

    var e = document.getElementById("day");
    var day = document.getElementById("day").options[e.selectedIndex].value;

    var indexMonth = document.getElementById("month").selectedIndex;
    var month = document.getElementById("month").options[indexMonth].text;

    var indexYear = document.getElementById("month").selectedIndex;
    var year = document.getElementById("year").options[indexYear].text;
    
    if (name.value.length > 10 || name.value.length < 1) {
        name.style.borderColor = "red";
    }

    if (lastname.value.length > 10 || lastname.value.length < 1) {
        lastname.style.borderColor = "red";
    }

    if (!parseInt(day) && !parseInt(year) && month === "Месяц") {
       
    }
    else {
        if (!parseInt(day))
            document.getElementById("day").style.borderColor = "red";
        if (!parseInt(year))
            document.getElementById("year").style.borderColor = "red";
        if (month === "Месяц")
            document.getElementById("month").style.borderColor = "red";
    }

    return true;
}