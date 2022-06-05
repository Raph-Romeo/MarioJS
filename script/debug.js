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

function godmode(){
	player.isDead = false;
	setTimeout(godmode, 10);
}

function pipe(level,direction){
	var player = document.getElementById("player")
	new Audio('sfx/pipe.wav').play();
	player.pipe = direction;
	player.cutscene = true;
	player.pipeDestination = level;
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