/* Das tolle Ding, das dafür sorgt, dass alles geladen ist und meine Variablen global erkannt werden \(^o^)/ */

window.addEventListener("load", function(){

/* ------------------(Strings Deklaration)------------------ */


/* Länder Text Variablen */

var aus : string = "Australia" ;
var as : string = "Asia" ;
var na : string = "North-Amerika" ;
var eu : string = "Europe" ;
var sa : string = "South-Amerika" ;
var af : string = "Africa" ;


/* ------------------(Numbers Deklaration)------------------ */


/* Australien Variablen */

var aus08 : number = 1993;
var aus18 : number = 2100.5;

/* Asien Variablen */

var as08 : number = 12954.7;
var as18 : number = 16274.1;

/* Nord Amerika Variablen */

var na08 : number = 6600.4;
var na18 : number = 6035.6;

/* Europa Variablen */

var eu08 : number = 4965.7;
var eu18 : number = 4209.3;

/* Süd Amerika Variablen */

var sa08 : number = 1132.6;
var sa18 : number = 1261.5;

/* Afrika Variablen */

var af08 : number = 1028;
var af18 : number = 1235.5;


/* ------------------(Numbers Equation)------------------ */


/* Welt Gesamt Rechnung */

var welt18 : number = aus18+as18+na18+eu18+sa18+af18;

/* Europa Rechnung */

var euzuwelt : number = eu18/welt18*100;
var euzueu : number = (eu18/eu08-1)*100;
var euzueuco: number = eu18-eu08;

/* Asien Rechnung */

var aszuwelt : number = as18/welt18*100;
var aszuas : number = (as18/as08-1)*100;
var aszuasco: number = as18-as08;

/* Afrika Rechnung */

var afzuwelt : number = af18/welt18*100;
var afzuaf : number = (af18/af08-1)*100;
var afzuafco: number = af18-af08;

/* Nord Amerika Rechnung */

var nazuwelt : number = na18/welt18*100;
var nazuna : number = (na18/na08-1)*100;
var nazunaco: number = na18-na08;

/* Süd Amerika Rechnung */

var sazuwelt : number = sa18/welt18*100;
var sazusa : number = (sa18/sa08-1)*100;
var sazusaco: number = sa18-sa08;

/* Australien Rechnung */

var auszuwelt : number = aus18/welt18*100;
var auszuaus : number = (aus18/aus08-1)*100;
var auszuausco: number = aus18-aus08;

/* Beim Klick auf die Klasse eines Landes wird die dazugehörige Funktion ausgeführt */

document.querySelector(".europe").addEventListener("click", europa);
document.querySelector(".northamerica").addEventListener("click", nordamerika);
document.querySelector(".southamerica").addEventListener("click", suedamerika);
document.querySelector(".africa").addEventListener("click", afrika);
document.querySelector(".asia").addEventListener("click", asien);
document.querySelector(".australia").addEventListener("click", australien);

/* Funktion Europa */

function europa() {
document.querySelector(".emission").innerHTML = eu18.toFixed(2);
document.querySelector(".relative").innerHTML = euzuwelt.toFixed(2);
document.querySelector(".growth").innerHTML = euzueu.toFixed(2);
document.querySelector(".growthrate").innerHTML = euzueuco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = eu;
document.querySelector("#subtitleRegion").innerHTML = eu;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = euzuwelt + "px";

}

/* Funktion Nord Amerika */

function nordamerika() {
document.querySelector(".emission").innerHTML = na18.toFixed(2);
document.querySelector(".relative").innerHTML = nazuwelt.toFixed(2);
document.querySelector(".growth").innerHTML = nazuna.toFixed(2);
document.querySelector(".growthrate").innerHTML = nazunaco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = na;
document.querySelector("#subtitleRegion").innerHTML = na;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = nazuwelt + "px";
}

/* Funktion Süd Amerika */

function suedamerika() {
document.querySelector(".emission").innerHTML = sa18.toFixed(2);
document.querySelector(".relative").innerHTML = sazuwelt.toFixed(2);
document.querySelector(".growth").innerHTML = sazusa.toFixed(2);
document.querySelector(".growthrate").innerHTML = sazusaco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = sa;
document.querySelector("#subtitleRegion").innerHTML = sa;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = sazuwelt + "px";
}

/* Funktion Afrika */

function afrika() {
document.querySelector(".emission").innerHTML = af18.toFixed(2);
document.querySelector(".relative").innerHTML = afzuwelt.toFixed(2);
document.querySelector(".growth").innerHTML = afzuaf.toFixed(2);
document.querySelector(".growthrate").innerHTML = afzuafco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = af;
document.querySelector("#subtitleRegion").innerHTML = af;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = afzuwelt + "px";


}

/* Funktion Asien */

function asien() {
document.querySelector(".emission").innerHTML = as18.toFixed(2);
document.querySelector(".relative").innerHTML = aszuwelt.toFixed(2);
document.querySelector(".growth").innerHTML = aszuas.toFixed(2);
document.querySelector(".growthrate").innerHTML = aszuasco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = as;
document.querySelector("#subtitleRegion").innerHTML = as;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = aszuwelt + "px";
}

/* Funktion Australien */

function australien() {
document.querySelector(".emission").innerHTML = aus18.toFixed(2);
document.querySelector(".relative").innerHTML = auszuwelt.toFixed(2);
document.querySelector(".growth").innerHTML = auszuaus.toFixed(2);
document.querySelector(".growthrate").innerHTML = auszuausco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = aus;
document.querySelector("#subtitleRegion").innerHTML = aus;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = auszuwelt + "px";
}


/* Hier endet das oben angesprochene tolle Ding /(°-°)\ */

});
