function physics(){
	for (var i=0;i < elements.length; ++i){
		var element = elements[i];
		if (( - element.x < document.body.getBoundingClientRect().x + 64) && (- element.x > - window.innerWidth + document.body.getBoundingClientRect().x)){ 
			if (element.grounded){
				element.velocityY = 0;
			}
			else{
				++element.velocityY
			}
			if (!element.static && (element.velocityY != 0 || element.velocityX + element.passengerVelocityX != 0)){
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
				if (element.y > window.innerHeight){
					element.hp = 0;
					element.isDead = 1;
					if (element.id != "player"){
						element.remove();
					}
				}
				element.x = element.x + element.velocityX + element.passengerVelocityX;
				update(element);
				collision(element);
			}
			if (!element.static){
				passengers(element);
			}
		}
	}
}

function collision(a){
	a.grounded = 0;
	a.isPassenger = 0;
	for (var i=0;i<elements.length; ++i){
		var b = elements[i];
		if (a != b){
			if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(b.y==a.y+a.h||b.y<=a.y+a.h)&&(b.y+a.velocityY>=a.y+a.h)&&(a.velocityY>=0)){
				a.y= b.y - a.h;
				a.grounded = 1;
				if (!b.passengers.includes(a) && a.isPassenger == 0 && !b.static){
					b.passengers.push(a);
					a.isPassenger = 1;
				}
				if (b.bump){
					a.velocityY = (- 2*a.velocityY)/4;
					a.grounded = 0;
					if (b.isDead == false){
						stomp(b)
					}
				}
				else{
					a.velocityY = 0;
				}
				if (b.hit == true){
					if (a.id != "player"){
						kick(a);
					}
				}
				update(a);
			}
			else if((a.x+a.w-b.x>0)&&(b.x+b.w-a.x>0)&&(a.y+a.h-b.y>0)&&(b.y+b.h-a.y>0)){

				//CHECK FOR SPECIAL COLLISIONS_____________________________
				if ((a.id == "player" && b.classList.contains("goomba")) || (b.id == "player" && a.classList.contains("goomba"))){
					var player = document.getElementById("player");
					if (player.hp>1){
						player.hp = player.hp - 1;
					}
					else{
						player.isDead = true;
					}
				}
				if (a.id == "player" && b.classList.contains('pole_collision')){
					b.remove();
					a.time = 0;
					a.grounded = 1;
					a.direction = 1;
					a.endstage = true;
					a.velocityX = 0;
					new Audio('sfx/flagpole.wav').play();
				}
				//END SPECIAL COLLISIONS_____________________________


				if ((a.py>=b.y+b.h)&&(a.velocityY<0)){
					a.y = b.y + b.h;
					a.velocityY = 0;
					if (b.classList.contains("block") || b.classList.contains("qblock")){
						b.hit = true;
					}
					update(a);
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
						a.velocityX = - a.velocityX;
					}
					update(a);
				}
			}
		}
	}
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