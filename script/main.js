window.addEventListener("load", function(){

	setup();
	main();
	speedrun()
        load(levels[lvl]);

});

function main(){

	if (player.isDead == false){
		if (player.cutscene != true){
			physics();
			controls();
		}
		else{
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
				player.x = player.x + 0.8;
				player.velocityX = 2;
				update(player);
				player.count = player.count + 1;
				if (player.count == 200){
					player.pipe = false;
					cutscene = false;
					load(player.pipeDestination,player.pipeDestination_part);
				}
			}
			else if (player.intro == true){
				physics();
				player.velocityX = 2;
			}
		}
		animations();
		if (level_length > window.innerWidth){
        		camera();
		}
	}
	else{
		death();
	}
	setTimeout(main,10);
}