var colors = ["#333", "#fff", "red", "grey"];
var clicked=0;
var paint=false;
function generateColors(){
	for(var i = 0; i<colors.length; i++){
		var colorpick = document.createElement("div");
		var menu = document.getElementById("menu");
		colorpick.style.background=colors[i];
		colorpick.classList.add("colorpick");
		colorpick.id = "s"+i;

		menu.appendChild(colorpick);
		colorpick.addEventListener("click", selectedColor)

		var canvas = document.getElementById("canvas");
				canvas.addEventListener("mousedown", mouseDown);
		canvas.addEventListener("mouseup", mouseUp);


		canvas.addEventListener("mousemove", draw);
	}
}
function selectedColor(e){
	clicked = e.target.id;
	console.log(clicked);
	e.target.classList.add("selected");

}
function mouseDown(){
	paint= true;
}
function mouseUp(){
	paint= false;
}
function draw(e){
	if(paint){
	var point = document.createElement("div");
	point.style.background = colors[clicked[1]];
	console.log(point);
	point.style.width = "5px";
	point.style.height = "5px";
	var canvas = document.getElementById("canvas");
	point.classList.add("point");
	var y=e.pageY;
	var x=e.pageX;
	console.log(y);
	console.log(x);
	point.style.top= y + "px";
	point.style.left= x + "px";
	canvas.appendChild(point);
	}
} 
function init(){
	generateColors();
}