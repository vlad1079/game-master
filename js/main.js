let ballX = 240;
let ballY = 300;
let ballRadius = 10;
let dX = 2;
let dY = -2;

function drawBall () {
  let canvas = document.getElementById('myCanvas');
  ballX +=dX;
  ballY += dY;
  let ctx = canvas.getContext('2d');
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

setInterval(drawBall,10);
