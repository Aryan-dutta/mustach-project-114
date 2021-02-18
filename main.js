noseX = 0;
noseY = 0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/wTrBtQ95/m.png')
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initailized');
}

function take_snapshot() {
    save('myFilterImage.png');
}

function draw() {
    image(video, 0, 0, 350, 300);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0] .pose.nose.x;
        noseY = results[0] .pose.nose.y;
        console.log(results);
        console.log("nose x = " + results[0] .pose.nose.x);
        console.log("nose y = " + results[0] .pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(clown_nose, noseX-23, noseY, 50, 30);
}

