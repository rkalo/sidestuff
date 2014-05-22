function footballer(first, last){
	var goals = 0;

	return {
		tally: function(){
			return goals;
		},
		scoreGoal: function(){
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