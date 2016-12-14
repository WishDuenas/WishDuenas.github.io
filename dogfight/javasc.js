ctx = document.getElementById("dogfightUI").getContext("2d");

function startGame() {
   document.getElementById("start").style.display = "none";
   document.getElementById("controls").style.display = "block";
   pag = 40;
   component("os_ne",123,0,333);
   component("cp_ne",0,0,500);
   llife = 12;
   xlife = 12;
   xplay();
}

function component(image, x, y, siz) {
   this.x = x;
   this.y = y;
   var img = document.getElementById(image);
   ctx.drawImage(img, this.x, this.y, siz, siz);
}

//xmov: possible movement of the axis ai player
//opt: move option taken by the ai (0 is left, 1 is straight and 2 is right)
//opgl: objective page allies
//cplo: cockpit allies orientation
//epos: enemy position
//cpxo: cockpit axis orientation
//dist: distance between planes
//psiz: plane image size
//xoff: axis image offset
var xmov = {
   mvlx: function() {
      pag = axis[pag-1][0];
   },
   mvsx: function() {
      pag = axis[pag-1][1];
   },
   mvrx: function() {
      pag = axis[pag-1][2];
   }
}
//auxp: auxiliary page
//aup2: auxiliary page 2
//err: random error by the ai
function xplay() {
   var err = Math.floor(Math.random()*10);
   if (err == 9) {
      opt = Math.floor(Math.random()*3);
   } else {
      var auxp = axis[pag-1][0];
      var aup2 = axis[pag-1][1];
      if (axis[auxp-1][3] < axis[aup2-1][3]) {
         aup2 = axis[pag-1][2];
         if (axis[auxp-1][3] < axis[aup2-1][3]) {
            opt = 0;
         } else {
            opt = 2;
         }
      } else {
         auxp = axis[pag-1][2];
         if (axis[aup2-1][3] < axis[auxp-1][3]) {
            opt = 1;
         } else {
            opt = 2;
         }
      }
   }
   switch (opt) {
      case 0:
         xmov.mvlx();
         break;
      case 1:
         xmov.mvsx();
         break;
      case 2:
         xmov.mvrx();
         break;
   }
}
function mvll() {
   pag = allies[pag-1][0];
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvsl() {
   pag = allies[pag-1][1];
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   chpg();
}
function mvrl() {
   pag = allies[pag-1][2];
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
   if (cplo == 2 && epos == 0) {
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
   xplay();
}