function pos(num){
	if (num > 0){
		return num;
	}
	if (num < 0){
		return num * -1;
	}
}

function death(){
	var player = document.getElementById("player")
	if (player.animation >= 0){
		player.animation = 0;
		player.style.zIndex = 1000;
		player.velocityY = 0;
		player.style.backgroundPositionY = "calc(-6 * 64px)";
		player.py = player.getBoundingClientRect().y;
		new Audio('sfx/death.wav').play();
	}
	if (player.animation > -250){
		player.animation = player.animation - 1;
		player.velocityY = player.velocityY + 0.5;
		player.style.transform = "translate(" + (player.x) + "px," + (player.py - (- ((player.velocityY - 15)**2) + 15**2)) + "px)"
	}
	else{
		player.animation = 0;
		player.hp = 1;
		player.style.zIndex = 1;
		player.isDead = false;
		load("1-1")
	}
}