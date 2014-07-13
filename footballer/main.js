// http://javascriptissexy.com/understand-javascript-closures-with-ease/

function introducer(first){
	var intro = "This is ";

	function lastName(last){ 
		return intro + first + " " + last;
	}

	return lastName;
}

//lastName is declared but not executed 
var person = introducer("Bernie"); //[function lastName]

//lastName is called, note how it has access to `intro` and `first`
person("Mac"); //"This is Bernie Mac" 

*/

function footBaller(first, last){
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



var santiCazorla = footBaller("Santi", "Cazorla"); //[tally:[function], score:[function], commentary:[function]] 
santiCazorla.tally(); //0
santiCazorla.score(); //1
santiCazorla.score(); //2
santiCazorla.commentary(); //"Santi Cazorla has scored 2 goals this season" 


function idAssigner(array){
	var i;
	var id_base = 100;
	for(i=0; i<array.length; i++){
		array[i]["id"] = function(j){ //j is used to pass the current value of i into the function below
			return function(){ //return this function into the 'id' property
				return id_base + j;
			}() //we use () after this so that it is invoked immediately, otherwise trying to access the property will return a Function object
		}(j); //after playing around in repl.it, if you leave this off then `j` won't carry the value of `i`
	}
	return array;
}

footArr = [
	{name:'Laurent Koscielny', id:0},
	{name:"Aaron Ramsey", id:0},
	{name:"Mesut Ozil", id:0}
];

arsenalPlayers = idAssigner(footArr);
kos = arsenalPlayers[0];
ramsey = arsenalPlayers[1];
ozil = arsenalPlayers[2];
kos.id; //100
ramsey.id; //101
ozil.id; //102
