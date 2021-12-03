window.addEventListener("load", function () {
    var names = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
    var gesamtzahl = document.querySelector("main p span");
    var liste = document.querySelector("#liste");
    var key = 0;
    var key2 = 19;
    function Aufsteigend() {
        liste.innerHTML = "";
        while (key < names.length) {
            liste.innerHTML += names[key] + "<br>";
            key++;
        }
        gesamtzahl.innerHTML = names.length + "";
    }
    function Absteigend() {
        liste.innerHTML = "";
        while (key2 >= 0) {
            liste.innerHTML += names[key2] + "<br>";
            key2--;
        }
        gesamtzahl.innerHTML = names.length + "";
    }
    function Absteigendpaul() {
        liste.innerHTML = "";
        for (var key; key > names.length; key++) {
            if (names[key] != "Lea" && names[key] != "Paul") {
                liste.innerHTML += names[key] + "<br>";
            }
        }
        gesamtzahl.innerHTML = names.length + "";
    }
    document.querySelector("#buttonAufsteigend").addEventListener("click", function () { Aufsteigend(); });
    document.querySelector("#buttonAbsteigend").addEventListener("click", function () { Absteigend(); });
    document.querySelector("#buttonAbsteigendpaul").addEventListener("click", function () { Absteigendpaul(); });
});
//# sourceMappingURL=script.js.map