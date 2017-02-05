//xmov: possible movement of the axis ai player
//opt: move option taken by the ai (0 is left, 1 is straight and 2 is right)
//opgl: objective page allies
//cplo: cockpit allies orientation
//epos: enemy position
//cpxo: cockpit axis orientation
//dist: distance between planes
//psiz: plane image size
//xoff: axis image offset
//auxp: auxiliary page
//aup2: auxiliary page 2
//err: random error by the ai
function mvll() {
   mll();
   msl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsl() {
   msl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrl() {
   mrl();
   msl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvlls() {
   mll();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsls() {
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrls() {
   mrl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvllf() {
   mll();
   msl();
   msl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvslf() {
   msl();
   msl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrlf() {
   mrl();
   msl();
   msl();
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}

function chpg() {
   ctx.clearRect(0,0,500,500);
   psiz = sizes[dist][0];
   xoff = sizes[dist][1];
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
   xplay();
}
