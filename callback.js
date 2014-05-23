function consoleLogger(param){
	var randomInt = Math.round(Math.random()); //getting a 1 or 0 to add some variety to the output
	if(randomInt) { var intro = "This player's name is "; } else { var intro = "This is "};

	if(typeof param == "object"){
		console.log(intro + param.name + "; he is a " + param.position);
	}
	else if(typeof param == "function"){
		if(randomInt)
			console.log("Well, it appears this is a function.");
		else
			console.log("I log many things, but not functions");
	}
	else {	
		console.log("It seems that I have come across a " + typeof param + " by the name of " + param);
	}	

	console.log("So sayeth the Console Logger");
}
//after writing this function, I realized it had nothing to do with the stuff below

var academy = [
			{name: "Olivier Giroud", position: "striker", skillLevel: 7, age: 27 },
			{name: "Yaya Sanogo", posiiton: "striker", skillLevel: 2, age:21},
			{name: "Mikel Arteta", position: "midfielder", skillLevel: 8, age: 31},
			{name: "Alex Oxlade-Chamberlain"}, position: "winger", skillLevel: 5, age: 20 },
			{name: "Per Mertesacker", position: "defender", skillLevel: 9, age: 30},
			{name: "Woljech Szceszey", position: "keeper", skillLevel: 7, age: 25 }	
	];

function improvedTeam(academy){
	var arr = [];

	function signAnotherContract(object){
		return object.skillLevel > 7 || (object.age < 20 && skillLevel > 5)) ? true : false;
	}
	
	academy.forEach(function(element){
		if(signAnotherContract(element)){
			arr.push(element);
		}
	});

	return arr;

}