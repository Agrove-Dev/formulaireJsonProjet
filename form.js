// import * as Fs from 'fs'

// export function createForm() {
// const rq = require(Fs);
// rq
let namePlant = document.getElementById("exampleFormControlInput1");
let descriptionPlant = document.getElementById("exampleFormControlInput2");
let categorieSelected = document.querySelectorAll("selectCategorie");

var association = new Object();
association["ail"] = true;
association["begonia"] = true;
association["capucine"] = true;
association["cassis"] = true;
association["cerfeuil"] = true;
association["cosmos"] = true;

var characteristic = new Object();
characteristic["exhibition"] = -1;
characteristic["height"] = "";
characteristic["ph"] = -1;
characteristic["rusticite"] = -1;
characteristic["usda"] = -1;
characteristic["water"] = -1;

var filtre = new Object();

var exposition

var flowingPeriod = new Object();
flowingPeriod["endMonth"] = -1;
flowingPeriod["startMonth"] = -1;

var harvestPeriod = new Object();
harvestPeriod["endMonth"] = -1;
harvestPeriod["startMonth"] = -1;

var plantingPeriod = new Object();
plantingPeriod["endMonth"] = -1;
plantingPeriod["startMonth"] = -1;

var sowingPeriod = new Object();
sowingPeriod["endMonth"] = -1;
sowingPeriod["startMonth"] = -1;

function initForm() {

    for (var option of document.getElementById('selectCategorie').options)
    {
        if (option.selected) {
            filtre[option.value] = true;
        }
    }

    let data = {
        "name" : namePlant.value,
        "description" : descriptionPlant.value,
        association,
        characteristic,
        filtre,
        flowingPeriod,
        harvestPeriod,
        plantingPeriod,
        sowingPeriod
    };
    console.log(data);
}

    // // On transforme le JSON en chaine de caractères
    // let dataStringified = JSON.stringify(data, null, 2);
    
    // fs.writeFile('data.json', dataStringified, (err) => {
    //     if (err) throw err;
    //     console.log('JSON écrit !');
    // });
    
    // console.log('Après le lancement de l\'écriture');
    

// }
