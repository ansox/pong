class Ball {
  x = 0;
  y = 0;
  width = 4;
  height = 4;
  dx = 0;
  dy = 0;
  speed = 1.6;

  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.dx = 1; // Math.random();
    this.dy = 1; //Math.random();
  }

  tick() {
    console.log(this.dx);
    console.log(this.dy);


    if (this.x + (this.dx * this.speed) + this.width >= WIDTH) {
      this.dx *= -1;
    } else if (this.x + (this.dx * this.speed) < 0) {
      this.dx *= -1;
    }

    if (this.y > HEIGHT) {
      //PONTO DO INIMIGO
      // init();
    } else if (this.y < 0) {
      //PONTO DO JOGADOR
    }

    const bounds = new Rectangle(this.x + (this.dx * this.speed),
      this.y + (this.dy * this.speed), this.width, this.height);

    const boundsPlayer = new Rectangle(player.x, player.y, player.width, player.height);
    const boundsEnemy = new Rectangle(enemy.x, enemy.y, enemy.width, enemy.height);

    if (bounds.intersect(boundsPlayer)) {
      this.dy *= -1;
    } else if (bounds.intersect(boundsEnemy)) {
      this.dy *= -1;
    }

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
  }

  render(context) {
    context.fillStyle = "rgba(0, 255, 0, 1)";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}