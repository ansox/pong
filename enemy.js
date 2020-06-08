class Enemy {
  x = 0;
  y = 0;
  width = 40;
  height = 5;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  tick() {
    this.x += (ball.x - this.x - 6) * 0.15;
  }

  render(context) {
    context.fillStyle = "rgba(255, 0, 0, 1)";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}