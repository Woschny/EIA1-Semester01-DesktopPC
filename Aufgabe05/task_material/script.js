/* Text Variablen */
var absatz0 = " Die Welt Produziert ";
var absatz1 = " Die Emission von ";
var absatz2 = "Relativ zur Gesamtemission der Welt verursacht ";
var absatz3 = "Für ";
var absatz4 = "2018 im Vergleich zu 2008 sind das ";
var anhang1a = " ist: ";
var anhang1b = "kg CO².";
var anhang2a = " damit ";
var anhang2b = "%.";
var anhang3a = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var anhang3b = "% verändert.";
/* Länder Text Variablen */
var aus = "Australien";
var as = "Asien";
var na = "Nord-Amerika";
var eu = "Europa";
var sa = "Süd-Amerika";
var af = "Afrika";
/* ----------------------------------------------------- */
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
/* ----------------------------------------------------- */
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
/* ----------------------------------------------------- */
/* Consolenoutput */
console.log(absatz0 + welt18.toFixed(0) + anhang1b);
console.log(absatz1 + eu + anhang1a + eu18.toFixed(2) + anhang1b, '\n', absatz2 + eu + anhang2a + euzuwelt.toFixed(2) + anhang2b, '\n', absatz3 + eu + anhang3a + euzueu.toFixed(2) + anhang3b, '\n', absatz4 + euzueuco.toFixed(2) + anhang1b);
console.log(absatz1 + as + anhang1a + as18.toFixed(2) + anhang1b, '\n', absatz2 + as + anhang2a + aszuwelt.toFixed(2) + anhang2b, '\n', absatz3 + as + anhang3a + aszuas.toFixed(2) + anhang3b, '\n', absatz4 + aszuasco.toFixed(2) + anhang1b);
console.log(absatz1 + af + anhang1a + af18.toFixed(2) + anhang1b, '\n', absatz2 + af + anhang2a + afzuwelt.toFixed(2) + anhang2b, '\n', absatz3 + af + anhang3a + afzuaf.toFixed(2) + anhang3b, '\n', absatz4 + afzuafco.toFixed(2) + anhang1b);
console.log(absatz1 + na + anhang1a + na18.toFixed(2) + anhang1b, '\n', absatz2 + na + anhang2a + nazuwelt.toFixed(2) + anhang2b, '\n', absatz3 + na + anhang3a + nazuna.toFixed(2) + anhang3b, '\n', absatz4 + nazunaco.toFixed(2) + anhang1b);
console.log(absatz1 + sa + anhang1a + sa18.toFixed(2) + anhang1b, '\n', absatz2 + sa + anhang2a + sazuwelt.toFixed(2) + anhang2b, '\n', absatz3 + sa + anhang3a + sazusa.toFixed(2) + anhang3b, '\n', absatz4 + sazusaco.toFixed(2) + anhang1b);
console.log(absatz1 + aus + anhang1a + aus18.toFixed(2) + anhang1b, '\n', absatz2 + aus + anhang2a + auszuwelt.toFixed(2) + anhang2b, '\n', absatz3 + aus + anhang3a + auszuaus.toFixed(2) + anhang3b, '\n', absatz4 + auszuausco.toFixed(2) + anhang1b);
//# sourceMappingURL=script.js.map