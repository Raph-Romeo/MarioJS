var elements = document.getElementsByName("element");
var entities = document.getElementsByClassName("entity");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const levels = ["1-1","1-2","1-3","1-4"];
var lvl = 0;

function setup(){
	for (var i=0;i < elements.length; ++i){
		var element = elements[i];
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
		element.py = 0; 		//Previous height, important when calculating collisions from under another element
		element.velocityX = 0;
		element.velocityY = 0;
		element.grounded = false;
		element.moving = 0;
		element.animation = 0;
		element.bump = false;

		if (element.classList.contains("static")){
			element.grounded = true;
			element.static = true;
			update(element);
			if (element.classList.contains("pipe") || element.classList.contains("lpipe")){
				if (element.id != "0|0|0"){
					element.tunnel = true;
					element.de = element.id.split("|")[0];
					element.di = element.id.split("|")[1];
					element.pa = element.id.split("|")[2];
				}
				element.removeAttribute("id");
			}
			else if(element.classList.contains("qblock")){
				if (element.id == "c"){
					element.inside = "c";
				}
				if (element.id == "s"){
					element.inside = "s";
				}
				if (element.id == "u"){
					element.inside = "u";
				}
				element.removeAttribute("id");
			}
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
			element.velocityX = -1.5;
			element.bounce = false;
			element.bump = true;
		}
		if (element.id == "player"){
			element.w = 48;
			if (typeof element.attributes.intro !== 'undefined'){
				if(element.attributes.intro.value == "walk"){
					element.cutscene = true;
					element.intro = "walk";
				}
				if(element.attributes.intro.value == "pipe"){
					element.cutscene = true;
					element.count = 0;
					element.intro = "pipe";
				}
			}
		}
	}
}