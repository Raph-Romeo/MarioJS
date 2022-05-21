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