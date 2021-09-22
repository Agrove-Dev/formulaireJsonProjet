
let namePlant = document.getElementById("exampleFormControlInput1");
let descriptionPlant = document.getElementById("exampleFormControlInput2");
let categorieSelected = document.querySelectorAll("selectCategorie");
let characteristicHeight = document.getElementById("characteristicHeight")

var association = new Object();
// association["ail"] = true;
// association["begonia"] = true;
// association["capucine"] = true;
// association["cassis"] = true;
// association["cerfeuil"] = true;
// association["cosmos"] = true;

var characteristic = new Object();
characteristic["exhibition"] = -1;
characteristic["height"] = "";
characteristic["ph"] = -1;
characteristic["rusticite"] = -1;
characteristic["usda"] = -1;
characteristic["water"] = -1;

var filtre = new Object();

var characteristic = new Object();

var flowingPeriod = new Object();

var harvestPeriod = new Object();

var plantingPeriod = new Object();

var sowingPeriod = new Object();


function initForm() {

    //GET ALL VALUE OF FILTRE
    for (var option of document.getElementById('selectCategorie').options)
    {
        if (option.selected) {
            filtre[option.value] = true;
        }
    }

    //GET ALL VALUE OF EXPOSITION
    for (var option of document.getElementById('characteristicExposition').options)
    {
        if (option.selected) {
            characteristic["exhibition"] = parseInt(option.value);
        }
    }

    //GET ALL VALUE OF WATER NEEDED
    for (var option of document.getElementById('characteristicWater').options)
    {
        if (option.selected) {
            characteristic["water"] = parseInt(option.value);
        }
    }

        //GET ALL VALUE OF RUSTICITE
    for (var option of document.getElementById('characteristicRusticite').options)
    {
        if (option.selected) {
             characteristic["rusticite"] = parseInt(option.value);
        }
    }

    //GET ALL VALUE OF USDA
    for (var option of document.getElementById('characteristicUsda').options)
    {
        if (option.selected) {
            characteristic["usda"] = option.value;
        }
    }

    //GET ALL VALUE OF PH
    for (var option of document.getElementById('characteristicPh').options)
    {
        if (option.selected) {
            characteristic["ph"] = parseInt(option.value);
        }
    }

    characteristic["height"] = characteristicHeight.value;
    sowingPeriod["startMonth"] = parseInt(document.getElementById("semisStart").value);
    sowingPeriod["endMonth"] = parseInt(document.getElementById("semisEnd").value);
    harvestPeriod["startMonth"] = parseInt(document.getElementById("recolteStart").value);
    harvestPeriod["endMonth"] = parseInt(document.getElementById("recolteEnd").value);
    flowingPeriod["startMonth"] = parseInt(document.getElementById("floraisonStart").value);
    flowingPeriod["endMonth"] = parseInt(document.getElementById("floraisonEnd").value);
    plantingPeriod["startMonth"] = parseInt(document.getElementById("plantationStart").value);
    plantingPeriod["endMonth"] = parseInt(document.getElementById("plantationEnd").value);

    let data = {
        "name" : namePlant.value,
        "description" : descriptionPlant.value,
        characteristic,
        filtre,
        flowingPeriod,
        harvestPeriod,
        plantingPeriod,
        sowingPeriod
    };

    download("plant", data);
    console.log(data);
}