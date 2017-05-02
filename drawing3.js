function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
}

function mouseDragged() {
    stroke(0,0,0);
    strokeWeight(1);
    fill(0,0,0);
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 5, 5);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
