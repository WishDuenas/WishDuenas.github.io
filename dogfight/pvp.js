//for variables' meanings check single.js file
function mvll() {
   auxp = allies[pag-1][0];
   epos = axis[pag-1][4];
   endt();
}
function mvsl() {
   auxp = allies[pag-1][1];
   epos = axis[pag-1][4];
   endt();
}
function mvrl() {
   auxp = allies[pag-1][2];
   epos = axis[pag-1][4];
   endt();
}
function mvlx() {
   pag = axis[auxp-1][0];
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsx() {
   pag = axis[auxp-1][1];
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrx() {
   pag = axis[auxp-1][2];
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function endt() {
   ctx.clearRect(0,0,500,500);
   document.getElementById("area").style.borderColor = "crimson";
   for (var i = 0; i < mvbtns.length; i++) {
      mvbtns[i].style.backgroundColor = "crimson";
   }
   document.getElementById("controlsl").style.display = "none";
   document.getElementById("controlsx").style.display = "block";
   component(outsides[cplo],epos+xoff,0,psiz);
   component(cockpits[cpxo],0,0,500);
}
function chpg() {
   ctx.clearRect(0,0,500,500);
   psiz = sizes[dist][0];
   xoff = sizes[dist][1];
   document.getElementById("area").style.borderColor = "teal";
   for (var i = 0; i < mvbtns.length; i++) {
      mvbtns[i].style.backgroundColor = "teal";
   }
   document.getElementById("controlsx").style.display = "none";
   document.getElementById("controlsl").style.display = "block";
   component(outsides[cpxo],epos+xoff,0,psiz);
   component(cockpits[cplo],0,0,500);
   if (cplo == 0 && epos == 0) {
      xlife = xlife - 1;
      if (xlife == 0) {
         document.getElementById("win").style.display = "block";
      }
   }
   if (cpxo == 0 && axis[pag-1][4] == 0) {
      llife = llife - 1;
      if (llife == 0) {
         document.getElementById("fail").style.display = "block";
      }
   }
   document.getElementById("lhealth").innerHTML = llife;
   document.getElementById("xhealth").innerHTML = xlife;
}