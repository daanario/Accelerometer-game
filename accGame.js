
function onLoad() {
	//document.addEventListener("deviceready", onDeviceReady, false);
	onDeviceReady();
}

function onDeviceReady() {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");
	ctx.strokeRect(0,0,canv.width,canv.height);
	
	ctx.fillStyle = "black";
	ctx.font = "30px Arial";
	ctx.textAlign = "center";
	ctx.fillText("Touch to start game",canv.width/2,canv.height/2);
	
}

function startGame() {
	
}