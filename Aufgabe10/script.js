//Auf Laden warten
window.addEventListener("load", function () {
    const artyom = new Artyom();
    //Total Number Deklaration
    let totalnumber = 0;
    let opennumber = 0; //NEU Variable hinzugefügt
    let donenumber = 0; //NEU Variable hinzugefügt
    //Array in dem das Objekt für jede Reihe der Todo-Liste gespeichert wird
    let todolist = [];
    //Array als Speicherort für Farbenreihenfolge der Checked-Haken (der wert der hier am Anfang schon deklariert ist, ist die "Standart-Farbe")
    let col = ["grey"];
    //div in dem später die Inhalte des Objektes angezeigt werden
    const listenpunkt = document.querySelector("div");
    //Spracherkennung
    artyom.addCommands({
        indexes: ["schreib * auf die Liste"],
        smart: true,
        action: function (i, wildcard) {
            addTask(wildcard); //wildcard wird nicht mehr in der Konsole ausgegeben sondern als Variable für den Textinhalt des Listenpunktes verwendet 
            document.querySelector(".eingabe").value = ""; //Danach wird das Eingabefeld gecleart, weil ich die Bibliothek so verändert habe, dass das "Zwischenergebnis"
        } //in den Input als Wert eingetragen wird.
    });
    function startContinuousArtyom() {
        document.querySelector(".eingabe").value = "";
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                document.querySelector(".eingabe").value = "";
            });
        }, 250);
    }
    startContinuousArtyom();
    //Eventlistener für Hinzufügen einer Reihe
    document.querySelector(".abgabe").addEventListener("click", function () { addTask(document.querySelector(".eingabe").value); });
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
    function addTask(entscheider) {
        event.preventDefault();
        todolist.push({
            check: "<i class= 'fas fa-check'> </i> &nbsp;",
            inhalt: "<i> platzhalterinhalt <i/>",
            delete: "&nbsp; <i class= 'fas fa-trash'> </i> <br>"
        });
        todolist[totalnumber].inhalt = entscheider;
        createPoint(totalnumber);
        createButton();
        opennumber++; //NEU opennumber wird beim erstellen eines Tasks erhöht
        col.push("grey");
        totalnumber++;
        document.querySelector("h2").innerHTML = totalnumber + " in total " + opennumber + " open " + donenumber + " done"; //NEU opennumber und donenumber zur "Anzeige" hinzugefügt
        document.querySelector(".eingabe").value = "";
        document.querySelector(".texts").innerHTML = "listening";
    }
    //überprüft ob der Haken grau oder grün ist. Beim Drücken auf den Haken wird die Farbe zum jeweils anderen geändert und die änderung wird im Array für die Farbreihenfolge gespeichert
    function checkTask(zahl) {
        const checker = document.querySelector(".c" + zahl);
        if (checker.getAttribute("class") == "a1 grey c" + zahl) {
            col[zahl] = "green";
            checker.setAttribute("class", "a1 green c" + zahl);
            donenumber++; //NEU Wertupdate beim drücken auf den Haken hinzugefügt
            opennumber--; //NEU Wertupdate beim drücken auf den Haken hinzugefügt
        }
        else {
            checker.setAttribute("class", "a1 grey c" + zahl);
            col[zahl] = "grey";
            donenumber--; //NEU Wertupdate beim drücken auf den Haken hinzugefügt
            opennumber++; //NEU Wertupdate beim drücken auf den Haken hinzugefügt
        }
        document.querySelector("h2").innerHTML = totalnumber + " in total " + opennumber + " open " + donenumber + " done"; //NEU Anzeigenupade beim drücken der Haken hinzugefügt
    }
    //Die ausgewählte Reihe wird aus dem Objekt gelöscht und die Farbe aus dem Array der Farbreihenfolge. 
    //Die gesamte Liste wird geleert und wieder durch das Array mit den Objekten und die Farbreihenfolge neu befüllt.
    function delTask(zahl) {
        const checker = document.querySelector(".c" + zahl);
        todolist.splice(zahl, 1);
        col.splice(zahl, 1);
        listenpunkt.innerHTML = "";
        if (checker.getAttribute("class") == "a1 grey c" + zahl) {
            opennumber--;
        } //NEU update der Variablen beim löschen einers Listenpunktes
        else {
            donenumber--;
        } //NEU update der Variablen beim löschen einers Listenpunktes
        totalnumber--;
        for (let totalnumber = 0; totalnumber < todolist.length; totalnumber++) {
            createPoint(totalnumber);
        }
        document.querySelector("h2").innerHTML = totalnumber + " in total " + opennumber + " open " + donenumber + " done"; //NEU opennumber und donenumber zur "Anzeige" hinzugefügt
        createButton();
        document.querySelector(".eingabe").value = "";
    }
});
//# sourceMappingURL=script.js.map