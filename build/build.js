var gui = new dat.GUI();
var params = {
    Random_Seed: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "Download_Image");
var WIDTH = 500;
var HEIGHT = 500;
var minX = WIDTH / 15;
var maxX = WIDTH - minX;
var border = maxX - minX;
var minY = HEIGHT / 15;
var maxY = HEIGHT - minY;
function setup() {
    createCanvas(WIDTH, HEIGHT);
}
function draw() {
    background(229, 224, 205);
    drawBigSquare();
    drawTree();
}
function drawBigSquare() {
    noFill();
    rect(minX, minY, border, border);
}
function drawTree() {
    var centerX = width / 2;
    var centerY = height / 2;
    var leftPointX = minX;
    var leftPointY = centerY;
    var centerPointX = centerX;
    var centerPointY = minY;
    var rightPointX = maxX;
    var rightPointY = centerY;
    var offsetCenterX = centerX - border / 8;
    var offsetRightX = maxX - border / 8;
    var offsetRightY = linearFunction(centerPointX, centerPointY, maxX, centerY, offsetRightX);
    line(leftPointX, leftPointY, offsetCenterX, minY);
    line(offsetCenterX, minY, offsetRightX, offsetRightY);
    for (var i = 1; i <= 7; i++) {
        if (i % 2 != 0) {
            line(leftPointX, leftPointY, centerPointX, centerPointY);
            line(centerPointX, centerPointY, rightPointX, rightPointY);
        }
        else {
            line(rightPointX, rightPointY, centerPointX, centerPointY);
            leftPointX += border / 8;
            leftPointY += border / 8;
            line(centerPointX, centerPointY, leftPointX, leftPointY);
            rightPointX -= border / 8;
            rightPointY += border / 8;
        }
        centerPointY += border / 8;
    }
    line(rightPointX, rightPointY, centerPointX, maxY);
}
function linearFunction(x1, y1, x2, y2, x) {
    var slope = (y2 - y1) / (x2 - x1);
    var intersect = y1 - slope * x1;
    return slope * x + intersect;
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map