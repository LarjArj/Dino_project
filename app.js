
const Dino_info = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "Herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "Herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
};


//get JSON dino data and output into array
function parseDino(){
    let dinoTable = Dino_info;
    let dino_array  = [];
    let dinos=dinoTable["Dinos"];
    for (key in dinos){
        dino_array.push(dinos[key]);   
    }
    return dino_array;

}




//On button click, prepare and display infographic
(function () {
    document.getElementById("btn").addEventListener("click", processEvent);
})();


function processEvent() {
    let Human = processForm();
    let Dinos = getRandomDinos();
    let Dinosaurs = {};
    let factToInsert=null;
    /// hide initial form once button is clicked
    document.getElementById("dino-compare").style.display = "none";
    let counter=0;
    let idx =0;
    while  (counter<Dinos.length){
        let animal;
        animal = Dinos[counter];
        if (idx == 3){
             animal = Human;

        }
        
        else{
            counter++;
           // let currentSpecies = animal["species"];
           // let facts = compareGetFacts(Human,animal);
           // facts.push(animal["when"]);
            //facts.push(animal["where"]);
            //facts.push(animal["fact"]);

            let Dino = new DinousaurConstructor(animal["species"],animal["weight"],animal["height"],animal["diet"],animal["fact"]);
            animal = Dino;
            let facts = compareGetFacts(animal,Human);
            animal.facts=facts;
            Dinosaurs[animal.name]=Dino;


            let Dino_facts = animal.facts;
            factToInsert = getRandomFact(Dino_facts);
            

        }
        

        gridTile = createTile(animal,factToInsert,idx);
        document.getElementById("grid").appendChild(gridTile);
        idx++;
        

    }

}

/// Uses DOM principles to create a tile which will ultimately be 
//appended to the grid
function createTile(animal,fact,idx){

    let tileItemDiv = document.createElement("div");
    tileItemDiv.className = "grid-item";
    let animalNameDiv = document.createElement("h3");
    animalNameDiv.innerText = animal.name;
    tileItemDiv.appendChild(animalNameDiv);


    if (idx!=3){
        let animalImageDiv = document.createElement("img");
        animalImageDiv.src = animal.picture;
        tileItemDiv.appendChild(animalImageDiv)
        let animalFactDiv = document.createElement("p");
        animalFactDiv.innerText = fact;
        tileItemDiv.appendChild(animalFactDiv);
    }

    return tileItemDiv;
}

/// Processes User input and creates a Human obj
function processForm() {
    let name = document.getElementById("name").value;
    let weight = document.getElementById("weight").value;
    let heightByFoot = Math.floor(document.getElementById("feet").value * 12);
    let heightByInch = Math.floor(document.getElementById("inches").value);
    let totalHeight = heightByFoot + heightByInch;
    let diet = document.getElementById("diet");
    
    return new HumanConstructor(name,totalHeight,weight,diet);

}
//// Dinosaur Constructor class but can be used for birds and fyling reptiles
function DinousaurConstructor (name,weight,height,diet,facts) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.facts = facts;
    this.picture = "./images/"+name.toLowerCase()+".png";

}

function HumanConstructor (name,height,weight,diet){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
}


//// compares Dino to Human on by weight,height,diet and creates a list of facts
///  for every dino
function compareGetFacts(Dino,Human){
    let facts = [];
    facts.push(compareHeight(Dino,Human));
    facts.push(compareWeight(Dino,Human));
    facts.push(compareDiet(Dino,Human));
    return facts;

}

// Compares Dino Height and Human Height
function compareHeight (Dino,Human){
    let potentialFact;
    if (Human.height==Dino.height){
         potentialFact = "A "+ Dino.name + " was the same height as you";
    }
        // potential fact = "You " + Dino.name + "are the same height"
    if (Human.height > Dino.height){
        potentialFact = "You "+ "are taller than a " + Dino.name +" was";
    }
    else{
         potentialFact = "You "+ "are shorter than a " + Dino.name + " was";
    }
    return potentialFact;
}
// Compares Dino Weight and Human Weight
function compareWeight (Dino,Human){
    let potentialFact;
    if (Human.weight == Dino.weight){
        potentialFact = "A " + Dino.name + " was the same weight as you";
    }
    if (Human.weight > Dino.weight){
        potentialFact = "You weigh more than a "+ Dino.name + " ever weighed";
    }
    else{
        potentialFact = "You weigh less than a "+ Dino.name + " ever weighed" ;
    }
    return potentialFact;
}

// Compares Dino Diet and Human Diet
function compareDiet(Dino,Human){
    let potentialFact;
    if (Dino.diet == Human.diet){
        potentialFact = "Wow, " + Dinsour.name + "was a " + Dino.diet + " too";
    }

    else{
        potentialFact = "Wow, your diet is much different than a "+Dino.name+
        " which was strictly a "+ Dino.diet;
    }
    return potentialFact;

}

// Gets random fact from input of facts array from animal/dino
function getRandomFact(facts){
    let random = getRndInteger(0,facts.length);
    swap(random,facts.length-1,facts);
    return facts.pop();
}

/// When called from function processEvent() this will
// generate random ordering of dinos

function getRandomDinos(){
    let Dino_list = parseDino();
    let output = []
    while (Dino_list.length>0){
        let random = getRndInteger(0,Dino_list.length);
        swap(random,Dino_list.length-1,Dino_list);

        let popped = Dino_list.pop();
        output.push(popped);
    }
    return output;

}
function getRndInteger(min, max) {
    return Math.floor((Math.random() * (max)) + min);
}



// process click, get human data, pick 7 randome dinosaurs, 
//1 pigeon,1 human, compare atttributes get random fact// output grid




function test(){
    let li = [2,32,13,6,8];
    let output  =[];
    while (li.length>0){
        let random = getRndInteger(0,li.length);
        swap(random,0,li);

        let popped = li.pop();
        output.push(popped);
        
    }
    return output;
}

function swap(a,b,array){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;



}




//const temp = [];
//console.log(getRandomDinos());


//const Dino = new DinousaurConstructor("Pigeon",0.5,9,'herbavor','bird');

//console.log(Dino instanceof DinousaurConstructor);

//console.log(PNG);
