
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

document.getElementById("btn").addEventListener("click", processEvent);



function processEvent() {
    const Human = processForm();

    




}


function processForm() {
    var name=document.getElementById("name").value;
    var weight=document.getElementById("weight").value;
    var heightByFoot=document.getElementById("feet").value * 12 ;
    var heightByInch=document.getElementById("inches").value;
    var totalHeight = heightByFoot + heightByInch;
    return  Human = new HumanConstructor(name,totalHeight,weight);

}


function DinousaurConstructor (species,weight,height,diet,where,when,fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;

}

function HumanConstructor (name,height,weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
}



function compareHeight (Dino,Human){
    if (Human.height==Dino.height){
        var potentialFact = "You  and "+ Dino.name + "are the same height";
    
    }
        // potential fact = "You " + Dino.name + "are the same height"
    if (Human.height > Dino.height){
       var potentialFact = "You "+ "are taller than" + Dino.name;
    }
    else{
        var potentialFact = "You "+ "are shorter than" + Dino.name;
    }
    return potentialFact;
}

function compareWeight (Dino,Human){

    if (Human.weight == Dino.weight){
        var potentialFact = "You" + Dino.name + "are the same weight";

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
        // potentialFact = "Wow " + Dinsour.name + "was a" + Human.diet + "too"

    }

    else{
        


    }




}


//const Dino = new DinousaurConstruct();


//fetch Json dino data
function parseDino(){



}




(function () {
    
})();