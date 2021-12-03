window.addEventListener("load", function():void {
var names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
var gesamtzahl: HTMLElement = document.querySelector("main p span");
var liste: HTMLElement = document.querySelector("#liste");
var key: number = 0;
var key2: number = 19;

function Aufsteigend(): void {
   liste.innerHTML = "";
   while (key < names.length) {
    liste.innerHTML += names[key] + "<br>";
    key++;
   }
   gesamtzahl.innerHTML = names.length + "";
}

function Absteigend(): void {
    liste.innerHTML = "";
    while (key2 >= 0) {
     liste.innerHTML += names[key2] + "<br>";
     key2--;
    }
    gesamtzahl.innerHTML = names.length + "";
 }

function Absteigendpaul(): void {
    liste.innerHTML = "";
    for (var key: number; key > names.length; key++) {
     if (names[key] != "Lea" && names[key] != "Paul")   {
     liste.innerHTML += names[key] + "<br>";
    }
    }
    gesamtzahl.innerHTML = names.length + "";
}

document.querySelector("#buttonAufsteigend").addEventListener("click", function(): void { Aufsteigend(); });

document.querySelector("#buttonAbsteigend").addEventListener("click", function(): void { Absteigend(); });

document.querySelector("#buttonAbsteigendpaul").addEventListener("click", function(): void { Absteigendpaul(); });

});