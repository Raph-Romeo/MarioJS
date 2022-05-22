window.addEventListener("load", function(){

	setup();
	main();
        load("debug");

});

function main(){

	if (document.getElementById("player").isDead == false){
		if (player.endstage != true){
			physics();
			controls();
		}
		else{
			endstage();
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