// -------------------
//  Parameters and UI
// -------------------

// @ts-nocheck

const gui = new dat.GUI()
const params = {
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

const WIDTH = 500
const HEIGHT = 500

const minX = WIDTH/15
const maxX = WIDTH - minX
const border = maxX - minX

const minY = HEIGHT/15
const maxY = HEIGHT - minY


function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(229, 224, 205)
  drawBigSquare()
  drawTree()
}

function drawBigSquare(){
  noFill()
  rect(minX, minY, border,  border);
}

function drawTree(){
    let centerX = width/2
    let centerY = height/2
    
    let leftPointX = minX
    let leftPointY = centerY
    
    let centerPointX = centerX
    let centerPointY = minY
    
    let rightPointX = maxX
    let rightPointY = centerY
  
    
    let offsetCenterX = centerX - border / 8
    let offsetRightX = maxX - border / 8
    
    let offsetRightY = linearFunction(centerPointX, centerPointY, maxX,     centerY, offsetRightX)
    
    line(leftPointX, leftPointY, offsetCenterX, minY)
    line(offsetCenterX, minY, offsetRightX, offsetRightY)
   
    for(let i = 1; i <= 7; i++){
      
      if(i % 2 != 0){
        line(leftPointX, leftPointY, centerPointX, centerPointY)
        line(centerPointX, centerPointY, rightPointX, rightPointY)
      }else{
        line(rightPointX, rightPointY, centerPointX, centerPointY)
        leftPointX += border / 8
        leftPointY += border / 8
        line(centerPointX, centerPointY, leftPointX, leftPointY)
        rightPointX -= border/8
        rightPointY += border/8
      }
      
      centerPointY+=border/8
      
    }
    line(rightPointX, rightPointY, centerPointX, maxY)   
  
}

function linearFunction(x1,y1,x2,y2,x){
  //y = mx + b
  let slope = (y2-y1)/(x2-x1) //m
  let intersect = y1 - slope * x1 //b
  return slope * x + intersect 
}


function windowResized() {
    p6_ResizeCanvas()
}