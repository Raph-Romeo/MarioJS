window.addEventListener("load", function(){

	setup();
	main();
        load("1-1");

});

function main(){

	if (document.getElementById("player").isDead == false){
		physics();
		controls();
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