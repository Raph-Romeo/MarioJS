var keyState = []

window.addEventListener('keydown',function(e){
		keyState[e.keyCode || e.which] = true;
	},true);    
	window.addEventListener('keyup',function(e){
		keyState[e.keyCode || e.which] = false;
	},true);


function left(player){
	if (player.velocityX > - player.speed){
		player.velocityX = player.velocityX - 0.2;
		player.direction = 0;
	}
}

function right(player){
	if (player.velocityX < player.speed){
		player.velocityX = player.velocityX + 0.2;
		player.direction = 1;
	}
}

function up(player){
	if (player.grounded){
		player.grounded = 0;
		player.velocityY = -16;
		new Audio('sfx/jump-small.wav').play();
	}
	if (player.velocityY < -5){
		player.velocityY = player.velocityY - 0.6;
	}
}


function down(player){
	player.crouch = true;
}

function run(player){
	player.speed = 12;
}


function controls(){
var player = document.getElementById("player")
if ((keyState[37] || keyState[65]) && !(keyState[39] || keyState[68])){left(player);player.moving=1}
if ((keyState[39] || keyState[68]) && !(keyState[37] || keyState[65])){right(player);player.moving=1}
if (!(keyState[39] || keyState[68]) && !(keyState[37] || keyState[65])){player.moving=0}
if ((keyState[39] || keyState[68]) && (keyState[37] || keyState[65])){player.moving=0}
if (keyState[38] || keyState[32] || keyState[87]){up(player)}
if (keyState[40] || keyState[83]){down(player)}else{player.crouch = false;}
if (keyState[16] || keyState[17]){run(player)}else{player.speed=6}

if (player.getBoundingClientRect().x <= 0){
	if (player.velocityX < 0){
		player.velocityX = 0;
	}
}

}