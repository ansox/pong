let canvas;
let context;
let player;
let enemy;
let ball;
const WIDTH = 160;
const HEIGHT = 120;
const SCALE = 3;

function init() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  context.canvas.width = WIDTH * SCALE;
  context.canvas.height = HEIGHT * SCALE;
  context.scale(SCALE, SCALE);

  player = new Player(100, HEIGHT - 5);
  enemy = new Enemy(100, 0);
  ball = new Ball(100, HEIGHT / 2 - 1);

  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  window.requestAnimationFrame(run);
}

function onKeyDown(e) {
  if (e.code === 'ArrowRight') {
    player.right = true;
  }

  if (e.code === 'ArrowLeft') {
    player.left = true;
  }

}

function onKeyUp(e) {
  if (e.code === 'ArrowRight') {
    player.right = false;
  }

  if (e.code === 'ArrowLeft') {
    player.left = false;
  }
}

function tick() {
  player.tick();
  enemy.tick();
  ball.tick();
}

function render() {
  context.fillStyle = "#000"
  context.fillRect(0, 0, WIDTH * SCALE, HEIGHT * SCALE);

  player.render(context);
  enemy.render(context);
  ball.render(context);
}

function run() {
  tick();
  render();
  window.requestAnimationFrame(run);
}

init();