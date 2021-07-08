//渐变红色
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()) {

            //print(pixel.X);
    		pixel.setRed(pixel.getX());
    		pixel.setGreen(0);
    		pixel.setBlue(0);

    }

    return picture;
}

var result = changeRed(256,200);
print(result);