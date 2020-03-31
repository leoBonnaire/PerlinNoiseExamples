var start = 0;

function setup() {
  centerCanvas();
}

function draw() {

	background(51);

	let xoff = start;

	stroke(255);

	// Mutated sinus
	noFill();
	beginShape();
	strokeWeight(3);
  stroke(255, 0, 0);
	for(let x = 0; x < width; x++){
		let y = (map(noise(xoff), 0, 1, -1, 1) * 100 + map(sin(xoff), -1, 1, 0, height)) / 2 + height/4;
		vertex(x, y);
		xoff += 0.005;
	}
	endShape();

	// Normal sinus
	xoff = start;
	noFill();
	beginShape();
	strokeWeight(2);
  stroke(0, 0, 255);
	for(let x = 0; x < width; x++){
		let y = (map(sin(xoff), -1, 1, 0, height)) / 2 + height/4;
		vertex(x, y);
		xoff += 0.005;
	}
	endShape();


	start += 0.01;
}

function centerCanvas() {
  canvas = createCanvas(0.5 * windowWidth, 0.5 * windowWidth);
  var x = windowWidth - width - 10;
  var y = (windowHeight - 0.5 * windowWidth) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas();
}
