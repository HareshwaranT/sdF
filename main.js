video = "";
object_name

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("Object_Name").value;
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
}