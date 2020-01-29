var generator = new Random(1);

var draw = function() {
    var standardDeviation = 30;
    var mean = 180;
    var num = generator.nextGaussian(mean, standardDeviation);
    var x = (generator.nextGaussian() * standardDeviation) + mean;
    noStroke();
    fill(random(0, 255), random(0,255), random(0,255), random(0,255));
    ellipse(x, random(62,259), 19, 19);
};
