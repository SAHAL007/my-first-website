var circle= document.getElementById("circle");
var upbutton=document.getElementById("upButton");
var downbutton=document.getElementById("downButton");
var rotateValue= circle.style.transform;
var rotateSum;
upButton.onclick=function(){
		rotateSum=rotateValue+"rotate(-90deg)";
		circle.style.transform=rotateSum;
		rotateValue=rotateSum;
	}

downButton.onclick=function(){
		rotateSum=rotateValue+"rotate(90deg)";
		circle.style.transform=rotateSum;
		rotateValue=rotateSum;
	}