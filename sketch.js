var canv_w = window.innerWidth;
var canv_h = window.innerHeight;
var black_to_white = 0;
var white_to_black = 255;

var planet = {
    x : 0,
    y : canv_h / 2,
    z : 2,
    diameter : 20,
    speed_right : 3,
    speed_left : -3
};

var sun = {
    x : canv_w / 2,
    y : canv_h / 2,
    diameter : 0
};

function setup() {
    createCanvas(canv_w, canv_h);
}

function draw() {
    black_to_white = map(planet.x, 0, canv_w, 0, 255);
    white_to_black = map(planet.x, 0, canv_w, 255, 0);
    background(50);
    noStroke();

    fill(white_to_black);
    ellipse(sun.x, sun.y, sun.diameter);

    fill(black_to_white);
    ellipse(planet.x, planet.y, planet.diameter, planet.diameter);

    if (planet.x > canv_w) {
        planet.speed = planet.speed_left;
      } else if (planet.x == 0) {
        planet.speed = planet.speed_right;
      }

    planet.x = planet.x + planet.speed;
    sun.diameter = map(planet.x, 0, canv_w, 0, canv_h)


      // else if (planet.x >= canv_w) {
      //       planet.x = 0;
      //       sun.diameter = 0;
      //       // console.log("2. planet.x is: ", planet.x);
      //       // console.log("1. planet.y is: ", planet.y);
      //   }

}
