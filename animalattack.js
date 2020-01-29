var bodyX = 200;
var bodyY = 193;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(56, 235, 62);
    ellipse(bodyX, bodyY-136, bodyH, 60);
    ellipse(bodyX, bodyY-92, bodyH, 60);
    ellipse(bodyX, bodyY-50, bodyH, 60);
    ellipse(bodyX, bodyY-9, bodyH, 60);
    ellipse(bodyX, bodyY+34, bodyH, 60);
    ellipse(bodyX, bodyY+78, bodyH, 60);
    ellipse(bodyX, bodyY+120, bodyH, 60);
    ellipse(bodyX, bodyY+163, bodyH, 60);
    fill(0, 0, 0);
    ellipse(bodyX-13, bodyY-152, bodyH-54, 6);
    ellipse(bodyX+13, bodyY-152, bodyH-54, 6);
    bodyY--;
};
