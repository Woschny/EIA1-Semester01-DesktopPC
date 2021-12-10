//Auf Laden warten
window.addEventListener("load", function () {
    //Total Number Deklaration
    let totalnumber = 0;
    //Array in dem das Objekt für jede Reihe der Todo-Liste gespeichert wird
    let todolist = [];
    //Array als Speicherort für Farbenreihenfolge der Checked-Haken (der wert der hier am Anfang schon deklariert ist, ist die "Standart-Farbe")
    let col = ["grey"];
    //div in dem später die Inhalte des Objektes angezeigt werden
    const listenpunkt = document.querySelector("div");
    //Eventlistener für Hinzufügen einer Reihe
    document.querySelector(".abgabe").addEventListener("click", function () { addTask(); });
    //Erstellung von eventlistenern für Checked-Haken und Mülleimer für jede Reihe, die schon existiert (keine Tatsächlichen Buttons sondern Text hat aber die gleiche Funktion)
    function createButton() {
        for (let zahl = 0; zahl <= totalnumber; zahl++) {
            if (document.querySelector(".t" + zahl)) {
                document.querySelector(".t" + zahl).addEventListener("click", function () { delTask(zahl); });
                document.querySelector(".c" + zahl).addEventListener("click", function () { checkTask(zahl); });
            }
        }
    }
    //Erstellung von einer Reihe in der Todo-Liste mit dem Objekt
    function createPoint(totalnumber) {
        listenpunkt.innerHTML += "<a class = 'a1 " + col[totalnumber] + " c" + totalnumber + "'>" + todolist[totalnumber].check;
        listenpunkt.innerHTML += "<a>" + todolist[totalnumber].inhalt + "</a>";
        listenpunkt.innerHTML += "<a class = 't" + totalnumber + "'>" + todolist[totalnumber].delete;
    }
    //Funktion die beim Drücken der Enter Taste oder beim Klicken auf den dafür vorgesehenen Knopf das Objekt welches für die Reihe in der Todo-Liste verantwortlich ist befüllt und den totalnumber Counter erhöht.
    //Cleared ebenfalls das Eingabe Feld und füllt die befüllt die Farbreihenfole
    function addTask() {
        event.preventDefault();
        todolist.push({
            check: "<i class= 'fas fa-check'> </i> &nbsp;",
            inhalt: "<i> platzhalterinhalt <i/>",
            delete: "&nbsp; <i class= 'fas fa-trash'> </i> <br>"
        });
        todolist[totalnumber].inhalt = document.querySelector(".eingabe").value;
        createPoint(totalnumber);
        createButton();
        col.push("grey");
        totalnumber++;
        document.querySelector("h2").innerHTML = totalnumber + " in total";
        document.querySelector(".eingabe").value = "";
    }
    //überprüft ob der Haken grau oder grün ist. Beim Drücken auf den Haken wird die Farbe zum jeweils anderen geändert und die änderung wird im Array für die Farbreihenfolge gespeichert
    function checkTask(zahl) {
        const checker = document.querySelector(".c" + zahl);
        if (checker.getAttribute("class") == "a1 grey c" + zahl) {
            col[zahl] = "green";
            checker.setAttribute("class", "a1 green c" + zahl);
        }
        else {
            checker.setAttribute("class", "a1 grey c" + zahl);
            col[zahl] = "grey";
        }
    }
    //Die ausgewählte Reihe wird aus dem Objekt gelöscht und die Farbe aus dem Array der Farbreihenfolge. 
    //Die gesamte Liste wird geleert und wieder durch das Array mit den Objekten und die Farbreihenfolge neu befüllt.
    function delTask(zahl) {
        const checker = document.querySelector(".c" + zahl);
        todolist.splice(zahl, 1);
        col.splice(zahl, 1);
        listenpunkt.innerHTML = "";
        totalnumber--;
        for (let totalnumber = 0; totalnumber < todolist.length; totalnumber++) {
            createPoint(totalnumber);
        }
        document.querySelector("h2").innerHTML = totalnumber + " in total";
        createButton();
        document.querySelector(".eingabe").value = "";
    }
});
//# sourceMappingURL=script.js.map