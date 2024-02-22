const ballCount = 12;
const balls = [];
let frame = 0;

const size = 600;
const outerDist = size / 2 - 20;
const innerDist = 40;

const outerPeriod = 1000;

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');

  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    main.appendChild(ball);
    balls.push(ball);
  }

  setInterval(update, 1 / 60);
});

function update() {
  frame++;

  balls.forEach((b, i) => {
    const period = outerPeriod / (2 * (i + 1));
    const dist = lerp(innerDist, outerDist, i / (ballCount - 1));

    const y = Math.sin(frame / (period * Math.PI)) * dist - 10 + 300;
    const x = Math.cos(frame / (period * Math.PI)) * dist - 10 + 300;

    b.style.top = `${y}px`;
    b.style.left = `${x}px`;
  });
}

function lerp(from, to, t) {
  return to * t + from * (1 - t);
}


