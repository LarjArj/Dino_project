
   

// On button click, prepare and display infographic
//(function () {
    //document.getElementById("btn").addEventListener("click", processEvent);

//})();

function processEvent() {
    var Human = processForm();
    var Dinos = getRandomDinos();

    var Dinosaurs = {};
    var idx = 0


    document.getElementById("dino-compare").style.display = "none";
    for (idx = 0; idx<Dinos.length;i++ ){
        var dino = Dinos[idx];
        var currentSpecies = dino["species"];
        var facts = compareGetFact(Human,Dino);
        facts.push["when"];
        facts.push["where"];
        facts.push[fact];
        var Dino = new DinousaurConstructor(currentSpecies,dino["weight"],dino["height"],facts);
        Dinosaurs[currentSpecies]=Dino;
        var Dino_facts = Dinosaurs[currentSpecies].facts;
        var factToInsert = getRandomFact(Dino_facts);

        if (dinoIdx == 3){
            var animal = Human;
        }
        else{
            var animal = Dinosaurs[currentSpecies];
        }

        gridTile = createTile(Dinosaurs[currentSpecies],factToInsert);
        document.getElementById("grid").appendChild(gridTile);

        

    }
    
    

    
}

function createTiles(dino,fact){





}






function processForm() {
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value ;
    var heightByFoot = document.getElementById("feet").value * 12 ;
    var heightByInch = document.getElementById("inches").value;
    var totalHeight = heightByFoot + heightByInch;
    var diet = document.getElementById("diet");
    return Human = new HumanConstructor(name,totalHeight,weight,diet);

}

function DinousaurConstructor (species,weight,height,diet,facts) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.facts = facts;
}

function HumanConstructor (name,height,weight,diet){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
}

function compareGetFact(Human,Dino){
    var facts = [];
    facts.push(compareHeight(Dino,Human));
    facts.push(compareWeight(Dino,Human));
    facts.push(compareDiet(Dino,Human));
    return facts;

}



function compareHeight (Dino,Human){
    if (Human.height==Dino.height){
        var potentialFact = "A "+ Dino.name + "was the same height as you";
    }
        // potential fact = "You " + Dino.name + "are the same height"
    if (Human.height > Dino.height){
       var potentialFact = "You "+ "are taller than a " + Dino.name +"was";
    }
    else{
        var potentialFact = "You "+ "are shorter than" + Dino.name + "was";
    }
    return potentialFact;
}

function compareWeight (Dino,Human){

    if (Human.weight == Dino.weight){
        var potentialFact = "A" + Dino.name + "was the same weight as you";
    }
    if (Human.weight > Dino.weight){
        var potentialFact = "You weigh more than a "+ Dino.name;
    }
    else{
        var potentialFact = "You weigh less than a "+ Dino.name;
    }
    return potentialFact;
}

function compareDiet(Dino,Human){

    if (Dino.diet == Human.diet){
        var potentialFact = "Wow, " + Dinsour.name + "was a" + Human.diet + "too";
    }

    else{
        var potentialFact = "Wow,your diet is much different than a "+Dino.namet+
        "which was strictly a"+ Dino.diet;
    }

}


//fetch Json dino data
function parseDino(){
    let dinos = require('/Users/arjunreddy31/udacity_projects/Javascript/dino.json');
    const dino_array  = [];
    for (key in dinos){
        dino_array.push(dinos[key]);   
    }
    return dino_array;

}

//(function () {
    //console.log(parseDino());

//})()



function getRandomFact(facts){
    var random = getRndInteger(0,facts.length);
    return facts[random];
}

function getRandomDinos(){
    var Dino_list = parseDino();
    var output = []
    while (Dino.length>0){
        var random = getRndInteger(0,Dino_list.length);
        var popped = Dino_list.pop(random);
        output.push(popped);
    }
    return output;

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}






// process click, get human data, pick 7 randome dinosaurs, 
//1 pigeon,1 human, compare atttributes get random fact// output grid



