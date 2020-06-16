const rays = [];
const walls = [];
let particle = null;

function setup() {
	createCanvas(500, 500);

	// Create boundary around the canvas
	walls.push(new Wall(0, 0, 500, 0));
	walls.push(new Wall(0, 0, 0, 500));
	walls.push(new Wall(0, 500, 500, 500));
	walls.push(new Wall(500, 0, 500, 500));

	// Create random walls and rays
	const wallCount = random(3, 10);
	for(let index = 0; index < wallCount; index++) {
		walls.push(new Wall(random(0, 500), random(0, 500), random(0, 500), random(0, 500)));
	}

	for(let index = 0; index < 360; index += 5) {
		rays.push(new Ray(100, 300, index));
	}

	particle = new Particle(0, 0);
	particle.rays = rays;
}

function draw() {
  background(255);

	push();
	// Add dots to canvas for clearer location mapping
	for(let xIndex = 0; xIndex < 500; xIndex += 10) {
		for(let yIndex = 0; yIndex < 500; yIndex += 10) {
			strokeWeight(1);
			stroke("rgba(0, 0, 0, 0.3)");
			point(xIndex, yIndex);
		}
	}
	pop();

	particle.setPosition(mouseX, mouseY);
	particle.draw();
}

// A "Wall" will be used top deflect a ray
class Wall {
	constructor(x1, y1, x2, y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}

	draw() {
		push();
		strokeWeight(3);
		stroke("rgba(0, 0, 0, 0.5)");
		line(this.x1, this.y1, this.x2, this.y2);
		pop();
	}
}

// A "Ray" will cast to a wall passed to it
class Ray {
	constructor(x, y, a) {
		// Normaly, we use an angle and calculate the end point of the ray's casted line but we can skip that by programming in the end point coordinate
		this.x = x;
		this.y = y;
		this.dir = p5.Vector.fromAngle(radians(a));
	}

	setPosition(x, y) {
		this.x = x;
		this.y = y;
	}

	draw() {
		push();
		translate(this.x, this.y);
		line(0, 0, this.dir.x * 10, this.dir.y * 10);
		pop();
	}

	cast(wall) {
    const x1 = wall.x1;
    const y1 = wall.y1;
    const x2 = wall.x2;
    const y2 = wall.y2;

    const x3 = this.x;
    const y3 = this.y;
    const x4 = this.x + this.dir.x;
    const y4 = this.y + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }
  }
}

// An "Intersection" is created when a wall and a ray intersects
class Intersection {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	draw() {
		point(x, y);
	}
}

// A "Particle" will be the source of the ray
class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.rays = [];
	}

	setPosition(x, y) {
		this.x = x;
		this.y = y;
	}

	draw() {
		push();
		strokeWeight(20);
		stroke("#1cb1ed");
		point(this.x, this.y, 20);
		pop();

		for(let ray of rays) {
			ray.setPosition(mouseX, mouseY);
		}

		for(let wall of walls) {
			wall.draw();

			for(let ray of rays) {
				let closestIntersect = null;
				let record = Infinity;

				for (let wall of walls) {
					const intersectPoint = ray.cast(wall);
					if (intersectPoint) {
						const d = p5.Vector.dist(createVector(this.x, this.y), intersectPoint);
						if (d < record) {
							record = d;
							closestIntersect = intersectPoint;
						}
					}
				}

				if (closestIntersect) {
					push();
					strokeWeight(5);
					stroke("rgba(0, 95, 214, 0.33)");
					point(closestIntersect.x, closestIntersect.y);

					strokeWeight(0.5);
					line(ray.x, ray.y, closestIntersect.x, closestIntersect.y);
					pop();
				}

				// const intersectPoint = ray.cast(wall)

				// if(intersectPoint) {
				// 	strokeWeight(5);
				// 	push();
				// 	point(intersectPoint.x, intersectPoint.y);
				// 	pop();

				// 	push();
				// 	strokeWeight(0.5);
				// 	line(ray.x, ray.y, intersectPoint.x, intersectPoint.y);
				// 	pop();
				// }
			}
		}
	}
}

function getAngle(x1, y1, x2, y2) {
	return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}