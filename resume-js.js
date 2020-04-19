
var anchorTagsList = document.querySelectorAll(".horizontal-list a");
console.log(anchorTagsList);

for(var i = 0 ; i < anchorTagsList.length ; i++){
	anchorTagsList[i].addEventListener("click" , function(event){
		event.preventDefault();
		var target = this.textContent.trim().toLowerCase();
		console.log(target);
		var targetSec;
		if(target == "education"){
			targetSec = document.getElementById("edu");
		}else{
			targetSec = document.getElementById(target);
		} 
		console.log(targetSec);
		var id = setInterval(function(){
			var coord = targetSec.getBoundingClientRect();
			console.log(coord.top);
			if(coord.top<=20){
				clearInterval(id);
				return;
			}
			window.scrollBy(0,50);
		} , 30);
	})
}

var progressBars = document.querySelectorAll(".progress-parent > div")
var animationDone = false;
window.addEventListener("scroll" , checkTarget);
initialise();
function initialise(){
	for(let i = 0 ; i < progressBars.length ; i++){
		console.log(i);
		progressBars[i].style.width = 0+"%";
	}
}

function fillSkills(){
	for(let i = 0 ; i < progressBars.length ; i++){
		let maxValue = progressBars[i].getAttribute("data-maxValue");
		let counter = 0;
		let id = setInterval(function(){
			if(counter > maxValue){
				clearInterval(id);
				return;
			}
			progressBars[i].style.width=counter+"%";
			counter++;
		},10)
	}
}
function checkTarget(){
	var skillId = document.getElementById("skills-names");
    var skillCord = skillId.getBoundingClientRect();

if(!animationDone && skillCord.top <= window.innerHeight){
	animationDone = true;
	fillSkills();
}else if(skillCord.top > window.innerHeight){
	animationDone = false;
}
}
