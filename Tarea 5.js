Pelota rebotadora
var pelotas = [];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 100; i++) {
		pelotas[i] = new Pelota();
	}
}

function draw() {
	background(200);
	for (var i = 0; i < 100; i++) {
	pelotas[i].mostrar();
	pelotas[i].mover();
	if (pelotas[i].salir()) {
		pelotas[i].rebotar();
	}
	}

}

Otro archivo

class Pelota {
	constructor() {
		this.x1 = 20;
		this.y1 = 20;
		this.velx = random(3,10);
		this.vely = random(3,10);
		this.posx = random(0, 400);
		this.posy = random(0, 400);
		this.R = random(0, 255);
		this.G = random(0, 255);
		this.B = random(0, 255);
	}

	mostrar() {
		ellipse(this.posx, this.posy, this.x1, this.y1);
		fill(this.R, this.G, this.B);
	}
	mover() {
		this.posx = this.posx + this.velx;
		this.posy = this.posy + this.vely;

	}
	salir() {
		var res;
		if (this.posx < 0 || this.posx > width || this.posy < 0 || this.posy > height ) {
			res = true
		} else {
			res = false
		}
		return res;
	}
	rebotar() {
		this.velx = -this.velx
		this.vely = -this.vely
	}
}
