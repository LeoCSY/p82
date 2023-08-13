canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//crea la variable img_width = 300;

img_height = 100;

var img_image;

//crea la variable img_x = 100;

img_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable con la nueva imagen
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
//establcer el evento de pra keydown


function my_keydown(e)
{
	//crear la variable keyPressed = e.keyCode;
	
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="Presionaste una letra del alfabeto";
			console.log("alphabet key");
		}
		else if(keyPressed >=48 && keyPressed<=57)
		{
			//llamar a la funcion numberkey();
			
			document.getElementById("d1").innerHTML="Presionaste un número";
			console.log("Number key");
		}
		else if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML="Presionaste una flecha";
			console.log("Arrow Key");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27))
		{
			//llamar a la funcion specialkey();
			
			document.getElementById("d1").innerHTML="Presionaste ctrl/esc/alt";
			console.log("special key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="Presionaste un símbolo u otra tecla";
	}
}

function aplhabetkey()
{
		img_image="Alpkey.png";
	add();
}
function numberkey()
{
	//establecer variable img_image="numkey.png";
	
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	//llamar a la funcion add();	
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
