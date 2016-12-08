var datum = new Date();
var colour = [["#00CED1","#50FEF1"],["#FFA500","#FFF550"],["#32CD32","82FD82"],["#FF4500","#FF9550"],["#C71585","F765D5"],["#FF7F50","#FFCFA0"],["#FFD700","#FFF750"]];
document.getElementById("loader").style.backgroundColor = colour[datum.getDay()][0];
var tag = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
var monat = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
document.getElementById("date").innerHTML = tag[datum.getDay()]+" "+datum.getDate()+". "+monat[datum.getMonth()]+" "+datum.getFullYear();
document.getElementById("square").style.backgroundColor = colour[datum.getDay()][0];
document.getElementsByClassName("rect")[0].style.backgroundColor = colour[datum.getDay()][0];
document.getElementsByClassName("rect")[1].style.backgroundColor = colour[datum.getDay()][0];
var rph = document.getElementsByClassName("rectph");
for (i = 0; i < rph.length; i++) {
   rph[i].style.backgroundColor = colour[datum.getDay()][0];
}
document.getElementById("bio").style.backgroundColor = colour[datum.getDay()][1];
var colr = "a:hover {color:"+colour[datum.getDay()][0]+"}";
document.styleSheets[0].insertRule(colr,0);
var hei = document.getElementsByClassName("content")[0].clientHeight;
var divdr = document.getElementsByClassName("divider");
for (i = 0; i < divdr.length; i++) {
   divdr[i].style.height = hei-105+"px";
}
document.getElementById("loader").style.opacity = 0;
function hide() {
   document.getElementById("loader").style.zIndex = -1;
}
window.setTimeout(hide, 7000);
