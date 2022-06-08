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
		load(levels[lvl])
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
	elem.classList.remove("entity");
	elem.style.zIndex = 10;
	elem.hh = true;
	new Audio('sfx/kick.wav').play();
}

function pipe(level,direction,part){
	const player = document.getElementById("player")
	new Audio('sfx/pipe.wav').play();
	player.pipe = direction;
	player.cutscene = true;
	player.pipeDestination = level;
	player.pipeDestination_part = part;
	player.style.zIndex = 0;
	player.count = 0;
}

function flagpole(a,b){
	b.remove();
	a.time = 0;
	a.grounded = 1;
	a.direction = 1;
	document.getElementById("player").cutscene = true;
	a.endstage = true;
	a.velocityX = 0;
	new Audio('sfx/flagpole.wav').play();
}

function kill(element){
	element.hp = 0;
	element.isDead = 1;
	if (element.id != "player"){
		element.remove();
	}
}

function cutscenes(){
	if (player.endstage == true){
		endstage();
	}
	else if (player.pipe == "down"){
		player.y = player.y + 0.8;
		player.velocityX = 0;
		update(player);
		player.count = player.count + 1;
		if (player.count == 200){
			player.pipe = false;
			cutscene = false;
			load(player.pipeDestination,player.pipeDestination_part);
		}
	}
	else if (player.pipe == "right"){
		if (player.count < 75){
			player.velocityX = 2.5;
			player.x = player.x + 0.8;
			update(player);
		}
		else{
			player.velocityX = 0;
		}
		player.count = player.count + 1;
		if (player.count == 200){
			player.pipe = false;
			cutscene = false;
			load(player.pipeDestination,player.pipeDestination_part);
		}
	}
	else if (player.intro == "walk"){
		physics();
		player.velocityX = 2.5;
	}
	else if (player.intro == "pipe"){
		if (player.count < 80){
			player.y = player.y - 0.8;
			player.animation = 0;
			player.count += 1;
			player.grounded = 1;
			update(player);
		}
		else{
			player.y = parseInt(player.y);
			player.style.zIndex = 10;
			player.intro = undefined;
			player.cutscene = false;
		}
	}
	else if (player.grow == true){
		player.count += 1;
		if (player.count > 50){
			player.style.backgroundPositionY = "-128px";
		}
		if (player.count == 100){
			player.style.backgroundPositionY = "-256px";
		}
		if (player.count == 150){
			player.style.backgroundPositionY = "-384px";
		}
		if (player.count == 200){
			player.style.backgroundPositionY = "-512px";
		}
		if (player.count == 250){
			player.cutscene = false;
			player.grow = false;
		}
	}
}


function hit_check(a,e){
	if (e.shelled == true){
		if (e.rolling == true){
			hit(a)
		}
		else{
			new Audio('sfx/kick.wav').play();
			e.rolling = true;
			if (a.x < e.x){
				e.velocityX = 12;
			}
			if (a.x > e.x + e.w/2){
				e.velocityX = -12;
			}
		}
	}
	else{
		hit(a);
	}
}

function powerup(a,b){
	a.h = 128;
	a.style.height = "128px";
	a.y = a.y - 64;
	a.style.background = "url(textures/player/mario_grow.png)";
	a.style.backgroundSize = "64px 512px";
	a.count = 0;
	update(a);
	a.tall = true;
	new Audio('sfx/powerup.wav').play();
	a.grow = true;
	a.cutscene = true;
	b.remove();
}