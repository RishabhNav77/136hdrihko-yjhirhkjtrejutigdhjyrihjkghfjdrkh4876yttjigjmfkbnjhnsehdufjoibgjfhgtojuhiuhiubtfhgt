video = "";
status = "";

function preload() {
    video = createVideo("video.mp4")
    video.hide();
    
}

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();

}

function draw() {
    image(video,0,0,480,380);

}

function STARTVIDEO() {
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("show_status").innerHTML = "Status : Detecting Objects";

}

function modelloaded() {
    console.log("Model Is Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);


}

