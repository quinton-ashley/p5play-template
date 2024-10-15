let ball;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');

	ball = new Sprite();
	ball.diameter = 50;
}

function draw() {
	background('skyblue');

	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse);
	}
}
