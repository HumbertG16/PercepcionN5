//cuadro de pelotas
var y;
var x;
function setup() {
  createCanvas(500, 500);
	background(0);
}

function draw() {
  fill (150, 200, 100);
	for (var y = 5; y<500; y = y +10){
		for (var x = 5; x<=500; x = x +10){
		ellipse(x, y, 10, 10);
	}
	}
}
