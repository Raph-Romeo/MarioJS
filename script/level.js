var level_length = 0
function load(level,pipe=0){
	const body = document.body;
	body.style.transform = ""
	body.innerHTML = '<div name="element" id="player"></div>'
	player.animation = 0;
	window.scrollTo(0,0)

	if (level == "elmir"){

		const player = document.getElementById("player");
		player.x = 128;
		player.y = window.innerHeight - 128 - 64;
		player.style.transform = "translate(" + player.x + "px," + player.y + "px)"
		document.body.style.background = "black";

		setObject("groundcave",0,window.innerHeight - 128,300 * 64,128);
		setObject("koopa",512,window.innerHeight - 224);
		for (var i = 0;i<200;++i){
			setObject("goomba",(i+12)*128,window.innerHeight - 128 - 64);
		}
		body.innerHTML += '<h1 style="white-space: nowrap;color:#AAA;font-family:tahoma;font-weight:1;font-size:100px;position:absolute;bottom:128px;padding:0;z-index:-1">ELMIR BATJARI LE TRYHARD.</h1>';
		level_length = 300 * 64;
	}
	if (level == "debug"){

		const player = document.getElementById("player");
		player.x = 128;
		player.y = window.innerHeight - 128 - 64;
		player.style.transform = "translate(" + player.x + "px," + player.y + "px)"
		document.body.style.background = "black";

		setObject("groundcave",0,window.innerHeight - 128,300 * 64,128);
		setObject("koopa",512,window.innerHeight - 224);
		setObject("pipe",28*64,window.innerHeight - 256,128,128);
		body.innerHTML += '<h1 style="white-space: nowrap;color:#AAA;font-family:tahoma;font-weight:1;font-size:100px;position:absolute;bottom:128px;padding:0;z-index:-1">DEBUG LEVEL - KOOPA TEST </h1>';
		level_length = 300 * 64;
	}


//LEVEL 1-1-------------------------------------------

	if (level == "1-1"){

		const player = document.getElementById("player");
		if (pipe == 0){
			player.x = 128;
			player.y = window.innerHeight - 128 - 64;
		}
		if (pipe == 1){
			player.x = 163.5 * 64;
			player.y = window.innerHeight - 128 - 192;
		}
		player.style.transform = "translate(" + player.x + "px," + player.y + "px)"
		document.body.style.background = "#9494FF";

		setObject("ground",0,window.innerHeight - 128,69 * 64,128);
		setObject("mblock",134*64,window.innerHeight - 192,64,64);
		setObject("mblock",135*64,window.innerHeight - 256,64,128);
		setObject("mblock",136*64,window.innerHeight - 320,64,192);
		setObject("mblock",137*64,window.innerHeight - 384,64,256);

		setObject("mblock",140*64,window.innerHeight - 384,64,256);
		setObject("mblock",141*64,window.innerHeight - 320,64,192);
		setObject("mblock",142*64,window.innerHeight - 256,64,128);
		setObject("mblock",143*64,window.innerHeight - 192,64,64);

		setObject("mblock",148*64,window.innerHeight - 192,64,64);
		setObject("mblock",149*64,window.innerHeight - 256,64,128);
		setObject("mblock",150*64,window.innerHeight - 320,64,192);
		setObject("mblock",151*64,window.innerHeight - 384,64,256);
		setObject("mblock",152*64,window.innerHeight - 384,64,256);

		setObject("mblock",155*64,window.innerHeight - 384,64,256);
		setObject("mblock",156*64,window.innerHeight - 320,64,192);
		setObject("mblock",157*64,window.innerHeight - 256,64,128);
		setObject("mblock",158*64,window.innerHeight - 192,64,64);
		setObject("ground",71 * 64,window.innerHeight - 128,15 * 64,128);
                setObject("ground",89 * 64,window.innerHeight - 128,64 * 64,128);
                setObject("ground",155 * 64,window.innerHeight - 128,56 * 64,128);
		setObject("background",0,window.innerHeight - 176*4 - 128,211 * 64);
		setObject("qblock",16*64,window.innerHeight - 384);
		setObject("block",20*64,window.innerHeight - 384);
		setObject("block",21*64,window.innerHeight - 384);
		setObject("qblock",22*64,window.innerHeight - 384);
		setObject("block",23*64,window.innerHeight - 384);
		setObject("block",24*64,window.innerHeight - 384);
		setObject("qblock",22*64,window.innerHeight - 640);
		setObject("pipe",28*64,window.innerHeight - 256,128,128);
		setObject("pipe",38*64,window.innerHeight - 320,128,192);
		setObject("pipe",46*64,window.innerHeight - 384,128,256);
		setObject("pipe",56*64,window.innerHeight - 384,128,256);
		setObject("block",77*64,window.innerHeight - 384);
		setObject("qblock",78*64,window.innerHeight - 384);
		setObject("block",79*64,window.innerHeight - 384);
		setObject("block",80*64,window.innerHeight - 640);
		setObject("goomba",80*64,window.innerHeight - 640 - 64);
		setObject("goomba",82*64,window.innerHeight - 640 - 64);
		setObject("block",81*64,window.innerHeight - 640);
		setObject("block",82*64,window.innerHeight - 640);
		setObject("block",83*64,window.innerHeight - 640);
		setObject("block",84*64,window.innerHeight - 640);
		setObject("block",85*64,window.innerHeight - 640);
		setObject("block",86*64,window.innerHeight - 640);
		setObject("block",87*64,window.innerHeight - 640);
		setObject("block",91*64,window.innerHeight - 640);
		setObject("block",92*64,window.innerHeight - 640);
		setObject("block",93*64,window.innerHeight - 640);
		setObject("qblock",94*64,window.innerHeight - 640);
		setObject("block",94*64,window.innerHeight - 384);
		setObject("goomba",97*64,window.innerHeight - 192);
		setObject("goomba",98.5*64,window.innerHeight - 192);
		setObject("koopa",106*64,window.innerHeight - 192 - 32);
		setObject("goomba",117.5*64,window.innerHeight - 192);
		setObject("goomba",119.5*64,window.innerHeight - 192);
		setObject("goomba",121*64,window.innerHeight - 192);
		setObject("goomba",121.5*64,window.innerHeight - 192);
		setObject("block",100*64,window.innerHeight - 384);
		setObject("block",101*64,window.innerHeight - 384);
		setObject("qblock",106*64,window.innerHeight - 384);
		setObject("qblock",109*64,window.innerHeight - 384);
		setObject("qblock",109*64,window.innerHeight - 640);
		setObject("qblock",112*64,window.innerHeight - 384);
		setObject("goomba",22*64,window.innerHeight - 192);
		setObject("goomba",40*64,window.innerHeight - 192);
		setObject("goomba",51*64,window.innerHeight - 192);
		setObject("goomba",52.5*64,window.innerHeight - 192);
                setObject("block",118*64,window.innerHeight - 384);
		setObject("block",121*64,window.innerHeight - 640);
		setObject("block",122*64,window.innerHeight - 640);
		setObject("block",123*64,window.innerHeight - 640);
		setObject("block",128*64,window.innerHeight - 640);
		setObject("qblock",129*64,window.innerHeight - 640);
		setObject("qblock",130*64,window.innerHeight - 640);
		setObject("block",131*64,window.innerHeight - 640);
		setObject("block",129*64,window.innerHeight - 384);
		setObject("block",130*64,window.innerHeight - 384);



		setObject("pipe",163*64,window.innerHeight - 256,128,128);
		setObject("pipe",179*64,window.innerHeight - 256,128,128);

		setObject("block",168*64,window.innerHeight - 384);
		setObject("block",169*64,window.innerHeight - 384);
		setObject("qblock",170*64,window.innerHeight - 384); //HAS TO BE QUESTION MARK
		setObject("block",171*64,window.innerHeight - 384);

		setObject("goomba",174*64,window.innerHeight - 192);
		setObject("goomba",175.5*64,window.innerHeight - 192);

		setObject("mblock",181*64,window.innerHeight - 192,64,64);
		setObject("mblock",182*64,window.innerHeight - 256,64,128);
		setObject("mblock",183*64,window.innerHeight - 320,64,192);
		setObject("mblock",184*64,window.innerHeight - 384,64,256);
		setObject("mblock",185*64,window.innerHeight - 448,64,320);
		setObject("mblock",186*64,window.innerHeight - 512,64,384);
		setObject("mblock",187*64,window.innerHeight - 576,64,448);
		setObject("mblock",188*64,window.innerHeight - 640,64,512);
		setObject("mblock",189*64,window.innerHeight - 640,64,512);

		setObject("mblock",198*64,window.innerHeight - 192,64,64);
		setObject("flag",198*64,window.innerHeight - 128 - 11*64);
		setObject("pole",198*64,window.innerHeight - 128 - 12*64);

		setObject("castle",202*64,window.innerHeight - 128 - 64*5);
		setObject("mblock",206*64,window.innerHeight - 192,64,64);

		level_length = 211 * 64;

	}

	if (level == "1-1b"){

		const player = document.getElementById("player");
		player.x = 96;
		player.y = window.innerHeight - 128 - 11 * 64;
		player.style.transform = "translate(" + player.x + "px," + player.y + "px)";
		document.body.style.background = "black";

		setObject("groundcave",0,window.innerHeight - 128,16 * 64,128);
		setObject("blockcave",0*64,window.innerHeight - 128 - 11*64,64,11*64);
		setObject("blockcave",4*64,window.innerHeight - 128 - 3*64,7*64,3*64);
		setObject("blockcave",4*64,window.innerHeight - 128 - 11*64,7*64,1*64);
		setObject("lpipe",13*64,window.innerHeight - 128 - 2*64,3*64,2*64);
		setObject("hpipe",15*64,window.innerHeight - 128 - 11*64,64,9*64);
		level_length = 16 * 64;
	}

//LEVEL 1-2-------------------------------------------

	if (level == "1-2a"){
		const player = document.getElementById("player");
		if (pipe == 0){
			player.x = 128;
			player.y = window.innerHeight - 128 - 64;
		}
		player.style.transform = "translate(" + player.x + "px," + player.y + "px)"
		document.body.style.background = "#9494FF";
		setObject("background",0,window.innerHeight - 176*4 - 128,16 * 64);
		setObject("castle1",0,window.innerHeight - 128 - 64*5);
		setObject("pipe",12*64,window.innerHeight - 384,128,256);
		setObject("lpipe",10*64,window.innerHeight - 128 - 2*64,3*64,2*64);
		setObject("ground",0,window.innerHeight - 128,16 * 64,128);
		level_length = 16 * 64;
	}

	if (level == "1-2"){

		const player = document.getElementById("player");
		player.x = 96;
		player.y = window.innerHeight - 128 - 11 * 64;
		player.style.transform = "translate(" + player.x + "px," + player.y + "px)";
		document.body.style.background = "black";

		setObject("qblockcave",10*64,window.innerHeight - 384);
		setObject("qblockcave",11*64,window.innerHeight - 384);
		setObject("qblockcave",12*64,window.innerHeight - 384);
		setObject("qblockcave",13*64,window.innerHeight - 384);
		setObject("qblockcave",14*64,window.innerHeight - 384);

		setObject("groundcave",0,window.innerHeight - 128,192 * 64,128);
		setObject("blockcave",0*64,window.innerHeight - 128 - 11*64,64,11*64);
		setObject("blockcave",6*64,window.innerHeight - 128 - 11*64,7*64,1*64);
		level_length = 192 * 64;
	}

//LEVEL 1-3-------------------------------------------
//LEVEL 1-4-------------------------------------------

	setup()	
}

function setObject(name,x,y,w=0,h=0) {
	const body = document.body;
	if (name == "ground"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:calc(100vh - ' + h + 'px)' +'" class="ground static" name="element"></div>';
	}
	if (name == "groundcave"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:calc(100vh - ' + h + 'px)' +'" class="groundcave static" name="element"></div>';
	}
	if (name == "block"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:64px" class="static block" name="element"></div>';
	}
	if (name == "blockcave"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:' + h + 'px" class="blockcave static" name="element"></div>';
	}
	if (name == "hpipe"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:' + h + 'px" class="hpipe static" name="element"></div>';
	}
	if (name == "qblock"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:64px" class="static qblock" name="element"></div>';
	}
	if (name == "qblockcave"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:64px" class="static qblock qblockcave" name="element"></div>';
	}
	if (name == "pipe"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:' + h + 'px" class="pipe static" name="element"></div>';
	}
	if (name == "background"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;position:absolute;" class="background"></div>';
	}
	if (name == "goomba"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:64px;position:absolute;" class="goomba hostile" name="element"></div>';
	}
	if (name == "mblock"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:' + h + 'px" class="mblock static" name="element"></div>';
	}
	if (name == "mushroom"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:64px;position:absolute;" class="mushroom" name="element"></div>';
	}
	if (name == "lpipe"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:' + w + 'px;height:' + h + 'px" class="lpipe static" name="element"></div>';
	}
	if (name == "flag"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:calc(10 * 64px);position:absolute;" class="pole static"></div>';
		body.innerHTML += '<div style="transform:translate(' + (x - 32) + 'px,' + (window.innerHeight - 128 - 10*64) + 'px);width:64px;height:64px;position:absolute;" class="flag static"></div>';
	}
	if (name == "pole"){
		body.innerHTML += '<div style="transform:translate(' + (x + 28) + 'px,' + y + 'px);width:8px;height:calc(12 * 64px);position:absolute;" class="static pole_collision" name="element"></div>';
	}
	if (name == "castle"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:calc(5*64px);height:calc(5*64px)" class="static castle"></div>';
		body.innerHTML += '<div style="transform:translate(' + (x + 192) + 'px,' + y + 'px);width:calc(2*64px);height:calc(5*64px);z-index:10;background-position-x:right" class="static castle"></div>';
	}
	if (name == "castle1"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:calc(5*64px);height:calc(5*64px)" class="static castle"></div>';
	}
	if (name == "koopa"){
		body.innerHTML += '<div style="transform:translate(' + x + 'px,' + y + 'px);width:64px;height:96px;position:absolute;" class="koopa hostile" name="element"></div>';
	}
}