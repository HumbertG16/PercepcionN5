function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(180);
	stroke(0);
	rect(150, 150, 100, 100); 
		if(mouseIsPressed && mouseX > 150 && mouseX<=250 && mouseY > 150 && mouseY<=250){
		  background(0, 255, 0);
		}
	rect(150, 150, 100, 100);
}
