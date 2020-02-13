var inc = 0.0025;

// Array of particles
var xoffs = [];

function setup() {
  centerCanvas();
  
  // First random particle
  xoffs[0] = random(50, 100);
}


function draw() {
	background('#111');
	
	// Go through all the particles
	for(let i = 0; i < xoffs.length; i++) {
		
		// Pick a smooth random location
		let x = map(noise(xoffs[i]), 0, 1, 0, width);
		let y = map(noise(xoffs[i] + 100), 0, 1, 0, height);
		
		// Pick a smooth random color
		let cr = noise(xoffs[i] + 000) * 255;
		let cg = noise(xoffs[i] + 100) * 255;
		let cb = noise(xoffs[i] + 200) * 255;
		
		// Draw the circle
		fill(cr, cg, cb);
		noStroke();
		circle(x, y, 5);
		
		xoffs[i] += inc;
	}
	
	// Each 7 frame, create a new particle until there are 1000 of them
	if(xoffs.length < 1000 && frameCount % 7 == 0) xoffs[xoffs.length+1] = xoffs.length + random(10);
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