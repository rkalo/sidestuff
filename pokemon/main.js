String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
};


var pokemon = [
    'Bulbasaur',
    'Charmander',
    'Squirtle',
    'Pikachu'
];

var PC = [];



var poketrainer = function(){
    var party = [];
    var add_to_party = function(pokemon_name){
        if( pokemon.indexOf( pokemon_name.capitalize() ) === -1){
            throw {
                name: 'CatchError',
                message: 'This pokemon does not exist'
            };
            
        } else if (party.length === 6){
            throw {
                name: 'CatchError',
                message: 'Your party is full'
            }
        }
        
        else {
            party.push(pokemon_name);
        }
    };
    
    
    return {
        
        catch : function(poke_name){
            try {
                add_to_party(poke_name);
                this.showParty();
            }
            catch(e){
                console.log(e.name + ": " + e.message);
            }
        },
        
        showParty : function(){
            console.log("===== MY PARTY ======");
            console.log("-----------");
            if( party.length === 0 ){
                console.log(" Your party is empty");
            } else {
                party.forEach( function(e){
                    console.log("| " + e + " |");
                });
            }
            
            console.log("-----------");
            console.log("=====================");
        }
    }
    
}();
