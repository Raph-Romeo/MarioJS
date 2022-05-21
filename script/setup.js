var elements = document.getElementsByName("element")
var screenSize = window.innerWidth

function setup(){
	for (var i=0;i < elements.length; ++i){
		var element = elements[i];
		element.passengers = [];
		element.isPassenger = 0;
		element.passengerVelocityX = 0;
		element.speed = 6;
		if (element.getBoundingClientRect() + element.getBoundingClientRect().x != 0){
			element.x = Math.round(element.getBoundingClientRect().x);
			element.y = Math.round(element.getBoundingClientRect().y);
		}
		else if (element.x == undefined || element.y == undefined){
			element.x = 0;
			element.y = 0;
		}
		element.h = Math.round(element.clientHeight);
		element.w = Math.round(element.clientWidth);
		element.py = 0; 		//Previous height, important for later when calculating collisions
		element.velocityX = 0;
		element.velocityY = 0;
		element.grounded = false;
		element.moving = 0;
		element.mass = 1;
		element.animation = 0;
		element.bump = false;

		if (element.classList.contains("static")){
			element.grounded = true;
			element.static = true;
			update(element);
		}
		else{
			element.static = false;
			element.bounce = true;
			element.direction = 1;
			element.isDead = false;
			element.hp = 1;
		}
		
		if (element.classList.contains("goomba") || element.classList.contains("koopa")){
			element.moving = 1;
			element.velocityX = -2;
			element.bounce = false;
			element.bump = true;
		}
	}
}