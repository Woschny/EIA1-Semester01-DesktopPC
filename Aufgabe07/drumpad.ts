//Aufruf vom Javascript erst nach vollständigem lesen des HTML DOM

window.addEventListener("load", function(){

//Array Deklaration

var samp:HTMLAudioElement [] = [new Audio('assets/A.mp3'), new Audio('assets/G.mp3'), new Audio('assets/F.mp3'),
                                new Audio('assets/C.mp3'), new Audio('assets/hihat.mp3'), new Audio('assets/kick.mp3'), 
                                new Audio('assets/snare.mp3'), new Audio('assets/laugh-1.mp3'), new Audio('assets/laugh-2.mp3'), 
                                new Audio('assets/.mp3')];

//Weitergabe von Array Variabeln an Main Funktion beim Click auf Knopf
                            
document.querySelector(".knopf0").addEventListener("click", function () {playSample(samp[0],"","");});
document.querySelector(".knopf1").addEventListener("click", function () {playSample(samp[1],"","");});
document.querySelector(".knopf2").addEventListener("click", function () {playSample(samp[2],"","");});
document.querySelector(".knopf3").addEventListener("click", function () {playSample(samp[3],"","");});
document.querySelector(".knopf4").addEventListener("click", function () {playSample(samp[4],"","");});
document.querySelector(".knopf5").addEventListener("click", function () {playSample(samp[5],"","");});
document.querySelector(".knopf6").addEventListener("click", function () {playSample(samp[6],"","");});
document.querySelector(".knopf7").addEventListener("click", function () {playSample(samp[7],"","");});
document.querySelector(".knopf8").addEventListener("click", function () {playSample(samp[8],"","");});
document.querySelector(".knopf9").addEventListener("click", function () {playSample(samp[5], samp[6], samp[4]);});

//Main Funktion

function playSample(ton, snare, hihat) {

    setInterval(function() {ton.play();}, 0);
    setInterval(function() {snare.play();}, 1000);
    setInterval(function() {hihat.play();}, 2000);
}

});