window.addEventListener("load", function(){


var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)", "#f032f4", "rgb(250,250,0)", "cyan"]

var key:number = 0;



document.querySelector("#buttonA").addEventListener("click", function () {farbe( colors[key] );});



function farbe(ausgabe) {

var bg:HTMLElement = document.querySelector("body")

bg.style.backgroundColor = (ausgabe);

key ++;

if (key > 6) {
    key = 0;
}

}



});
