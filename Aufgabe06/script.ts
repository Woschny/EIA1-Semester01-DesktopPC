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

document.querySelector(".europe").addEventListener("click", function () {lander(eu, eu18, euzuwelt, euzueu, euzueuco);});
document.querySelector(".northamerica").addEventListener("click", function () {lander(na, na18, nazuwelt, nazuna, nazunaco);});
document.querySelector(".southamerica").addEventListener("click", function () {lander(sa, sa18, sazuwelt, sazusa, sazusaco);});
document.querySelector(".africa").addEventListener("click", function () {lander(af, af18, afzuwelt, afzuaf, afzuafco);});
document.querySelector(".asia").addEventListener("click", function () {lander(as, as18, aszuwelt, aszuas, aszuasco);});
document.querySelector(".australia").addEventListener("click", function () {lander(aus, aus18, auszuwelt, auszuaus, auszuausco);});

/* Funktion Europa */

function lander(land, land18, landzuwelt, landzuland, landzulandco) {
document.querySelector(".emission").innerHTML = land18.toFixed(2);
document.querySelector(".relative").innerHTML = landzuwelt.toFixed(2) + "%";
document.querySelector(".growth").innerHTML = landzuland.toFixed(2) + "%";
document.querySelector(".growthrate").innerHTML = landzulandco.toFixed(2);
document.querySelector("#titleRegion").innerHTML = land;
document.querySelector("#subtitleRegion").innerHTML = land;

var Grafik:HTMLElement = document.querySelector(".chart")
Grafik.style.height = landzuwelt + "px";

}

/* Hier endet das oben angesprochene tolle Ding /(°-°)\ */

});
