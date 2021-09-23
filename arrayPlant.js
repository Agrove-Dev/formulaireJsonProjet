let goodAssociation = document.getElementById("selectGoodAssociation");
let badAssociation = document.getElementById("selectBadAssociation");


let plant = ["absinthe", "ail", "aneth", "aubergine", "basilic", "begonia", "brocoli", "canneberge", "capucine", "carotte", "carvi", "cassis", "celeri", "cerfeuil", "chou", "choufleur", "ciboulette", "concombre", "courge", "coriandre", "courgette", "cosmos", "cresson", "echalotte", "epinard", "estragon", "feve", "framboise", "fenouil", "fraise", "fraisier", "geranium", "haricot", "iris", "laitue", "lamierblanc", "lavande", "lin", "mache", "melisse", "menthe", "moutarde", "navet", "oeilletdinde", "oignon", "persil", "petunia", "piment", "poireau", "pois", "poismangetout", "poivron", "pommedeterre", "radis", "raifort", "rhubarbe", "romarin", "sariette", "sauge", "souci", "tanaisie", "thym", "tomate" ,"topinambour", "trefle" ,"verveine"];

//SET PLANT IN ARRAY OF MY DOM
for(let x = 0; x < plant.length; x++) {
    let opt = document.createElement("option");
    opt.value = plant[x];
    opt.innerHTML = plant[x].charAt(0).toUpperCase() + plant[x].slice(1);;
    goodAssociation.appendChild(opt);
}
//SET PLANT IN ARRAY OF MY DOM
for(let x = 0; x < plant.length; x++) {
    let opt = document.createElement("option");
    opt.value = plant[x];
    opt.innerHTML = plant[x].charAt(0).toUpperCase() + plant[x].slice(1);;
    badAssociation.appendChild(opt);
}

