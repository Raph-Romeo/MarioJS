function physics(){
	for (var i=0;i < entities.length; ++i){
		var element = entities[i];
		if ((( - element.x < document.body.getBoundingClientRect().x + 64) && (- element.x > - window.innerWidth + document.body.getBoundingClientRect().x)) || (element.rolling == true)){ 
			if (!element.grounded){
				++element.velocityY;
				if (element.y > screenHeight){
					kill(element);
				}
			}
			if (element.velocityY != 0 || element.velocityX){
				if (element.moving == 0){
					element.velocityX = element.velocityX * 0.9;
					if(pos(element.velocityX) < 0.1){
						element.velocityX=0;
					}
				}
				element.py = element.y
				element.y = element.y + element.velocityY;
				element.x = element.x + element.velocityX;
				collision(element);
				}
			}
		}
	}

function collision(a){
	var ny = a.y;
	a.grounded = 0;
	a.isPassenger = 0;
	for (var i=0;i<elements.length; ++i){
		var b = elements[i];
		//ENTITY -> BLOCK
		if (b.static){
			if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(b.y==a.y+a.h||b.y<=a.y+a.h)&&(b.y+a.velocityY>=a.y+a.h)&&(a.velocityY>=0)){
				a.y = b.y - a.h;
				ny = a.y;
				a.grounded = 1;
				a.velocityY = 0;
				if (a.id == "player"){
					if (b.tunnel == true){
						if (a.crouch == true){
							if (a.x - 8 - b.x > 0 && b.x + b.w - a.x - a.w - 8 >0){
								if (b.classList.contains("pipe")){
									pipe(b.de,b.di,b.pa);
								}
							}
						}
					}
				}
				else if (b.hit == true){
					kick(a);
				}
			}
			else if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(a.y+a.h-b.y>0)&&(b.y+b.h-a.y>0)){

				if (a.id == "player"){
					if (b.classList.contains('pole_collision')){
						flagpole(a,b);
					}
					if (b.classList.contains("lpipe")){
						if (b.tunnel == true){
							if (a.grounded == 1){
								pipe(b.de,b.di,b.pa);
							}
						}
					}
				}

				if ((a.py>=b.y+b.h)&&(a.velocityY<0)){
					if (b.classList.contains("block") || b.classList.contains("qblock")){
						if (b.animation != -1){
							b.hit = true;
						}
					}
					a.velocityY = -0.1;
					ny = b.y + b.h;
				}
				else if((a.y-a.velocityY+a.h-b.y>0)&&(b.y+b.h-a.y-a.velocityY>0)){
					if (a.x < b.x){
						a.x = b.x - a.w;
					}
					else if(a.x > b.x){
						a.x = b.x + b.w;
					}
					if (a.bounce){
						a.velocityX = 0;
					}
					else{
						if (a.rolling == true){
							new Audio('sfx/bump.wav').play();
						}
						a.velocityX = - a.velocityX;
					}
				}
			}
		}
		//ENTITY -> ENTITY
		else if (a != b){
			if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(b.y==a.y+a.h||b.y<=a.y+a.h)&&(b.y+a.velocityY>=a.y+a.h)&&(a.velocityY>=0)){
				a.y = b.y - a.h;
				ny = a.y;
				a.grounded = 1;
				if (b.bump){
					if (b.shelled == true){
						new Audio('sfx/kick.wav').play();
						a.velocityY = - a.velocityY/2;
						a.grounded = 0;
						if (b.rolling == true){
							b.velocityX = 0;
							b.rolling = false;
						}
						else{
							b.rolling = true;
							if (a.x < b.x + b.w/2){
								b.velocityX = 12;
							}
							else if (a.x > b.x + b.w/2){
								b.velocityX = -12;
							}
						}
					}
					else{
						a.velocityY = - a.velocityY/2;
						a.grounded = 0;
						if (b.isDead == false){
							stomp(b)
						}
					}
				}
				else{
					a.velocityY = 0;
				}
			}
			else if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(a.y+a.h-b.y>0)&&(b.y+b.h-a.y>0)){

				if ((a.id == "player" || b.id == "player")){
					if(b.classList.contains("hostile")){
						var e = b;
					}
					else{
						var e = a;
					}
					var player = document.getElementById("player");
					if (e.shelled == true){
						if (e.rolling == true){
							hit(player)
						}
						else{
							new Audio('sfx/kick.wav').play();
							e.rolling = true;
							if (player.x < e.x){
								e.velocityX = 12;
							}
							if (player.x > e.x + e.w/2){
								e.velocityX = -12;
							}
						}
					}
					else{
						hit(player)
					}
				}
				else if (a.rolling == true){
					new Audio('sfx/kick.wav').play();
					kick(b);
				}
				else{
					a.velocityX = - a.velocityX
				}

			}
		}
	}
	a.y = ny;
	update(a);
}


function update(a){
	a.style.transform = "translate(" + a.x + "px," + a.y + "px)";
}