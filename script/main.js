window.addEventListener("load", function(){

	setup();
	main();
        load(levels[lvl]);

});

function main(){

	if (player.isDead == false){
		if (player.cutscene != true){
			physics();
			controls();
		}
		else{
			cutscenes();
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