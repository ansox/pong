class Player {
  right = false;
  left = false;
  x = 0;
  y = 0;
  width = 40;
  height = 5;


  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  tick() {
    if (this.right) {
      this.x += 2;

      if (this.x + this.width > WIDTH) {
        this.x = WIDTH - this.width;
      }

    } else if (this.left) {
      this.x -= 2;

      if (this.x < 0) {
        this.x = 0;
      }
    }
  }

  render(context) {
    // console.log('player');

    context.fillStyle = "rgba(0, 0, 255, 1)";
    context.fillRect(this.x, this.y, this.width, this.height);

  }
}