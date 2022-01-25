function ucitajStranicu1() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.status == 200)
            document.getElementById("ucitajSadrzaj").innerHTML = ajax.responseText;
    };
    ajax.open("GET", "stranica1.html", true);
    ajax.send();
}
function ucitajStranicu2() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.status == 200)
            document.getElementById("ucitajSadrzaj").innerHTML = ajax.responseText;
    };
    ajax.open("GET", "stranica2.html", true);
    ajax.send();
}
function ucitajStranicu3() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.status == 200)
            document.getElementById("ucitajSadrzaj").innerHTML = ajax.responseText;
    };
    ajax.open("GET", "stranica3.html", true);
    ajax.send();
}
