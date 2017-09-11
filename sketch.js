var canv_w = window.innerWidth;
var canv_h = window.innerHeight;


var planet = {
    x : 0,
    y : canv_h / 2,
    z : 2,
    diameter : 20
};

var sun = {
    x : canv_w / 2,
    y : canv_h / 2,
    diameter : 80
};

function setup() {
    createCanvas(canv_w, canv_h);
}

function draw() {
    background(50);
    noStroke();
    fill(255,150,0);
    ellipse(sun.x, sun.y, sun.diameter);
    fill(0);
    ellipse(planet.x, planet.y, planet.diameter, planet.diameter);

    if (planet.x < canv_w) {
        planet.x = planet.x + 2
        sun.diameter++;
        // console.log("1. planet.x is: ", planet.x);
        // console.log("1. window innerWidth is : ", canv_w);
      } else if (planet.x == canv_w + 1) {
            planet.x = 0;
            sun.diameter = 80;
            // console.log("2. planet.x is: ", planet.x);
            // console.log("1. planet.y is: ", planet.y);
        }

    console.log("1. planet.y is: ", planet.y);

    if (planet.y != (canv_h / 2) + 10) {
        planet.y++;
        console.log("2. planet.y is: ", planet.y);
        // if (planet.y == (canv_h / 2) + 10) {
        //     up_down = true;
        //     console.log("2. up_down is: ", up_down);
        // }
    }

    console.log("3. planet.y is: ", planet.y);

    if (planet.y != (canv_h / 2) - 10) {
        planet.y = planet.y - 1;
        console.log("4. planet.y is: ", planet.y);
        // if (planet.y < (canv_h / 2) + 9) {
        //     up_down = false;
        //     console.log("5. up_down is: ", up_down);
        // }
    }
}
