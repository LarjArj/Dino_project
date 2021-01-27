
   

// On button click, prepare and display infographic
(function () {
    document.getElementById("btn").addEventListener("click", processEvent);
})();

function processEvent() {
    var Human = processForm();
    var Dinos = getRandomDinos();

    var Dinosaurs = {};
    var idx = 0

    /// hide initial form once button is clicked
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
       // else if(dino[currentSpecies]=="Pigeon"  || dino[currentSpecies]=="Pteranodon"){
           // var animal 
       // }
        else {
            var animal = Dinosaurs[currentSpecies];
        }

        gridTile = createTile(animal,factToInsert);
        document.getElementById("grid").appendChild(gridTile);

        

    }
    

}

/// Uses DOM principles to create a tile which will ultimately be 
//appended to the grid
function createTile(animal,fact){
    
    if (!animal instanceof HumanConstructor){
        var tileDiv = document.createElement("div");
        tileDiv.className = "tile-object";
        var animalSpeciesDiv = document.createElement("h3");
        animalSpeciesDiv.innerText = animal.species;
        tileDiv.appendChild(animalSpeciesDiv);
        var animalImageDiv = document.createElement("img");
        animalImageDiv.src = animal.picture;
        tileDiv.appendChild(animalImageDiv)
        var animalFactDiv = document.createElement("p");
        animalFactDiv.innerText = fact;
        tileDiv.append(animalFactDiv);
    }
    else{
        var tileDiv = document.createElement("div");
        tileDiv.className = "tile-object";
        var animalNameDiv = document.createElement("h3");
        animalNameDiv.innerText = animal.name;
        tileDiv.appendChild(animalNameDiv);
    return tileDiv;
}

/// Processes User input and creates a Human obj
function processForm() {
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value ;
    var heightByFoot = Math.floor(document.getElementById("feet").value * 12) ;
    var heightByInch = Math.floor(document.getElementById("inches").value);
    var totalHeight = heightByFoot + heightByInch;
    var diet = document.getElementById("diet");
    return Human = new HumanConstructor(name,weight,totalHeight,diet);

}
//// Dinosaur Constructor class but can be used for birds and fyling reptiles
function DinousaurConstructor (species,weight,height,diet,facts) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.facts = facts;
    this.picture = require("/Users/arjunreddy31/udacity_projects/Javascript"+dino.species.toLowerCase()+".png")

}

function HumanConstructor (name,height,weight,diet){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
}


//// compares Dino to Human on by weight,height,diet and creates a list of facts
///  for every dino
function compareGetFact(Human,Dino){
    var facts = [];
    facts.push(compareHeight(Dino,Human));
    facts.push(compareWeight(Dino,Human));
    facts.push(compareDiet(Dino,Human));
    return facts;

}

// Compares Dino Height and Human Height
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
// Compares Dino Weight and Human Weight
function compareWeight (Dino,Human){

    if (Human.weight == Dino.weight){
        var potentialFact = "A" + Dino.name + "was the same weight as you";
    }
    if (Human.weight > Dino.weight){
        var potentialFact = "You weigh more than a "+ Dino.name + "ever Weighed";
    }
    else{
        var potentialFact = "You weigh less than a "+ Dino.name + "everWeighed" ;
    }
    return potentialFact;
}

// Compares Dino Diet and Human Diet
function compareDiet(Dino,Human){

    if (Dino.diet == Human.diet){
        var potentialFact = "Wow, " + Dinsour.name + "was a" + Human.diet + "too";
    }

    else{
        var potentialFact = "Wow,your diet is much different than a "+Dino.namet+
        "which was strictly a"+ Dino.diet;
    }
    return potentialFact;

}


//get JSON dino data and output into array
function parseDino(){
    var dinoTable = require('/Users/arjunreddy31/udacity_projects/Javascript/dino.json');
    var dino_array  = [];
    var dinos=dinoTable["dinos"];
    for (key in dinos){
        dino_array.push(dinos[key]);   
    }
    return dino_array;

}


// Gets random fact from input of facts array from animal/dino
function getRandomFact(facts){
    var random = getRndInteger(0,facts.length);
    return facts[random];
}

/// When called from function processEvent() this will
// generate random ordering of dinos

function getRandomDinos(){
    var Dino_list = parseDino();
    var output = []
    while (Dino.length>0){
        var random = getRndInteger(0,Dino_list.length);
        var popped = Dino_list.slice(random,random+1);
        output.push(popped);
    }
    return output;

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}








// process click, get human data, pick 7 randome dinosaurs, 
//1 pigeon,1 human, compare atttributes get random fact// output grid



