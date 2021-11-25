//7.X Aufruf vom Javascript erst nach vollständigem lesen des HTML DOM
window.addEventListener("load", function(){

//7.X Variabeln Deklaration
var link:string [] = ['assets/A.mp3','assets/G.mp3','assets/F.mp3','assets/C.mp3','assets/hihat.mp3','assets/kick.mp3','assets/snare.mp3','assets/laugh-1.mp3','assets/laugh-2.mp3','assets/.mp3'];
var order:string [] = ['assets/snare.mp3','assets/kick.mp3','assets/hihat.mp3','assets/snare.mp3'];
var key:number = 0;

//7.1 Weitergabe von Array Variabel an Main Funktion beim Click auf Knopf              
document.querySelector(".knopf0").addEventListener("click", function () {playSample(link[0]);});
document.querySelector(".knopf1").addEventListener("click", function () {playSample(link[1]);});
document.querySelector(".knopf2").addEventListener("click", function () {playSample(link[2]);});
document.querySelector(".knopf3").addEventListener("click", function () {playSample(link[3]);});
document.querySelector(".knopf4").addEventListener("click", function () {playSample(link[4]);});
document.querySelector(".knopf5").addEventListener("click", function () {playSample(link[5]);});
document.querySelector(".knopf6").addEventListener("click", function () {playSample(link[6]);});
document.querySelector(".knopf7").addEventListener("click", function () {playSample(link[7]);});
document.querySelector(".knopf8").addEventListener("click", function () {playSample(link[8]);});

//7.2 Weitergabe von Array Variabel an Main Funktion beim Click auf Knopf
document.querySelector(".knopf9").addEventListener("click", playBeat)

//Funktion 7.1
function playSample(tlink:string) {
    var ton:HTMLAudioElement = new Audio (tlink);
    ton.play()
}

//Funktion 7.2
function playBeat(){
setInterval(function() {
    var beat:HTMLAudioElement = new Audio(order[key]);
    beat.play()
    key++;
    if (key>order.length)
    {key = 0;}
},120)}

});