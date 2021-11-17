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
    /* Beim Klick auf die Klasse eines Landes wird die Funktion mit den dazugehörigen Variablen ausgeführt */
    document.querySelector(".europe").addEventListener("click", function () { lander(eu, eu18, euzuwelt, euzueu, euzueuco); });
    document.querySelector(".northamerica").addEventListener("click", function () { lander(na, na18, nazuwelt, nazuna, nazunaco); });
    document.querySelector(".southamerica").addEventListener("click", function () { lander(sa, sa18, sazuwelt, sazusa, sazusaco); });
    document.querySelector(".africa").addEventListener("click", function () { lander(af, af18, afzuwelt, afzuaf, afzuafco); });
    document.querySelector(".asia").addEventListener("click", function () { lander(as, as18, aszuwelt, aszuas, aszuasco); });
    document.querySelector(".australia").addEventListener("click", function () { lander(aus, aus18, auszuwelt, auszuaus, auszuausco); });
    /* Funktion Länder */
    function lander(land, land18, landzuwelt, landzuland, landzulandco) {
        document.querySelector(".emission").innerHTML = land18.toFixed(2);
        document.querySelector(".relative").innerHTML = landzuwelt.toFixed(2) + "%";
        document.querySelector(".growth").innerHTML = landzuland.toFixed(2) + "%";
        document.querySelector(".growthrate").innerHTML = landzulandco.toFixed(2);
        document.querySelector("#titleRegion").innerHTML = land;
        document.querySelector("#subtitleRegion").innerHTML = land;
        var Grafik = document.querySelector(".chart");
        Grafik.style.height = landzuwelt + "px";
    }
    /* Hier endet das oben angesprochene tolle Ding /(°-°)\ */
});
//# sourceMappingURL=script.js.map