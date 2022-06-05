function pos(num){
	if (num > 0){
		return num;
	}
	if (num < 0){
		return num * -1;
	}
}

function hit(player){
	if (player.hp>1){
		player.hp = player.hp - 1;
	}
	else{
		player.isDead = true;
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

function endstage(){
	player.time = player.time + 1;
	if (player.time < 100){
		player.direction = 1;
		player.velocityY = 5.12;
		player.velocityX = 0;
		document.getElementsByClassName("flag")[0].style.transform = "translate(" + (document.getElementsByClassName("flag")[0].getBoundingClientRect().x - document.body.getBoundingClientRect().x) + "px," + (document.getElementsByClassName("flag")[0].getBoundingClientRect().y + 5.12) + "px)";
		player.y = player.y + player.velocityY;
		update(player);
		collision(player);
	}
	else if (player.time == 100){
		player.direction = 0;
		player.x = player.x + 55;
		player.velocityY = 0;
		update(player);
	}
	else if (player.time == 150){
		new Audio('sfx/clear.wav').play();
	}
	else if (player.time > 160){
		player.direction = 1;
		player.velocityX = 2.5;
		physics();
	}
	if (player.time == 700){
		lvl = lvl + 1;
		load(levels[lvl])
	}
}


function stomp(elem){
	elem.velocityX = 0;
	new Audio('sfx/stomp.wav').play();
	elem.isDead = true;
	elem.animation = 0;
}


function kick(elem){
	elem.velocityY = -10;
	elem.setAttribute("name","");
	elem.hh = true;
	new Audio('sfx/kick.wav').play();
}