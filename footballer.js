function introduction(first){
	var intro = "This is ";

	function lastName(last){ 
		return intro + first + " " + last;
	}

	return lastName;
}

//lastName is declared but not executed 
var person = introduction("Bernie"); //[function lastName]

//lastName is called, note how it has access to `intro` and `first`
person("Mac"); //"This is Bernie Mac" 

*/

function footballer(first, last){
	var goals = 0;

	return { //returns this object,
		tally: function(){
			return goals;
		},
		score: function(){
			goals++;
		},
		commentary: function(){
			return first + " " + last + " has scored " + goals + " this season ";
		}
	} 
}

/*

var santiCazorla = footballer("Santi", Cazorla");
santiCazorla.tally();
santiCazorla.score();
santiCazorla.commentary();

*/