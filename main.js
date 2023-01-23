song = "";
song1="";
leftWristX=0;
rigthWristX=0;
leftWristY=0;
rightWristY=0;
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song =loadSound("dreamers.mp3");
    song1=loadSound("HP.mp3");
}
function play(){
    song.play();
    song1.play();

}
function modelLoaded(){
    console.log('PoseNet Is Initialised');
}
function gotPoses(results){
     if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Left Wrist X =  " + leftWristX  + "     Left Wrist Y =  " + leftWristY );
        console.log("Right Wrist X = " + rightWristX + "     Right Wrist Y = " + rightWristY);
     }
}