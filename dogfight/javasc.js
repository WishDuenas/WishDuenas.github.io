ctx = document.getElementById("dogfightUI").getContext("2d");

function startGame() {
   document.getElementById("start").style.display = "none";
   document.getElementById("controls").style.display = "block";
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
