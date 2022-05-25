function animations(){
	player_animation();
	goomba_animation();
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
			if (parseInt(player.animation + 0.05) > 8 || parseInt(player.animation) < 7){
				player.animation = 7;
			}
			player.animation = player.animation + 0.05;
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
		if (elem.isDead == false){
			elem.animation = elem.animation + 0.05;
			if (elem.animation >= 2){
				elem.animation = 0;
			}
			elem.style.backgroundPositionY = (parseInt(elem.animation) * -64) + "px";
		}
		else{
			elem.animation = elem.animation + 1;
			elem.style.backgroundPositionY = 64 + "px";
			if (elem.animation == 15){
				elem.style.display = "none"
				elem.y = -64
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
		if (block.hit == true && block.animation != -1){
			block.style.background = "url(textures/objects/hblock.png)";
			block.style.backgroundSize = "64px";
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