/* ------------------(Strings Deklaration)------------------ */


/* Absatz Variablen */

var absatz0 : string = " Die Welt Produziert ";
var absatz1 : string = " Die Emission von " ;
var absatz2 : string = "Relativ zur Gesamtemission der Welt verursacht " ;
var absatz3 : string = "Für " ;
var absatz4 : string = "2018 im Vergleich zu 2008 sind das " ;

/* Anhang Variablen */

var anhang1a : string = " ist: " ;
var anhang1b : string = "kg CO²." ;

var anhang2a : string = " damit " ;
var anhang2b : string = "%." ;

var anhang3a : string = " hat sich 2018 im Vergleich zu 2008 die Emission um " ;
var anhang3b : string = "% verändert." ;

/* Länder Text Variablen */

var aus : string = "Australien" ;
var as : string = "Asien" ;
var na : string = "Nord-Amerika" ;
var eu : string = "Europa" ;
var sa : string = "Süd-Amerika" ;
var af : string = "Afrika" ;


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


/* ------------------(Consol Equation)------------------ */


/* Consolenoutput */

console.log(
absatz0 + welt18.toFixed(0) + anhang1b
);

/* Europa Out */

console.log(
absatz1 + eu + anhang1a + eu18.toFixed(2) + anhang1b ,'\n',
absatz2 + eu + anhang2a + euzuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + eu + anhang3a + euzueu.toFixed(2) + anhang3b ,'\n',
absatz4 + euzueuco.toFixed(2) + anhang1b
);

/* Asien Out */

console.log(
absatz1 + as + anhang1a + as18.toFixed(2) + anhang1b ,'\n',
absatz2 + as + anhang2a + aszuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + as + anhang3a + aszuas.toFixed(2) + anhang3b ,'\n',
absatz4 + aszuasco.toFixed(2) + anhang1b
);

/* Afrika Out */

console.log(
absatz1 + af + anhang1a + af18.toFixed(2) + anhang1b ,'\n',
absatz2 + af + anhang2a + afzuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + af + anhang3a + afzuaf.toFixed(2) + anhang3b ,'\n',
absatz4 + afzuafco.toFixed(2) + anhang1b
);

/* Nord Amerika Out */

console.log(
absatz1 + na + anhang1a + na18.toFixed(2) + anhang1b ,'\n',
absatz2 + na + anhang2a + nazuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + na + anhang3a + nazuna.toFixed(2) + anhang3b ,'\n',
absatz4 + nazunaco.toFixed(2) + anhang1b
);

/* Süd Amerika Out */

console.log(
absatz1 + sa + anhang1a + sa18.toFixed(2) + anhang1b ,'\n',
absatz2 + sa + anhang2a + sazuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + sa + anhang3a + sazusa.toFixed(2) + anhang3b ,'\n',
absatz4 + sazusaco.toFixed(2) + anhang1b
);

/* Australien Out */

console.log(
absatz1 + aus + anhang1a + aus18.toFixed(2) + anhang1b ,'\n',
absatz2 + aus + anhang2a + auszuwelt.toFixed(2) + anhang2b ,'\n',
absatz3 + aus + anhang3a + auszuaus.toFixed(2) + anhang3b ,'\n',
absatz4 + auszuausco.toFixed(2) + anhang1b
);