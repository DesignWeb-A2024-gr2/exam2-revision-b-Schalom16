// =========================================================================
// Déclaration des variables                                               =
// =========================================================================
const REGEX_CODE_PRODUIT = /(([\d\w]){5}-){2,4}([\d\w]){5}/;
const listeProduits = {
    "Q1JBC-3ZPX8-TVHUH" : "Final Fantasy 1",
    "P3CJN-JNGJM-XYYT4" : "Contra",
    "2RCWA-XPRPX-GJHPR" : "The Legend of Zelda",
    "H4LS8-L1L3T-08D9X" : "Rygar",
    "KBZB7-PQYDY-D5TMZ-MUABS-JNGJM" : "Metroid",
    "VPTU1-9UZXA-X4ED4-F596J-XPRPX" : "Ninja Gaiden",
    "SUY17-21D57-5QYJU-UE6PN-HZ452" : "Kirby's Adventure"
};
const erreurValidation = {
    "terme" : "Vous devez accepter les termes de l’Accord de souscription Vapeur pour finaliser la transaction.",
    "formatInvalide" : "Le code produit que vous avez saisie est invalide, il ne respecte pas le format requis.",
    "produitInexistant" : "Aucun produit n'est associé au code de produit saisie."
};
const zone=document.getElementById("cle-activation");
const messageErreur=document.getElementById("message-erreur");
const casecheck=document.getElementById('declaration');
const textDeclaration=document.getElementById("modification");
const couleur = getComputedStyle(document.documentElement).getPropertyValue('--couleur-texte-invalide');

// Code pour provoquer une animation sur le bouton Activer
const boutonActiver = document.querySelector('.bouton-activation');
boutonActiver.addEventListener('click', (e) => e.target.classList.add('bouton-click'));
boutonActiver.addEventListener('transitionend', (e) =>  e.target.classList.remove('bouton-click'));


/**
 * Recherche dans le tableau listeProduits un produit associé a un code de produit
 * @param {string} codeProduit Le code de produit à valider
 * @returns true si le produit existe dans le tableau
 */
function isProduitExiste(codeProduit) {
    return listeProduits[codeProduit.toString().toUpperCase()] ? true : false;
}

// =========================================================================
// Ajoutez votre code plus bas                                             =
// =========================================================================

 function validationCode(){
    let test1=false;
    let test2=false;
    let test3=false
    let message="";

    if(REGEX_CODE_PRODUIT.test(zone.value)){
        test1=true;
    
    }
    else{
       message+=erreurValidation["formatInvalide"]+'<br>';
    }

   if(listeProduits[zone.value]){
       test2=true;
    }
    else{
        message+=erreurValidation["produitInexistant"]+'<br>';
    }

    if(casecheck.checked){
        test3=true;
    }
    else{
        message+=erreurValidation["terme"];
    }

    if(test1==true && test2==true && test3==true)
    {
        messageErreur.classList.add("hidden");
        return true;
    }
    else{
        messageErreur.innerHTML=message;
        messageErreur.classList.remove("hidden");
        textDeclaration.style.color=couleur;
        return false;
    }
}

