//DOM INTERFACE
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function initDom() {
    let domDecoded = {};
    domDecoded.screenOut = document.getElementById("login-out");
    domDecoded.screenIn = document.getElementById("login-in");
    domDecoded.bandeau = document.getElementById("bandeau-error");
    domDecoded.msgError = document.getElementById("msg-error");
    domDecoded.alerter = document.getElementById("alerter");
    domDecoded.bandeau.style.padding = "0px";
    domDecoded.namePlant = document.getElementById("exampleFormControlInput1");
    domDecoded.descriptionPlant = document.getElementById("exampleFormControlInput2");
    domDecoded.categorieSelected = document.querySelectorAll("selectCategorie");
    domDecoded.characteristicHeight = document.getElementById("characteristicHeight");
    return domDecoded;
    //END DOM INTERFACE
}


function log() {

    let domDecoded = initDom();

    if (adminId == idAcc.value && adminPwd == pwdAcc.value) {
        createCookie(); //FOR CREATE A COOKIE
        domDecoded.msgError.style.visibility = "hidden";
        domDecoded.bandeau.style.visibility = "hidden";
        domDecoded.msgError.style.display = "none";
        domDecoded.bandeau.style.display = "none";
        domDecoded.msgError.innerHTML = "";
        domDecoded.screenIn.style.visibility = "visible";
        //domDecoded.screenIn.style.display = "block";
        //domDecoded.screenIn.style.height = "900px";
        domDecoded.screenIn.style.width = "100%";
        domDecoded.screenOut.style.visibility = "hidden";
        domDecoded.screenOut.style.display = "none";
    } else {
        if (bandeau.style.padding == "0px") {
            domDecoded.msgError.style.display = "block";
            domDecoded.bandeau.style.display = "block";
            domDecoded.msgError.style.visibility = "visible";
            domDecoded.bandeau.style.visibility = "visible";
            domDecoded.msgError.innerHTML = "Identifiant ou mot de passe incorrect."
            domDecoded.bandeau.style.padding = "10px";
            domDecoded.msgError.style.height = "20px";
            setTimeout(function () {
                domDecoded.bandeau.style.padding = "0px";
                domDecoded.msgError.style.height = "0px";
            }, 2000);
        } else {
            console.log("error")
            domDecoded.msgError.style.display = "block";
            domDecoded.bandeau.style.display = "block";
            domDecoded.msgError.style.visibility = "visible";
            domDecoded.bandeau.style.visibility = "visible";
            domDecoded.msgError.innerHTML = "Identifiant ou mot de passe incorrect."
            setTimeout(function () {
                domDecoded.msgError.style.display = "none";
                domDecoded.bandeau.style.display = "none";
                domDecoded.msgError.style.visibility = "hidden";
                domDecoded.bandeau.style.visibility = "hidden";
                domDecoded.bandeau.style.padding = "0px";
                domDecoded.msgError.style.height = "0px";
            }, 2000);
        }
    }
}

function forgot() {

    let domDecoded = initDom();

    if (bandeau.style.padding == "0px") {
        domDecoded.msgError.innerHTML = "Contacter le développeur pour récupérer vos identifiants."
        domDecoded.msgError.style.display = "block";
        domDecoded.bandeau.style.display = "block";
        domDecoded.msgError.style.visibility = "visible";
        domDecoded.bandeau.style.visibility = "visible";
        domDecoded.bandeau.style.padding = "10px";
        domDecoded.msgError.style.height = "20px";
        setTimeout(function () {
            domDecoded.bandeau.style.padding = "0px";
            domDecoded.msgError.style.height = "0px";
        }, 2000);
    } else {
        console.log("error")
        domDecoded.msgError.innerHTML = "Contacter le développeur pour récupérer vos identifiants."
        domDecoded.msgError.style.display = "block";
        domDecoded.bandeau.style.display = "block";
        domDecoded.msgError.style.visibility = "visible";
        domDecoded.bandeau.style.visibility = "visible";
        setTimeout(function () {
            domDecoded.msgError.style.display = "none";
            domDecoded.bandeau.style.display = "none";
            domDecoded.msgError.style.visibility = "hidden";
            domDecoded.bandeau.style.visibility = "hidden";
            domDecoded.bandeau.style.padding = "0px";
            domDecoded.msgError.style.height = "0px";
        }, 2000);
    }

}

var association = new Object();

var characteristic = new Object();
characteristic["exhibition"] = NaN;
characteristic["height"] = NaN;
characteristic["ph"] = NaN;
characteristic["rusticite"] = NaN;
characteristic["usda"] = NaN;
characteristic["water"] = NaN;

var filtre = new Object();

var characteristic = new Object();

var flowingPeriod = new Object();

var harvestPeriod = new Object();

var plantingPeriod = new Object();

var sowingPeriod = new Object();

function initForm() {

    let = domDecoded = initDom(); //REINIT DOM

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

    console.log("Characteristic : " + characteristic.ph);
    console.log("Name / Description : " + domDecoded.namePlant.value + " " + domDecoded.descriptionPlant.value);
    console.log(check(domDecoded.namePlant.value, domDecoded.descriptionPlant.value));
    console.log("Type de namePlant : "+ typeof(domDecoded.namePlant.value));
    if(check(domDecoded.namePlant.value, domDecoded.descriptionPlant.value) == true) {
        let data = {
            association,
            "name": domDecoded.namePlant.value,
            "description": domDecoded.descriptionPlant.value,
            characteristic,
            filtre,
            flowingPeriod,
            harvestPeriod,
            plantingPeriod,
            sowingPeriod
        };

        download("plant", data);
        console.log("code by Lorenzo\n" + data);
        characteristic.height = "";
        domDecoded.namePlant.value = "";
        domDecoded.descriptionPlant.value = "";
    }
}

function check(namePlant, descriptionPlant) {
    if (namePlant != "" && descriptionPlant != "" && characteristic.height != "") {
        return true;
    } else {
        console.log("Mon name est : " + namePlant);
        console.log("Ma description est : " + descriptionPlant);
        console.log("Ma characteristic ph est : " + characteristic.ph);
        console.log("Ma characteristic ph est : " + characteristic["ph"]);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        customAlert.alert('Veuillez remplir tous les champs du formulaire !', 'Attention !');
        namePlant.value = "";
        descriptionPlant.value = "";
        characteristic["ph"] = NaN;
        return false;
    }
}

