let zoff = 0;
let xoff1 = 0;
let xoff2 = 100;
let coff = 0;

function setup() {
  centerCanvas();
}

function draw() {
	
	background('#111');
	
	// Go to a random pos
	let x = map(noise(xoff1), 0, 1, 150, width-150);
	let y = map(noise(xoff2), 0, 1, 150, height-150);
	translate(x, y);
	
	xoff1 += 0.003;
	xoff2 += 0.003;

	beginShape();
	for(let a = 0; a < TWO_PI; a += radians(1)){
		
		// Pick Perlin values like a circle
		let cosA = cos(a);
		let sinA = sin(a);
		let i = map(cosA, -1, 1, 0, 2);
		let j = map(sinA, -1, 1, 0, 2);
		let sNoise = noise(i, j, zoff);
		let r = map(sNoise, 0, 1, 100, 150); // to pick the disk diameter / 2
		
		// Now draw the circle with a random r
		let x = r * cosA;
		let y = r * sinA;
		
		let rNoise = floor(noise(cos(coff)) * 255);
		let gNoise = floor(noise(sin(coff)) * 255);
		let bNoise = floor(noise(sin(coff) + cos(coff)) * 255);
		
		fill(rNoise, gNoise, bNoise);
		vertex(x, y);
	}
	endShape();
	
	coff += 0.002;
	zoff += 0.02;
	
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