
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
/* Consolenoutput */

console.log(
" Die Emission von Europa ist:",eu18.toFixed(2),"kg CO2.",'\n',
"Relativ zur Gesamtemission der Welt verursacht Europa damit",euzuwelt.toFixed(2),"%.",'\n',
"Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um",euzueu.toFixed(2),"% verändert.",'\n',
"2018 im Vergleich zu 2008 sind das",euzueuco.toFixed(2),"kg CO2."
);

console.log(
" Die Emission von Asien ist:",as18.toFixed(2),"kg CO2.",'\n',
"Relativ zur Gesamtemission der Welt verursacht Asien damit",aszuwelt.toFixed(2),"%.",'\n',
"Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um",aszuas.toFixed(2),"% verändert.",'\n',
"2018 im Vergleich zu 2008 sind das",aszuasco.toFixed(2),"kg CO2."
);

console.log(
" Die Emission von Afrika ist:",af18.toFixed(2),"kg CO2.",'\n',
"Relativ zur Gesamtemission der Welt verursacht Afrika damit",afzuwelt.toFixed(2),"%.",'\n',
"Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um",afzuaf.toFixed(2),"% verändert.",'\n',
"2018 im Vergleich zu 2008 sind das",afzuafco.toFixed(2),"kg CO2."
);

console.log(
" Die Emission von Nord Amerika ist:",na18.toFixed(2),"kg CO2.",'\n',
"Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit",nazuwelt.toFixed(2),"%.",'\n',
"Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um",nazuna.toFixed(2),"% verändert.",'\n',
"2018 im Vergleich zu 2008 sind das",nazunaco.toFixed(2),"kg CO2."
);

console.log(
" Die Emission von Süd Amerika ist:",sa18.toFixed(2),"kg CO2.",'\n',
"Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit",sazuwelt.toFixed(2),"%.",'\n',
"Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um",sazusa.toFixed(2),"% verändert.",'\n',
"2018 im Vergleich zu 2008 sind das",sazusaco.toFixed(2),"kg CO2."
);

console.log(
" Die Emission von Australien ist:",aus18.toFixed(2),"kg CO2.",'\n',
"Relativ zur Gesamtemission der Welt verursacht Australien damit",auszuwelt.toFixed(2),"%.",'\n',
"Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um",auszuaus.toFixed(2),"% verändert.",'\n',
"2018 im Vergleich zu 2008 sind das",auszuausco.toFixed(2),"kg CO2."
);

console.log(
" Die Welt Produziert",welt18.toFixed(2)
);