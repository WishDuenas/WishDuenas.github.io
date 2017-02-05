//for variables' meanings check single.js file
function mvll() {
   auxp = pag;
   vll();
   vsl();
   epos = axis[pag-1][4];
   endt();
}
function mvsl() {
   auxp = pag;
   vsl();
   epos = axis[pag-1][4];
   endt();
}
function mvrl() {
   auxp = pag;
   vrl();
   vsl();
   epos = axis[pag-1][4];
   endt();
}
function mvlls() {
   auxp = pag;
   vll();
   epos = axis[pag-1][4];
   endt();
}
function mvsls() {
   auxp = pag;
   epos = axis[pag-1][4];
   endt();
}
function mvrls() {
   auxp = pag;
   vrl();
   epos = axis[pag-1][4];
   endt();
}
function mvllf() {
   auxp = pag;
   vll();
   vsl();
   vsl();
   epos = axis[pag-1][4];
   endt();
}
function mvslf() {
   auxp = pag;
   vsl();
   vsl();
   epos = axis[pag-1][4];
   endt();
}
function mvrlf() {
   auxp = pag;
   vrl();
   vsl();
   vsl();
   epos = axis[pag-1][4];
   endt();
}
function mvlx() {
   vlx();
   vsx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsx() {
   vsx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrx() {
   vrx();
   vsx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvlxs() {
   vlx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsxs() {
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrxs() {
   vrx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvlxf() {
   vrx();
   vsx();
   vsx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsxf() {
   vsx();
   vsx();
   pag = auxp;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrxf() {
   vrx();
   vsx();
   vsx();
   pag = auxp;
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
