let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let brikHeight = 40;
let margin = 10;
let brickWidth = 440;
let brikWidht = (brickWidth / 5) - margin;
console.log(canvas.width);
let marginRight = -10;
let ballX = 240;
let ballY = 300;
let ballRadius = 10;
let dX = 2;
let dY = -2;
let ball = 1;
let paddleX = 0;
const paddleWidth = 75;
const paddleHeight = 10;

const canvasW = canvas.width;
const canvasH = canvas.height;
const paddleY = canvasH - 2*paddleHeight;

canvas.addEventListener('mousemove' , function (e) {
console.log(e);
paddleX = e.clientX;
})

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX,paddleY,paddleWidth,paddleHeight);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

}
drawPaddle();

function drawBall () {
  // canvas = document.getElementById('myCanvas');
  ballX +=dX;
  ballY += dY;
  // let ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,480,320);
  ctx.beginPath();
  ctx.arc(ballX,ballY,ballRadius,0,Math.PI*2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
  if(ballX > (480 - ballRadius)) {
    dX = -dX;
  } else if(ballX < (0 + ballRadius)) {
    dX = -dX;
  }
  if (ballY > (320 - ballRadius)) {
    dY = -dY;
  } else if (ballY < (0 + ballRadius)) {
    dY = -dY;
  }

}

setInterval(draw,10);


function detectCollision() {
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 5; col++) {
			const b = bricks[row][col];
			if (b.x < ball.x && b.x + brikWidht  > ball.x){
				if (b.y < ball.y && b.y + brikHeight  > ball.y){
					b.visible = false;
				}
			}
		}
	}
}

let bricks = [];

function creatBricks() {
 for (let row = 0; row < 3; row++) {
  bricks[row] = [];
  for (let col = 0; col < 5; col++) {
   bricks[row][col] = { x: `${col * brikWidht}`, y: `${row * brikHeight}`, visible: true };
  }
 }
}

function drawBricks() {
 for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 5; col++) {
   if (bricks[row][col].visible) {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.rect(bricks[row][col].x, bricks[row][col].y, brikWidht - margin, brikHeight - margin);
    ctx.fill();
    ctx.closePath();
   }
  }
 }
}

function draw () {
  ctx.clearRect(0,0,canvasW,canvasH);
  drawPaddle();
  drawBall();
  detectCollision();
  creatBricks();
  drawBricks();
}


creatBricks();
// bricks[2][1].visible = false;

drawBricks();
detectCollision();
