shape=""
nose_X=""
nose_Y=""
difference=""
left_wrist_X=""
right_wrist_Y=""
function setup(){
    video = createCapture(VIDEO)
    video.size(530, 400)
    video.position(100, 150)
    canvas = createCanvas(530, 400)
    canvas.position(750, 150)
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("model's been initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        nose_X=floor(results[0].pose.nose.x)
        nose_Y=floor(results[0].pose.nose.y)
        console.log("nose's x position is "+nose_X+" and the nose's y position is "+nose_Y)
        left_wrist_X=floor(results[0].pose.leftWrist.x)
        right_wrist_X=floor(results[0].pose.rightWrist.x)
        difference=floor(left_wrist_X-right_wrist_X)
        console.log("The left wrist's x position's "+left_wrist_X+" and the right wrist's x position's "+right_wrist_X+". So the difference is "+difference)
    }
}
function draw(){
    background("crimson")
    shape=document.getElementById("shape").value
    fill("green")
    stroke("black")
    if(shape=="square"){
        square(nose_X, nose_Y, difference)
    }
    else if(shape=="rectangle"){
        rect(nose_X, nose_Y, difference+150, difference)
    }
    else if(shape=="circle"){
        circle(nose_X, nose_Y, difference)
    }
}