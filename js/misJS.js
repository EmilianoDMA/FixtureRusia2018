function mOver(obj) {
    if (obj.id != "seleccionado") {
		obj.style.backgroundColor = "rgba(47, 85, 224, 0.9)";
    }
}


function mOverBackground(obj) {
	if (obj.id != "seleccionado") {
		estilo = $(obj).attr('style');
		$(obj).attr('style', estilo + "background-blend-mode: unset; ");
	}	
}

function mOut(obj) {
	if (obj.id != "seleccionado") {
        obj.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    } 
}

function mOutBackground(obj) {
	if (obj.id != "seleccionado") {
		estilo = $(obj).attr('style');
		$(obj).attr('style', estilo + "background-blend-mode: color-burn; ");
	}
}

var div;
function selectOct(obj) {
	div = obj;
	obj.id = "seleccionado";
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	var escudo = "../static/img/escudos/" + $(obj).attr('abbr') +".jpg";
	$('[data-cuar='+numero+']').html($(obj).html());
	$('[data-cuar='+numero+']').attr("abbr", $(obj).attr('abbr'));
    $('[data-cuar='+numero+']').attr("style", "background-image: url(\"" + escudo + "\"); border: hidden; background-repeat: no-repeat; background-position: center center; background-size: 100%;");

}

function selectCuar(obj) {
	div = obj;
	obj.id = "seleccionado";
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	var jugador = "../static/img/jugadores/" + $(obj).attr('abbr') +".jpg";
	$('[data-semi='+numero+']').html($(obj).html());
	$('[data-semi='+numero+']').attr("abbr", $(obj).attr('abbr'));
	$('[data-semi='+numero+']').attr("style", "background-image: url(\"" + jugador + "\"); border: hidden; background-repeat: no-repeat; background-position: center center; background-size: 100%;");

}


function selectSemiI(obj) {
	div = obj;
	if (obj.id == 'semiI1'){
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiI2").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiI2").html());
	}	
	else {
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiI1").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiI1").html());
	}	
}


function selectSemiD(obj) {
	div = obj;
	if (obj.id == 'semiD1'){
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiD2").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiD2").html());
	}	
	else {
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiD1").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiD1").html());
	}	
}

function selectFinal(obj) {
	campeon = obj;
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	$('[data-campeon='+numero+']').html($(obj).html());
	fireworks(obj);
}
/*
var ganadores = 1;
function myFunction(obj) {
	
	if (ganadores <= 2){
		obj.style.backgroundColor = "#f42242";
    	obj.id = "seleccionado";
    	obj.innerHTML =  ganadores + obj.innerHTML;
    	ganadores += ganadores;
	}
}
 */

 /**************************************        FIREWORKS       *******************************************/

 var SCREEN_WIDTH = window.innerWidth,
 SCREEN_HEIGHT = window.innerHeight,
 mousePos = {
	 x: 400,
	 y: 300
 },

 // create canvas
 canvas = document.createElement('canvas'),
 context = canvas.getContext('2d'),
 particles = [],
 rockets = [],
 MAX_PARTICLES = 400,
 colorCode = 0;

// init
function fireworks(campeon) {
 document.body.appendChild(canvas);
 canvas.width = SCREEN_WIDTH;
 canvas.height = SCREEN_HEIGHT;
 canvas.id = "myCanvas"
 setInterval(launch, 800);
 setInterval(loop, 1000 / 50);
 var audio = new Audio('../static/music/QUEEN We Are The Champions _HQ_.mp3');
 audio.play();
 funcion_canvas(campeon);
 pageScroll();
};

var campeon;
function funcion_canvas(campeon){
	campeon = campeon;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.font="60px Arial";
	ctx.fillStyle = 'white';
	ctx.textAlign = "center";  
	var nombre = campeon.innerText;
	ctx.fillText(nombre.toUpperCase()+ " CAMPEON DEL MUNDO!!", 600, 200);
}

function pageScroll() {
    window.scrollBy(0,10);
	scrolldelay = setTimeout(pageScroll,10);
}

// update mouse position
$(document).mousemove(function(e) {
 e.preventDefault();
 mousePos = {
	 x: e.clientX,
	 y: e.clientY
 };
});

// launch more rockets!!!
$(document).mousedown(function(e) {
 for (var i = 0; i < 5; i++) {
	 launchFrom(Math.random() * SCREEN_WIDTH * 2 / 3 + SCREEN_WIDTH / 6);
 }
});

function launch() {
 launchFrom(mousePos.x);
}

function launchFrom(x) {
 if (rockets.length < 10) {
	 var rocket = new Rocket(x);
	 rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
	 rocket.vel.y = Math.random() * -3 - 4;
	 rocket.vel.x = Math.random() * 6 - 3;
	 rocket.size = 8;
	 rocket.shrink = 0.999;
	 rocket.gravity = 0.01;
	 rockets.push(rocket);
 }
}

function loop() {
 // update screen size
 if (SCREEN_WIDTH != window.innerWidth) {
	 canvas.width = SCREEN_WIDTH = window.innerWidth;
 }
 if (SCREEN_HEIGHT != window.innerHeight) {
	 canvas.height = SCREEN_HEIGHT = window.innerHeight;
 }

 // clear canvas
 context.fillStyle = "rgba(0, 0, 0, 0.05)";
 context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

 var existingRockets = [];

 for (var i = 0; i < rockets.length; i++) {
	 // update and render
	 rockets[i].update();
	 rockets[i].render(context);

	 // calculate distance with Pythagoras
	 var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));

	 // random chance of 1% if rockets is above the middle
	 var randomChance = rockets[i].pos.y < (SCREEN_HEIGHT * 2 / 3) ? (Math.random() * 100 <= 1) : false;

/* Explosion rules
		  - 80% of screen
		 - going down
		 - close to the mouse
		 - 1% chance of random explosion
	 */
	 if (rockets[i].pos.y < SCREEN_HEIGHT / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
		 rockets[i].explode();
	 } else {
		 existingRockets.push(rockets[i]);
	 }
	 funcion_canvas(campeon);
 }

 rockets = existingRockets;

 var existingParticles = [];

 for (var i = 0; i < particles.length; i++) {
	 particles[i].update();

	 // render and save particles that can be rendered
	 if (particles[i].exists()) {
		 particles[i].render(context);
		 existingParticles.push(particles[i]);
	 }
 }

 // update array with existing particles - old particles should be garbage collected
 particles = existingParticles;

 while (particles.length > MAX_PARTICLES) {
	 particles.shift();
 }
}

function Particle(pos) {
 this.pos = {
	 x: pos ? pos.x : 0,
	 y: pos ? pos.y : 0
 };
 this.vel = {
	 x: 0,
	 y: 0
 };
 this.shrink = .97;
 this.size = 2;

 this.resistance = 1;
 this.gravity = 0;

 this.flick = false;

 this.alpha = 1;
 this.fade = 0;
 this.color = 0;
}

Particle.prototype.update = function() {
 // apply resistance
 this.vel.x *= this.resistance;
 this.vel.y *= this.resistance;

 // gravity down
 this.vel.y += this.gravity;

 // update position based on speed
 this.pos.x += this.vel.x;
 this.pos.y += this.vel.y;

 // shrink
 this.size *= this.shrink;

 // fade out
 this.alpha -= this.fade;
};

Particle.prototype.render = function(c) {
 if (!this.exists()) {
	 return;
 }

 c.save();

 c.globalCompositeOperation = 'lighter';

 var x = this.pos.x,
	 y = this.pos.y,
	 r = this.size / 2;

 var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
 gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
 gradient.addColorStop(0.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")");
 gradient.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)");

 c.fillStyle = gradient;

 c.beginPath();
 c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
 c.closePath();
 c.fill();

 c.restore();
};

Particle.prototype.exists = function() {
 return this.alpha >= 0.1 && this.size >= 1;
};

function Rocket(x) {
 Particle.apply(this, [{
	 x: x,
	 y: SCREEN_HEIGHT}]);

 this.explosionColor = 0;
}

Rocket.prototype = new Particle();
Rocket.prototype.constructor = Rocket;

Rocket.prototype.explode = function() {
 var count = Math.random() * 10 + 80;

 for (var i = 0; i < count; i++) {
	 var particle = new Particle(this.pos);
	 var angle = Math.random() * Math.PI * 2;

	 // emulate 3D effect by using cosine and put more particles in the middle
	 var speed = Math.cos(Math.random() * Math.PI / 2) * 15;

	 particle.vel.x = Math.cos(angle) * speed;
	 particle.vel.y = Math.sin(angle) * speed;

	 particle.size = 10;

	 particle.gravity = 0.2;
	 particle.resistance = 0.92;
	 particle.shrink = Math.random() * 0.05 + 0.93;

	 particle.flick = true;
	 particle.color = this.explosionColor;

	 particles.push(particle);
 }
};

Rocket.prototype.render = function(c) {
 if (!this.exists()) {
	 return;
 }

 c.save();

 c.globalCompositeOperation = 'lighter';

 var x = this.pos.x,
	 y = this.pos.y,
	 r = this.size / 2;

 var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
 gradient.addColorStop(0.1, "rgba(255, 255, 255 ," + this.alpha + ")");
 gradient.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")");

 c.fillStyle = gradient;

 c.beginPath();
 c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
 c.closePath();
 c.fill();

 c.restore();
};