var a = document.querySelector("#one");
var b = document.querySelector("#two");
var c = document.querySelector("#reset");
var x = document.querySelector("#p1");
var y = document.querySelector("#p2");
var value1=0;
var value2=0;
var z = document.querySelector(".playing");
var condition = false;
var score = 5;
var inp = document.querySelector("input");

// Function to increment score of p1 by clicking button 1
a.addEventListener ("click", function(){
	if (!condition){
		value1++;
	if(value1===score)
	{
		x.style.color="green";
		condition=true;
	}
	x.textContent=value1;
}
});

// Player two
b.addEventListener ("click", function(){
	if(!condition) {
		value2++;
		if (value2===score) {
			x.style.color="green";
			condition=true;
		}
		y.textContent=value2;
}	
});
function reset() {
	value1=value2=0;
	condition=false;
	y.style.color="black";
	x.style.color= "black";
	x.textContent=value1;
	y.textContent=value2;
}

// Reset button
c.addEventListener ("click", function() {
	reset();
});

inp.addEventListener("change", function(){
	z.textContent = this.value;
	score= Number(this.value);
	reset();
})