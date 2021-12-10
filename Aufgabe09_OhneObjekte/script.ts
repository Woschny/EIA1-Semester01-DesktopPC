//Auf Laden warten
window.addEventListener("load", function (): void {
    //Total Number Deklaration
    let totalnumber: number = 0;

    //Hinzufügen eines Punktes der Todo Liste
    function addTask(): void {
        event.preventDefault();
        //Einzelnen Listenpunkt erstellen
        const listenPunkt: HTMLDivElement = document.createElement("div");
        listenPunkt.classList.add("listenpunkt");
        //Text des Listenpunktes
        const textInhalt: HTMLLIElement = document.createElement("li");
        textInhalt.innerHTML = (<HTMLInputElement>document.querySelector(".eingabe")).value;
        textInhalt.classList.add("text");
        listenPunkt.appendChild(textInhalt);
        //Trashknopf 
        const trashKnopf: HTMLButtonElement = document.createElement("button");
        trashKnopf.innerHTML = "<b class= 'fas fa-trash'> </b>";
        trashKnopf.classList.add("trash");
        listenPunkt.appendChild(trashKnopf);
        //Totalnumber Counter +1
        totalnumber ++;
        document.querySelector("h2").innerHTML = totalnumber + " in total";
        //Checkknopf
        const checkedKnopf: HTMLButtonElement = document.createElement("button");
        checkedKnopf.innerHTML = "<b class= 'fas fa-check'> </b>";
        checkedKnopf.classList.add("check");
        listenPunkt.appendChild(checkedKnopf);
        //An Liste Hängen
        document.querySelector(".liste").appendChild(listenPunkt);
        //Textfeld Leeren
        (<HTMLInputElement>document.querySelector(".eingabe")).value = "";
        
    }
    //Löschen und Checken eines Punktes der Todo Liste
    function delCheckTask(): void {
        const auswahl: Element = event.target as Element;
        //Löschen und totalnumber -1
        if (auswahl.classList[0] === "trash") {
            auswahl.parentElement.remove();
            totalnumber --;
            document.querySelector("h2").innerHTML = totalnumber + " in total";
        }
        //Checkbox toggel
        if (auswahl.classList[0] === "check") {
            auswahl.classList.toggle("checked");
        }
    }

    //Eventlisteners für Add Check und Delete
    document.querySelector(".abgabe").addEventListener("click", function (): void { addTask(); });
    document.querySelector(".liste").addEventListener("click", function (): void { delCheckTask(); });

});
