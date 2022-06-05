function physics(){
	for (var i=0;i < elements.length; ++i){
		var element = elements[i];
		if (!element.static){
			if ((( - element.x < document.body.getBoundingClientRect().x + 64) && (- element.x > - window.innerWidth + document.body.getBoundingClientRect().x)) || (element.rolling == true)){ 
				if (element.grounded){
					element.velocityY = 0;
				}
				else{
					++element.velocityY
					if (element.y > window.innerHeight){
						element.hp = 0;
						element.isDead = 1;
						if (element.id != "player"){
							element.remove();
						}
					}
				}
				if ((element.velocityY != 0 || element.velocityX + element.passengerVelocityX != 0)){
					if (element.moving == 0){
						element.velocityX = element.velocityX * 0.9;
						if((element.velocityX<0.1 && element.velocityX>0) ||(element.velocityX<0 && element.velocityX>-0.1)){
							element.velocityX=0;
						}
					}
					if (element.isPassenger == 0){ 
						element.passengerVelocityX = element.passengerVelocityX * 0.9;
						if((element.passengerVelocityX<0.1 && element.passengerVelocityX>0) ||(element.passengerVelocityX<0 && element.passengerVelocityX>-0.1)){
							element.passengerVelocityX=0;
						}
					}
					element.py = element.y
					element.y = element.y + element.velocityY;
					element.x = element.x + element.velocityX + element.passengerVelocityX;
					collision(element);
				}
				if (element.rolling != true){
					passengers(element);
				}
			}
		}
	}
}

function collision(a){
	var ny = a.y
	a.grounded = 0;
	a.isPassenger = 0;
	for (var i=0;i<elements.length; ++i){
		var b = elements[i];
							//__________________________
							//ENTITY -> BLOCK COLLISIONS:
							//__________________________

		if (b.static){
			if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(b.y==a.y+a.h||b.y<=a.y+a.h)&&(b.y+a.velocityY>=a.y+a.h)&&(a.velocityY>=0)){
				a.y = b.y - a.h;
				ny = a.y;
				a.grounded = 1;
				a.velocityY = 0;
				if (b.hit == true){
					if (a.id != "player"){
						kick(a);
					}
				}
				else if (b.tunnel == true){
					if (a.crouch == true){
						if (a.x - 8 - b.x > 0 && b.x + b.w - a.x - a.w - 8 >0){
							if (b.classList.contains("pipe")){
								pipe(b.destination,b.direction);
							}
						}
					}
				}
			}
			else if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(a.y+a.h-b.y>0)&&(b.y+b.h-a.y>0)){

				if (a.id == "player"){
					if (b.classList.contains('pole_collision')){
						flagpole(a,b);
					}
					if (b.classList.contains("lpipe")){
						if (b.tunnel == true){
							pipe(b.destination,b.direction);
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

							//____________________________
							//
							//ENTITY <-> ENTITY COLLISIONS:
							//____________________________

		else if (a != b){
			if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(b.y==a.y+a.h||b.y<=a.y+a.h)&&(b.y+a.velocityY>=a.y+a.h)&&(a.velocityY>=0)){
				a.y = b.y - a.h;
				ny = a.y;
				a.grounded = 1;
				if (!b.passengers.includes(a) && a.isPassenger == 0 && !b.static){
					b.passengers.push(a);
					a.isPassenger = 1;
				}
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


function passengers(a){
	for (var i=0;i<a.passengers.length;++i){
		var passenger = a.passengers[i];
		passenger.passengerVelocityX = a.velocityX + a.passengerVelocityX;
		if (passenger.y + passenger.h != a.y || !((a.x+a.w-passenger.x>0)&&(passenger.x+passenger.w-a.x>0))){
			a.passengers.splice(passenger);
			collision(passenger);
			passenger.isPassenger = 0;
		}
	}
}


function update(a){
	a.style.transform = "translate(" + a.x + "px," + a.y + "px)";
}