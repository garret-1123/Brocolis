
function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav")
	coinS = loadSound("coin.wav")
	gameover = loadSound("gameover.wav")
	kick = loadSound("kick.wav")
	dieS = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400)
	canvas.parent('canvas')
	video = createCapture(VIDEO)
	video.size(600,300)
	video.parent('console')

	poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)}

function draw() {
	
	game()
	document.getElementById("status").innerHTML = status
}


function modelLoaded() {
	console.log("loaded")
}

function gotPoses(results) {
if (results.length > 0) {
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y
console.log([noseX,noseY])
}

}

