
img = "";
status1 = "";
function preload(){
img = loadImage('dog_cat.jpg');


}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}



function draw() {
image(img,0,0,640,420);
fill("#FF0666");
text("Dog",45,75);
noFill();
stroke("FF0777")
rect(30,60,450,350);
fill("#FF2345");
text("Cat",320,120);
noFill();
stroke("#FF2345");
rect(300,90,270,320);
}

function modelLoaded() {
console.log("Model Loaded!");
status1 = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
    if(error) {
        console.log(error);
    }
    console.log(results);
}