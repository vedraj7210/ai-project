video="";
Status="";
function preload(){

}
function setup(){
    Canvas=createCanvas(480,380);
    Canvas.center();
    video= createCapture(VIDEO);
    VIDEO.size(480,380);
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector("cocossd" ,ModelLoaded );
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function ModelLoaded(){
    console.log("Model Loaded");
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
