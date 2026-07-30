var confessions = ["I love you so much.", "Ich liebe dich so sehr."];
var newString = 0;
var i = 0;
function typeWriter(text, para){
	if(newString==confessions.length){
		clearInterval(typeInterval);
		console.log("end");
	}
	if(i<text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
	}
	else{
		i=0;
		newString+=1;
		document.getElementById(para).innerHTML += "<br>";
	}
}
var typeInterval;

typeInterval = setInterval(function(){
	typeWriter(confessions[newString], "text"+newString);
	
}, 100);


var j = 0;
function typeWriter1(text, para){
	if(j<text.length){
		document.getElementById(para).innerHTML += text.charAt(j);
		j++;
	}
	else{
		j=0;
	}
}

var infInterval;

infInterval = setInterval(function(){
	typeWriter1("i love you so much ", "afterbody");
	
}, 20);
