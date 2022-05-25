function global_collisions(){
	for (var i=0;i<elements.length;++i){
		var a = elements[i];
		collision(a);
	}
}

function ground(a){
	if((window.innerHeight==a.y+a.h||window.innerHeight<=a.y+a.h)&&(window.innerHeight+a.velocityY>=a.y+a.h)){
			a.y = window.innerHeight - a.h
			a.grounded = 1;
			update(a)
			return;
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
	else if (player.time == 130){
		player.direction = 0;
		player.x = player.x + 72;
		update(player);
	}
	else if (player.time == 150){
		new Audio('sfx/clear.wav').play();
	}
	if (player.time == 161){
		player.velocityY = -10;
		player.grounded = 0;
	}
	else if (player.time > 160){
		player.direction = 1;
		player.velocityX = 2;
		physics();
	}
	if (player.time == 700){
		load("1-1")
	}
}