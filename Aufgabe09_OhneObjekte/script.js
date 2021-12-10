//Auf Laden warten
window.addEventListener("load", function () {
    //Total Number Deklaration
    let totalnumber = 0;
    //Hinzufügen eines Punktes der Todo Liste
    function addTask() {
        event.preventDefault();
        //Einzelnen Listenpunkt erstellen
        const listenPunkt = document.createElement("div");
        listenPunkt.classList.add("listenpunkt");
        //Text des Listenpunktes
        const textInhalt = document.createElement("li");
        textInhalt.innerHTML = document.querySelector(".eingabe").value;
        textInhalt.classList.add("text");
        listenPunkt.appendChild(textInhalt);
        //Trashknopf 
        const trashKnopf = document.createElement("button");
        trashKnopf.innerHTML = "<b class= 'fas fa-trash'> </b>";
        trashKnopf.classList.add("trash");
        listenPunkt.appendChild(trashKnopf);
        //Totalnumber Counter +1
        totalnumber++;
        document.querySelector("h2").innerHTML = totalnumber + " in total";
        //Checkknopf
        const checkedKnopf = document.createElement("button");
        checkedKnopf.innerHTML = "<b class= 'fas fa-check'> </b>";
        checkedKnopf.classList.add("check");
        listenPunkt.appendChild(checkedKnopf);
        //An Liste Hängen
        document.querySelector(".liste").appendChild(listenPunkt);
        //Textfeld Leeren
        document.querySelector(".eingabe").value = "";
    }
    //Löschen und Checken eines Punktes der Todo Liste
    function delCheckTask() {
        const auswahl = event.target;
        //Löschen und totalnumber -1
        if (auswahl.classList[0] === "trash") {
            auswahl.parentElement.remove();
            totalnumber--;
            document.querySelector("h2").innerHTML = totalnumber + " in total";
        }
        //Checkbox toggel
        if (auswahl.classList[0] === "check") {
            auswahl.classList.toggle("checked");
        }
    }
    //Eventlisteners für Add Check und Delete
    document.querySelector(".abgabe").addEventListener("click", function () { addTask(); });
    document.querySelector(".liste").addEventListener("click", function () { delCheckTask(); });
});
//# sourceMappingURL=script.js.map