ctx = document.getElementById("dogfightUI").getContext("2d");

function startGame() {
   document.getElementById("start").style.display = "none";
   document.getElementById("player").style.display = "block";
}

function component(image, x, y, siz) {
   this.x = x;
   this.y = y;
   var img = document.getElementById(image);
   ctx.drawImage(img, this.x, this.y, siz, siz);
}

function singleGame() {
   document.getElementById("player").style.display = "none";
   document.getElementById("area").style.display = "block";
   document.getElementById("info").style.display = "block";
   document.getElementById("controlsl").style.display = "block";
   pag = 40;
   component("os_ne",123,0,333);
   component("cp_ne",0,0,500);
   llife = 6;
   xlife = 6;
   document.getElementById("lhealth").innerHTML = llife;
   document.getElementById("xhealth").innerHTML = xlife;
   var code = document.createElement("script");
   code.setAttribute("src","single.js");
   document.body.appendChild(code);
   xplay();
}

function pvpGame() {
   document.getElementById("player").style.display = "none";
   document.getElementById("area").style.display = "block";
   document.getElementById("info").style.display = "block";
   document.getElementById("controlsl").style.display = "block";
   pag = 40;
   cplo = allies[pag-1][3];
   epos = allies[pag-1][4];
   cpxo = axis[pag-1][3];
   dist = allies[pag-1][5];
   psiz = sizes[dist][0];
   xoff = sizes[dist][1];
   component(outsides[cpxo],epos+xoff,0,psiz);
   component(cockpits[cplo],0,0,500);
   llife = 6;
   xlife = 6;
   document.getElementById("lhealth").innerHTML = llife;
   document.getElementById("xhealth").innerHTML = xlife;
   var code = document.createElement("script");
   code.setAttribute("src","pvp.js");
   document.body.appendChild(code);
   mvbtns = document.getElementsByClassName("move");
}

var xmov = {
   mvlx: function() {
      mlx();
      msx();
   },
   mvsx: function() {
      msx();
   },
   mvrx: function() {
      mrx();
      msx();
   }
}

function xplay() {
   var err = Math.floor(Math.random()*5);
   if (err == 4) {
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

function mll() {
   pag = allies[pag-1][0];
}
function msl() {
   pag = allies[pag-1][1];
}
function mrl() {
   pag = allies[pag-1][2];
}
function mlx() {
   pag = axis[pag-1][0];
}
function msx() {
   pag = axis[pag-1][1];
}
function mrx() {
   pag = axis[pag-1][2];
}
