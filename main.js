

function setup(){
createCanvas(600,480)
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    background(125)

noStroke();
fill(0, 120, 256)    
circle(50,50,50)
noStroke();
fill(30, 201, 252)    
circle(550,430,50)
noStroke();
fill(30, 201, 252)    
circle(550,50,50)
noStroke();
fill(30, 201, 252)    
circle(50,430,50)
fill(245, 258, 267)
rect(75,25,450,50)
fill(245, 255, 255)
rect(75,406,450,50)
fill(0, 255, 255)
rect(25,75,50,329)
fill(174, 255, 255)
rect(525,75,50,329)
fill(184, 142, 227)
rect(75,75,450,50)
fill(145, 142, 227)
rect(75,356,450,50)
fill(78, 142, 227)
rect(75,75,50,329)
fill(190, 142, 227)
rect(475,75,50,329)
image(video,235,185,125,125)
}
function take_snapshot(){
    save('student_name.png')
}