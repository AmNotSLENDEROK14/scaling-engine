video = "";


function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function sertup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 480,380);
}

function start() {
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}