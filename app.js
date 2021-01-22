
   

// On button click, prepare and display infographic
//(function () {
    //document.getElementById("btn").addEventListener("click", processEvent);

//})();

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


//fetch Json dino data
function parseDino(){
    let dinos = require('/Users/arjunreddy31/udacity_projects/Javascript/dino.json');
    const dino_array  = [];
    for (key in dinos){
        dino_array.push(dinos[key]);   
    }
    return dino_array;

}


const getRandomDino = { parseDino: function (){
    let dinos = require('/Users/arjunreddy31/udacity_projects/Javascript/dino.json');
    const dino_array
    },

}



const Dino_facts = {};

function createTiles(){


}



// process click, get human data, pick 7 randome dinosaurs, 
//1 pigeon,1 human, compare atttributes get random fact// output grid



(function () {
    
})();