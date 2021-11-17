/* Das tolle Ding, das dafür sorgt, dass alles geladen ist und meine Variablen global erkannt werden \(^o^)/ */
window.addEventListener("load", function () {
    /* ------------------(Strings Deklaration)------------------ */
    /* Länder Text Variablen */
    var aus = "Australia";
    var as = "Asia";
    var na = "North-Amerika";
    var eu = "Europe";
    var sa = "South-Amerika";
    var af = "Africa";
    /* ------------------(Numbers Deklaration)------------------ */
    /* Australien Variablen */
    var aus08 = 1993;
    var aus18 = 2100.5;
    /* Asien Variablen */
    var as08 = 12954.7;
    var as18 = 16274.1;
    /* Nord Amerika Variablen */
    var na08 = 6600.4;
    var na18 = 6035.6;
    /* Europa Variablen */
    var eu08 = 4965.7;
    var eu18 = 4209.3;
    /* Süd Amerika Variablen */
    var sa08 = 1132.6;
    var sa18 = 1261.5;
    /* Afrika Variablen */
    var af08 = 1028;
    var af18 = 1235.5;
    /* ------------------(Numbers Equation)------------------ */
    /* Welt Gesamt Rechnung */
    var welt18 = aus18 + as18 + na18 + eu18 + sa18 + af18;
    /* Europa Rechnung */
    var euzuwelt = eu18 / welt18 * 100;
    var euzueu = (eu18 / eu08 - 1) * 100;
    var euzueuco = eu18 - eu08;
    /* Asien Rechnung */
    var aszuwelt = as18 / welt18 * 100;
    var aszuas = (as18 / as08 - 1) * 100;
    var aszuasco = as18 - as08;
    /* Afrika Rechnung */
    var afzuwelt = af18 / welt18 * 100;
    var afzuaf = (af18 / af08 - 1) * 100;
    var afzuafco = af18 - af08;
    /* Nord Amerika Rechnung */
    var nazuwelt = na18 / welt18 * 100;
    var nazuna = (na18 / na08 - 1) * 100;
    var nazunaco = na18 - na08;
    /* Süd Amerika Rechnung */
    var sazuwelt = sa18 / welt18 * 100;
    var sazusa = (sa18 / sa08 - 1) * 100;
    var sazusaco = sa18 - sa08;
    /* Australien Rechnung */
    var auszuwelt = aus18 / welt18 * 100;
    var auszuaus = (aus18 / aus08 - 1) * 100;
    var auszuausco = aus18 - aus08;
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
        var Grafik = document.querySelector(".chart");
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
        var Grafik = document.querySelector(".chart");
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
        var Grafik = document.querySelector(".chart");
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
        var Grafik = document.querySelector(".chart");
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
        var Grafik = document.querySelector(".chart");
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
        var Grafik = document.querySelector(".chart");
        Grafik.style.height = auszuwelt + "px";
    }
    /* Hier endet das oben angesprochene tolle Ding /(°-°)\ */
});
//# sourceMappingURL=script.js.map