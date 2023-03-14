
var btn=document.getElementById("btn");
var numPtag=document.getElementById("num");
var res=document.getElementById("response");
var inputValue=document.getElementById("guess").value;
function  randomNumGenerator(){
	randomNum=Math.floor(Math.random()*41)-20;
	document.getElementById("num").innerText=randomNum;
	guessNum();
	print();
}
	function guessNum(){
		input=Number(document.getElementById("guess").value);
	}
function print(){
	if(Math.abs(randomNum-input)<=5){
		document.getElementById("response").innerText="Hot";
	}
	else{
		document.getElementById("response").innerHTML="Cold";
	}
}
btn.addEventListener("click",randomNumGenerator);
	

