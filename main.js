function preload()
{

}
right_wrist_y = "";
computer = 0;
circle_x = 1075;
circle_y = 40;
function setup()
{
    canvas = createCanvas(1100,400);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.hide();

    var poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", getposes);
}
function getposes(results)
{
    console.log(results);
    
    right_wrist_y = results[0].pose.rightWrist.y;
}
function draw()
{
    image(video, 0, 0, 400, 400);
    if(computer >= 320)
    {
        computer = 0;

    }
    else if(computer >= 0)
    {
        if(computer <= 320)
        computer = computer + 2;
    }
    fill("black");
    rect(400,0,700+100,400);
    fill("red");
    rect(340+400, 0, 20, 400)
    fill("aqua");
    rect(700+400, computer, -25, 90);
    fill("red")
    rect(0+400, right_wrist_y, 25, 90);
}
function modelloaded()
{
    console.log("poseNet model is loaded");
}