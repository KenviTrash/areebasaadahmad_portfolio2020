<html>
<script language="javascript">

var xPositions = [100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350];
var yPositions = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250];

draw = function() {
    background(204, 247, 255);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(56, 71, 99);
        if(yPositions[i] > 400) {
            yPositions[i] = 0;
        }
        ellipse(xPositions[i], yPositions[i], 12, 12);
        yPositions[i] += random(1,10);
    }
};
</script>
</html>
