var colors = ["#333", "#fff", "red", "grey"];
var clicked=0;
var paint = false;
// option 1 is to color
// option 2 is to type
var option = 0; 


function generateToolbar(){
	for(var i = 0; i<colors.length; i++){
		// create menu
		var colorpick = document.createElement("div");
		var menu = document.getElementById("menu");
		colorpick.style.background=colors[i];
		colorpick.classList.add("colorpick");
		colorpick.id = "s"+i;
		menu.appendChild(colorpick);
		
		// drawing part
		colorpick.addEventListener("click", selectedColor)
		
	}
	var canvas = document.getElementById("canvas");
		canvas.addEventListener("mousedown", mouseDown);
		canvas.addEventListener("mouseup", mouseUp);
		canvas.addEventListener("mousemove", draw);
	var textOption = document.createElement("div");
	textOption.innerHTML= "T";
	textOption.classList.add("textOption");
	textOption.id = "text-option";
	menu.appendChild(textOption);
	textOption.addEventListener("click", clickType);
	canvas.addEventListener("click", typeText);

}
function clickType(){
			option=2;

}
function typeText(e){
	
	if(option==2){
		

	var canvas = document.getElementById("canvas");
	var input = document.createElement("input");
	input.className = "input";
		input.id = "input";

	var y=e.pageY;
	var x=e.pageX;

	input.style.top= y + "px";
	input.style.left= x + "px";
	canvas.appendChild(input);
	input.focus();

	input.addEventListener("change", addText);
	}

}
function addText(){
	var input = document.getElementById("input");

	var text = document.createElement("div");
	text.style.top=input.style.top;
	text.style.left= input.style.left;
	canvas.appendChild(text);
	text.innerText= input.value;
	text.style.position= "absolute";
	this.remove();
}
function selectedColor(e){
	option=1;
	clicked = e.target.id;

	e.target.classList.add("selected");

}
function mouseDown(){

	paint= true;


}
function mouseUp(){
	paint= false;

}
function draw(e){
	if(paint && option===1){
		var point = document.createElement("div");
		point.style.background = colors[clicked[1]];
		point.style.width = "5px";
		point.style.height = "5px";
		var canvas = document.getElementById("canvas");
		point.classList.add("point");
		var y=e.pageY;
		var x=e.pageX;

		point.style.top= y + "px";
		point.style.left= x + "px";
		canvas.appendChild(point);
	}
	

} 



function init(){
	generateToolbar();
}