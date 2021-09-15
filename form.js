// import * as Fs from 'fs'

// export function createForm() {
// const rq = require(Fs);
// rq
let namePlant = document.getElementById("exampleFormControlInput1");
let descriptionPlant = document.getElementById("exampleFormControlInput2");
let categorieSelected = document.getElementById("selectCategorie");
let categorie = ["legumes", "fruits", "aromates", "plantesMeliferes", "plantesMedicinales"];


function initForm() {
    var selected = [];
    for(i=0; i < categorie.length; i++) {
        for (var option of document.getElementById(categorieSelected).options){
        if (option.selected) {
            selected.push(option.value);
        }
    }
    }
    
    console.log("est selected : " + selected);
console.log("Ma categorie :"  + categorieSelected.type);
    let data = {
        "name" : namePlant.value,
        "description" : descriptionPlant.value,
        
        "characteristic": {
                "id": true,
                },

        "description": "Bonjour",
        "flowingPeriod": {
        "id": true,

        },
        "harvestPeriod": {
            "id": true,
        }
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
