fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
textSize(16);

var answer = floor(random(1, 6));
if (answer === 1) {
    fill(255, 0, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("Definitely not", 153, 222);
}
else if (answer === 2) {
    fill(255, 68, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("Not likely", 168, 222);
}
else if (answer === 3) {
    fill(23, 214, 182);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Most likely", 162, 222);
}
else if (answer === 4) {
    fill(34, 255, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("100% certain!", 151, 222);
}
else {
    fill(255, 0, 217);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Ask later", 167, 222);
}
