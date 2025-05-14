new Q5();

new Canvas();
world.gravity.y = 10;

let ball = new Sprite();
ball.x = halfWidth - 200;
ball.y = halfHeight - 200;
ball.diameter = 50;

let groundA = new Sprite();
groundA.x = halfWidth - 120;
groundA.width = 200;
groundA.rotation = 20;
groundA.physics = STATIC;

let groundB = new Sprite();
groundB.x = halfWidth + 120;
groundB.width = 200;
groundB.rotation = -20;
groundB.physics = STATIC;

function update() {
	background('skyblue');

	textAlign(CENTER);
	textSize(20);
	text('click to jump!', halfWidth, halfHeight - 100);

	if (mouse.presses()) ball.vel.y = -5;
}
