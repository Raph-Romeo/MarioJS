function animations(){
	player_animation();
	goomba_animation();
	koopa_animation();
	block_animation();
}


function player_animation(){
	var player = document.getElementById("player");
	if (player.endstage != true){
		if ((!player.grounded && player.velocityX > 0) || ((!player.grounded && player.velocityX == 0)) && player.direction == 1){
			player.animation = 5;
		}
		else if ((!player.grounded && player.velocityX < 0) || ((!player.grounded && player.velocityX == 0)) && player.direction == 0){
			player.animation = 19;
		}
		else{
			if (player.velocityX != 0){
				if (player.animation + 0.02 * pos(player.velocityX) >= 4 || player.animation < 1){
					player.animation = 1;
				}
				player.animation = player.animation + 0.02 * pos(player.velocityX);
				if (player.direction == 0){
					player.animation = player.animation + 14;
				}
				if (player.direction == 1 && player.velocityX < -0.5){
					player.animation = 4;
				}
				if (player.direction == 0 && player.velocityX > 0.5){
					player.animation = 18;
				}
			}
			else{ 
				player.animation = 0;
				if (player.direction == 0){
					player.animation = player.animation + 14;
				}
			}
		}
	}
	else{
		if (player.velocityX == 0 && player.velocityY > 1){
			if (parseInt(player.animation + 0.1) > 8 || parseInt(player.animation) < 7){
				player.animation = 7;
			}
			player.animation = player.animation + 0.1;
		}
		else if (player.velocityX == 0){
			player.animation = 7;
		}
		else if (player.velocityX != 0){
			if (player.animation + 0.02 * pos(player.velocityX) >= 4 || player.animation < 1){
				player.animation = 1;
			}
			player.animation = player.animation + 0.02 * pos(player.velocityX);
			if (player.direction == 0){
				player.animation = player.animation + 14;
			}
			if (player.direction == 1 && player.velocityX < -0.5){
				player.animation = 4;
			}
			if (player.direction == 0 && player.velocityX > 0.5){
				player.animation = 18;
			}
		}
		if (player.direction == 0){
			player.animation = player.animation + 14;
		}
	}
	player.style.backgroundPositionY = - (parseInt(player.animation) * 64) + "px";
	if (player.animation >= 14){
		player.animation = player.animation - 14
	}
}

function goomba_animation(){
	var goombas = document.getElementsByClassName("goomba");
	for (var i=0;i<goombas.length;++i){
		var elem = goombas[i];
		if (( - elem.x < document.body.getBoundingClientRect().x + 64) && (- elem.x > - window.innerWidth + document.body.getBoundingClientRect().x)){
			if (elem.isDead == false && elem.hh != true){
				elem.animation = elem.animation + 0.05;
				if (elem.animation >= 2){
					elem.animation = 0;
				}
				elem.style.backgroundPositionY = (parseInt(elem.animation) * -64) + "px";
			}
			else if (elem.hh != true){
				elem.animation = elem.animation + 1;
				elem.setAttribute('name', '')
				elem.style.backgroundPositionY = 64 + "px";
				if (elem.animation == 15){
					elem.style.display = "none";
					elem.remove();
				}
			}
			if (elem.hh == true){
				elem.y = elem.y + elem.velocityY;
				elem.x = elem.x + elem.velocityX;
				elem.velocityY = elem.velocityY + 1;
				elem.setAttribute('name', '')
				elem.style.transform = "translate(" + elem.x + "px," + elem.y + "px) rotate(180deg)";
				if (elem.y > window.innerHeight){
					elem.remove();
				}
			}
		}
	}
}

function koopa_animation(){
	var koopas = document.getElementsByClassName("koopa");
	for (var i=0;i<koopas.length;++i){
		var elem = koopas[i];
		if (( - elem.x < document.body.getBoundingClientRect().x + 64) && (- elem.x > - window.innerWidth + document.body.getBoundingClientRect().x)){
			if (elem.isDead == false && elem.hh != true){
				elem.animation = elem.animation + 0.05;
				if (elem.animation >= 2 && elem.velocityX < 0){
					elem.animation = 0;
				}
				if (elem.velocityX > 0){
					if (elem.animation >= 4){
						elem.animation = 0;
					}
					if (elem.animation < 2){
						elem.animation = 2;
					}
				}
				elem.style.backgroundPositionY = (parseInt(elem.animation) * -96) + "px";
			}
			else if (elem.hh != true){
				elem.animation = elem.animation + 1;
				if (elem.animation == 1){
					elem.y = elem.y + 40;
					elem.h = 56;
					elem.style.height = "64px";
					elem.style.backgroundPosition = "-64px 0px";
					elem.velocityX = 0;
					elem.shelled = true;
					update(elem);
				}
				if (elem.rolling == true){
					if (elem.animation > 256){
						elem.y = elem.y + 4;
						elem.h = 56;
						elem.style.height = "64px";
						elem.style.backgroundPosition = "-64px 0px";
						elem.shelled = true;
						update(elem);
					}
					elem.animation = 2;
				}
				if (elem.animation == 256){
					elem.style.backgroundPosition = "-64px -64px";
					elem.y = elem.y - 4;
					elem.h = 60;
					elem.style.height = "64px";
					update(elem);
				}
				if (elem.animation == 320){
					elem.style.backgroundPositionY = "-96px";
					elem.style.backgroundPositionX = "0px";
					elem.velocityX = -1.5;
					elem.isDead = false;
					elem.shelled = false;
					elem.y = elem.y - 36;
					update(elem);
					elem.style.height = "96px";
					elem.h = 96;
				}
			}
			if (elem.hh == true){
				elem.h = 54;
				elem.style.height = "64px";
				elem.style.backgroundPosition = "-64px 0px";
				elem.y = elem.y + elem.velocityY;
				elem.x = elem.x + elem.velocityX;
				elem.velocityY = elem.velocityY + 1;
				elem.style.transform = "translate(" + elem.x + "px," + elem.y + "px) rotate(180deg)";
				if (elem.y > window.innerHeight){
					elem.remove();
				}
			}
		}
	}
}

function block_animation(){
	var blocks = document.getElementsByClassName("block");
	for (var i=0;i<blocks.length;++i){
		var block = blocks[i];
		if (block.hit == true){
			++block.animation;
			if (block.animation <= 8){
				block.y = block.y - 2.5;
				update(block);
			}
			if (block.animation > 8){
				block.y = block.y + 2.5;
				update(block);
			}
			if (block.animation == 16){
				block.animation = 0;
				block.hit = false;
			}
		}
	}
	blocks = document.getElementsByClassName("qblock");
	for (var i=0;i<blocks.length;++i){
		block = blocks[i];
		if (block.hit == true){
			block.style.backgroundPositionY = "64px";
			if (block.animation == 0){
				if (block.id == "c"){
					new Audio('sfx/coin.wav').play();
				}
				if (block.id == "s"){
					new Audio('sfx/powerup-appear.wav').play();
				}
				if (block.id == "u"){
					console.log("1up");
				}
			}
			++block.animation;
			if (block.animation <= 8){
				block.y = block.y - 2.5;
				update(block);
			}
			if (block.animation > 8){
				block.y = block.y + 2.5;
				update(block);
			}
			if (block.animation == 16){
				block.animation = -1;
				block.hit = false;
			}
		}
	}
}