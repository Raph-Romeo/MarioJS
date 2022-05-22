window.addEventListener("load", function(){

	setup();
	main();
        load("1-1");

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