function camera(){
	var xClientRect = document.getElementById("player").getBoundingClientRect().x
	var bodyClientRect = document.body.getBoundingClientRect().x
	var gap = level_length + (bodyClientRect - window.innerWidth);
	if (xClientRect >= window.innerWidth/2 - 64 || gap <= 0){
		if (gap <= 0){
			document.body.style.transform = "translate(" + (bodyClientRect - gap) + "px,0px)";
		}
		else if (gap > 0){
			document.body.style.transform = "translate(" + (bodyClientRect - (xClientRect - window.innerWidth/2 + 64)) + "px,0px)";
		}
	}
}