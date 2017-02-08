
function onLoad() {
	//document.addEventListener("deviceready", onDeviceReady, false);
	deviceReady.onDeviceReady();
}

var deviceReady = {
	onDeviceReady : function() {
		var canv = document.getElementById("myCanvas");
		var ctx = canv.getContext("2d");
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		
		ctx.fillStyle = "black";
		ctx.font = "30px Arial";
		ctx.textAlign = "center";
		ctx.fillText("Touch to start game",canv.width/2,canv.height/2);
		
		canv.addEventListener("touchstart", startGame, false);
		
	}
}

var gameBlock;

function startGame() {
	var parent1 = document.getElementById("div1");
	var child1 = document.getElementById("myCanvas");
	parent1.removeChild(child1);
	deviceReady = undefined;
	
	myGameArea.start();
	
	gameBlock = new component(30, 30, "red", 10, 120);

}

function component(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
    },
	clear : function() {
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	},
	

}

	document.addEventListener("touchstart", false);
		
		
		

	

function updateGameArea() {
	myGameArea.clear();
	gameBlock.newPos();
	gameBlock.update();
	
    if (myGameArea.checkSide == "left") {
            moveLeft();
    }
    if (myGameArea.checkSide == "right") {
			moveRight();
	}
        
}

function moveLeft() {
	gameblock.speedX -= 3;
}

function moveRight() {
	gameBlock.speedX += 3;
}
