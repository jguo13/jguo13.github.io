let space = 4;
function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels


}


function draw() {
	stroke('#222222')
	background(10000);
	//second background
	for (let i = 0; i < 60; i++) {
		strokeWeight(3)
		stroke(0,0,255,150)
		line(1 + i * space, 500 - i * 4, 1 + i * space, 600);
	}
	//second hand
	strokeWeight(3)
	stroke(0,0,255,150)
	line(second() * space, 500 - second() * 4, second() * space, 600);
	//minute background
	for (let i = 0; i < 60; i++) {
		strokeWeight(5)
		stroke(225,204,0,150)
		line(20 + i * (space + 2), 0, 20 + i * (space  + 2), 400 - i * 6);
	}
	//minute progress bar
	for (let i = 0; i < minute(); i++) {
		strokeWeight(5)
		stroke(825,104,0,150)
		line(20 + i * (space + 2), 0, 20 + i * (space + 2), 400-i*6);
	}
	//minute hand
	strokeWeight(3)
	stroke('red')
	line(20+minute()*(space+2), 0, 20+minute()*(space+2), 400-minute()*6);
	//hour bars
	for (let i = 0; i < hour(); i++) {

		if (i % 2 == 0) {
		stroke(100 + (i-1) * (space + 20),0 + (i-1) * (space + 5),255 + (i-1) * (space + 20),150)
		strokeWeight(20)
		line(400 + i * (space + 10), 0, 400 + i * (space + 10), 300);

		}
		else {
		stroke(100 + i * (space + 20),0 + i * (space + 5),255 + i * (space + 20),150)
		strokeWeight(20)
		line(400 + (i-1) * (space + 10), 325, 400 + (i-1) * (space + 10), 600);
		}
	}
}


