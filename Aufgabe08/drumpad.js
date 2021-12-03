//Aufruf vom Javascript erst nach vollständigem lesen des HTML DOM
window.addEventListener("load", function () {
    //Variablen Deklaration
    var link = ["assets/A.mp3", "assets/G.mp3", "assets/F.mp3", "assets/C.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var reihenfolge = [link[5], link[6], link[5], link[4]];
    var poss = [link[5], link[4], link[6]];
    var aufnahme = [];
    var key = 0;
    var aufnahmeIndex = 0;
    var recordIndex = 0;
    var btn = document.querySelector("#playbutton");
    var recorder = document.querySelector("#record");
    var beat = new Audio(reihenfolge[key]);
    var max = poss.length - 1;
    var intervall = setInterval(rythmus, 200);
    //Stellt eine zufällige Zahl der zwischen 0 und der Länge von Poss her
    function randomnum(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }
    //Mixed einen zufälligen Beat bestehend aus den Audiodatein in poss
    function remix() {
        for (var i = 0; i <= poss.length; i++) {
            recorder.style.color = "white";
            reihenfolge[i] = poss[randomnum(max)];
        }
    }
    //Löscht den Beat
    function deleteBeat() {
        reihenfolge.length = 0;
        aufnahmeIndex = 0;
    }
    //Sorgt für den Loop und spielt den Beat
    function rythmus() {
        if (key >= reihenfolge.length)
            key = 0;
        if (btn.getAttribute("class") == "fas fa-stop") {
            beat = new Audio(reihenfolge[key]);
            playSample(reihenfolge[key]);
            key += 1;
        }
    }
    //Macht den Playknopf zum Stoppknopf wenn er gedrückt wurde und Aktiviert die Funktion die den Beat ab spielt bzw. Pausiert 
    function beatFunktion() {
        if (btn.getAttribute("class") == "fas fa-stop") {
            btn.setAttribute("class", "fas fa-play");
            rythmus();
        }
        else {
            btn.setAttribute("class", "fas fa-stop");
            recorder.style.color = "white";
            if (btn.getAttribute("class") == "fas fa-play") {
                beat.pause();
            }
        }
    }
    //Legt fest, dass die Arrayreihenfolge gleich der Aufnahme sein soll
    function record() {
        reihenfolge = aufnahme;
        recorder.style.color = "red";
    }
    //Gibt True zurück wenn der Aufnhamemodus aktiv sein soll. (Jedes zweite mal wenn man auf den Knopf drückt)
    function isEven(recordIndex) {
        return recordIndex % 2 == 0;
    }
    //Toggelt den Aufnahmemodus (Die Aufnahme läuft automatisch (Ist ja der Sinn von dem Drumpad))
    function recording() {
        if (isEven(recordIndex) == true) {
            record();
        }
        else {
            recorder.style.color = "white";
        }
    }
    //Spielt den standart Ton beim Drücken eines Knopfes ab
    function playSample(tlink) {
        var ton = new Audio(tlink);
        ton.play();
    }
    //Drumpad Sound + Aufnahme Funktion          
    document.querySelector(".knopf0").addEventListener("click", function () { playSample(link[0]); aufnahme[aufnahmeIndex] = link[0]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf1").addEventListener("click", function () { playSample(link[1]); aufnahme[aufnahmeIndex] = link[1]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf2").addEventListener("click", function () { playSample(link[2]); aufnahme[aufnahmeIndex] = link[2]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf3").addEventListener("click", function () { playSample(link[3]); aufnahme[aufnahmeIndex] = link[3]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf4").addEventListener("click", function () { playSample(link[4]); aufnahme[aufnahmeIndex] = link[4]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf5").addEventListener("click", function () { playSample(link[5]); aufnahme[aufnahmeIndex] = link[5]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf6").addEventListener("click", function () { playSample(link[6]); aufnahme[aufnahmeIndex] = link[6]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf7").addEventListener("click", function () { playSample(link[7]); aufnahme[aufnahmeIndex] = link[7]; aufnahmeIndex++; record(); });
    document.querySelector(".knopf8").addEventListener("click", function () { playSample(link[8]); aufnahme[aufnahmeIndex] = link[8]; aufnahmeIndex++; record(); });
    //Special Keys
    document.querySelector("#playbutton").addEventListener("click", function () { beatFunktion(); });
    document.querySelector("#deletebutton").addEventListener("click", function () { deleteBeat(); });
    document.querySelector("#remix").addEventListener("click", function () { remix(); });
    document.querySelector("#record").addEventListener("click", function () { recording(); recordIndex++; });
});
//# sourceMappingURL=drumpad.js.map