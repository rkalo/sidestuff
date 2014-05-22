var consoleLogger(param){


	if(typeof param == "object"){

		for(var item in object){
			console.log("This player's " + item + " is " + object[item]);
		}
	}
	else if(typeof param == "function"){
		var randomInt = Math.round(Math.random());
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