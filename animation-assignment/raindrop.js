class Raindrop {
  constructor() {
    this.pos = createVector(random(width), random(-400, -30));

    if (random(0, 1) > 0.999998) {
      this.proximity = random(0, 7);
      /*} else if(random(0, 1) >= 0.08) {
          this.proximity = random(5, 15);
        */
    } else {
      this.proximity = random(18, 20);
    }

    this.length = map(this.proximity, 0, 20, 0, 20);
    this.mass = map(this.proximity, 0, 20, 1.5, 3.4);

    this.vel = createVector(0, map(this.proximity, 0, 20, 10, 20));
    this.accel = createVector(0, 0);
    this.color = color(209, 214, 214, 93);
  }

  applyForce(force) {
    //Set the level of gravity force according to the drop mass (physics' logic - slide-window effect)
    force = createVector(0, map(this.proximity, 0, 20, 0.006, 0.43));
    this.accel.add(force);
  }

  fall() {
    this.vel.add(this.accel);
    this.pos.add(this.vel);

    this.accel.mult(0);

    if (this.pos.y + this.length > height) {
      this.reset();
    }
  }
  render() {
    strokeWeight(this.mass);
    stroke(this.color);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.length);
  }

  reset() {
    this.pos = createVector(random(width), random(-400, -30));
    this.proximity = random(0, 20);

    this.length = map(this.proximity, 0, 20, 10, 25);
    this.lineWidth = map(this.proximity, 0, 20, 1.5, 3);

    this.vel = createVector(0, map(this.proximity, 0, 20, 2, 10));
    this.accel = createVector(0, 0);
    this.color = color(209, 214, 214, 93);
  }
}
