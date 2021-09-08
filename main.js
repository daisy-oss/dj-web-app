song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLefty=0;
scorerightY=0;
function setup(){
 canvas=createCanvas(500,550);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,550);

    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLefty>0.2){
    circle(leftWristX,leftWristY,25);
    no=Number(leftWristY);
    noo=floor(no);
    volume=noo/500;
    document.getElementById("heyy").innerHTML="volume= "+volume;
    song.setVolume(volume);
}if(scorerightY>0.2){
    

      circle(rightWristX,rightWristY,25);
      if(rightWristY>0 && rightWristY<=100){
          document.getElementById("hey").innerHTML="speed = 0.5x";
          song.rate(0.5);
      }
      if(rightWristY>100 && rightWristY<=200){
        document.getElementById("hey").innerHTML="speed = 1x";
        song.rate(1);
    }
    if(rightWristY>200 && rightWristY<=300){
        document.getElementById("hey").innerHTML="speed = 1.5x";
        song.rate(1.5);
    }
    if(rightWristY>300 && rightWristY<=400){
        document.getElementById("hey").innerHTML="speed = 2x";
        song.rate(2);
    }
    if(rightWristY>400 && rightWristY<=500){
        document.getElementById("hey").innerHTML="speed = 2.5x";
        song.rate(2.5);
    }
}
}

function preload(){
song=loadSound("music.mp3");

}

function song21(){
    song.play();
    song.rate(1.5);
    song.setVolume(1);
}

function modelLoaded(){
    console.log("yay, its working");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLefty=results[0].pose.keypoints[9].score;
        scorerightY=results[0].pose.keypoints[10].score;
        console.log(scoreLefty);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftwristX ="+leftWristX+"leftwristY ="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightwristX ="+rightWristX+"rightwristY ="+rightWristY);
    }
    
}