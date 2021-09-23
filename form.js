//DOM INTERFACE
let namePlant = document.getElementById("exampleFormControlInput1");
let descriptionPlant = document.getElementById("exampleFormControlInput2");
let categorieSelected = document.querySelectorAll("selectCategorie");
let characteristicHeight = document.getElementById("characteristicHeight");
let screenOut = document.getElementById("login-out");
let screenIn = document.getElementById("login-in");
let bandeau = document.getElementById("bandeau-error");
let msgError = document.getElementById("msg-error");
bandeau.style.padding = "0px";
//END DOM INTERFACE

function log() {
    if (adminId == idAcc.value && adminPwd == pwdAcc.value) {
        createCookie(); //FOR CREATE A COOKIE
        msgError.style.visibility = "hidden";
        bandeau.style.visibility = "hidden";
        msgError.style.display = "none";
        bandeau.style.display = "none";
        msgError.innerHTML = "";
        screenIn.style.visibility = "visible";
        screenIn.style.display = "block";
        screenOut.style.visibility = "hidden";
        screenOut.style.display = "none";
    } else {
        if (bandeau.style.padding == "0px") {
            msgError.style.display = "block";
            bandeau.style.display = "block";
            msgError.style.visibility = "visible";
            bandeau.style.visibility = "visible";
            msgError.innerHTML = "Identifiant ou mot de passe incorrect."
            bandeau.style.padding = "10px";
            msgError.style.height = "20px";
            setTimeout(function () {
                bandeau.style.padding = "0px";
                msgError.style.height = "0px";
            }, 2000);
        } else {
            console.log("error")
            msgError.style.display = "block";
            bandeau.style.display = "block";
            msgError.style.visibility = "visible";
            bandeau.style.visibility = "visible";
            msgError.innerHTML = "Identifiant ou mot de passe incorrect."
            setTimeout(function () {
                msgError.style.display = "none";
                bandeau.style.display = "none";
                msgError.style.visibility = "hidden";
                bandeau.style.visibility = "hidden";
                bandeau.style.padding = "0px";
                msgError.style.height = "0px";
            }, 2000);
        }
    }
}

function forgot() {
    if (bandeau.style.padding == "0px") {
        msgError.innerHTML = "Contacter le développeur pour récupérer vos identifiants."
        msgError.style.display = "block";
        bandeau.style.display = "block";
        msgError.style.visibility = "visible";
        bandeau.style.visibility = "visible";
        bandeau.style.padding = "10px";
        msgError.style.height = "20px";
        setTimeout(function () {
            bandeau.style.padding = "0px";
            msgError.style.height = "0px";
        }, 2000);
    } else {
        console.log("error")
        msgError.innerHTML = "Contacter le développeur pour récupérer vos identifiants."
        msgError.style.display = "block";
        bandeau.style.display = "block";
        msgError.style.visibility = "visible";
        bandeau.style.visibility = "visible";
        setTimeout(function () {
            msgError.style.display = "none";
            bandeau.style.display = "none";
            msgError.style.visibility = "hidden";
            bandeau.style.visibility = "hidden";
            bandeau.style.padding = "0px";
            msgError.style.height = "0px";
        }, 2000);
    }

}

var association = new Object();

var characteristic = new Object();

var filtre = new Object();

var characteristic = new Object();

var flowingPeriod = new Object();

var harvestPeriod = new Object();

var plantingPeriod = new Object();

var sowingPeriod = new Object();

function initForm() {

    //GET ALL VALUE OF FILTRE
    for (var option of document.getElementById('selectCategorie').options) {
        if (option.selected) {
            filtre[option.value] = true;
        }
    }

    //GET ALL VALUE OF EXPOSITION
    for (var option of document.getElementById('characteristicExposition').options) {
        if (option.selected) {
            characteristic["exhibition"] = parseInt(option.value);
        }
    }

    //GET ALL VALUE OF WATER NEEDED
    for (var option of document.getElementById('characteristicWater').options) {
        if (option.selected) {
            characteristic["water"] = parseInt(option.value);
        }
    }

    //GET ALL VALUE OF RUSTICITE
    for (var option of document.getElementById('characteristicRusticite').options) {
        if (option.selected) {
            characteristic["rusticite"] = parseInt(option.value);
        }
    }

    //GET ALL VALUE OF USDA
    for (var option of document.getElementById('characteristicUsda').options) {
        if (option.selected) {
            characteristic["usda"] = option.value;
        }
    }

    //GET ALL VALUE OF PH
    for (var option of document.getElementById('characteristicPh').options) {
        if (option.selected) {
            characteristic["ph"] = parseInt(option.value);
        }
    }

    //GET ALL VALUE OF GOOD ASSOCIATION
    for (var option of document.getElementById('selectGoodAssociation').options) {
        if (option.selected) {
            association[option.value] = true;
        }
    }

      //GET ALL VALUE OF BAD ASSOCIATION
      for (var option of document.getElementById('selectBadAssociation').options) {
        if (option.selected) {
            association[option.value] = false;
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
        association,
        "name": namePlant.value,
        "description": descriptionPlant.value,
        characteristic,
        filtre,
        flowingPeriod,
        harvestPeriod,
        plantingPeriod,
        sowingPeriod
    };

    download("plant", data);
    console.log("code by Lorenzo\n" + data);
}