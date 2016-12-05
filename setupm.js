var datum = new Date();
var colour = ["#00CED1","#FFA500","#32CD32","#FF4500","#C71585","#FF7F50","#FFD700"];
document.getElementById("loader").style.backgroundColor = colour[datum.getDay()];
var tag = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
var monat = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
document.getElementById("date").innerHTML = tag[datum.getDay()]+" "+datum.getDate()+". "+monat[datum.getMonth()]+" "+datum.getFullYear();
document.getElementById("square").style.backgroundColor = colour[datum.getDay()];
document.getElementsByClassName("rect")[0].style.backgroundColor = colour[datum.getDay()];
document.getElementsByClassName("rect")[1].style.backgroundColor = colour[datum.getDay()];
var rph = document.getElementsByClassName("rectph");
for (i = 0; i < rph.length; i++) {
   rph[i].style.backgroundColor = colour[datum.getDay()];
}
var colr = "a:active {color:"+colour[datum.getDay()]+"}";
document.styleSheets[0].insertRule(colr,0);
document.getElementById("loader").style.opacity = 0;
function hide() {
   document.getElementById("loader").style.zIndex = -1;
}
window.setTimeout(hide, 7000);

function menuOn() {
   document.getElementById("header").style.left = 0+"px";
}

function menuOff() {
   document.getElementById("header").style.left = 100+"%";
}