/* fichier javascript en mode strict */
"use strict"; 

function valider(){

    let masqueNom = /^[A-Z\- ']{2,25}$/;
    let masquePrenom = /^[A-Z\- ']{2,25}$/;
    let nomFamilleValide = document.getElementById('nom').value.match(masqueNom);
    let prenomValide = document.getElementById('prenom').value.match(masquePrenom);
    let texteMessage = document.getElementById('message').value

    if (document.getElementById('nom').value == "") {

        alert("Merci de saisir votre nom de famille");
        return false;

    } else if (document.getElementById('prenom').value == "") {

        alert("Merci de saisir votre prénom");
        return false;

    } else if (document.getElementById('mail').value == "") {

        alert("Merci de saisir votre adresse e-mail");
        return false;

    } else if (document.getElementById('message').value == "") {

        alert("Merci de saisir votre message");
        return false;

    } else if (nomFamilleValide == null) {

        alert("Votre nom de famille ne peut comporter que les caractères suivant en plus de lettres : - ' ");
        return false;

    } else if (prenomValide == null) {

        alert("Votre prénom ne peut comporter que les caractères suivant en plus de lettres : - ' ");
        return false;

    } else if (texteMessage.includes('<') && texteMessage.includes('>')) {

        alert("Votre message contient le signe < et le signe >, ceci pouvant présenter un risque potentiel, votre message a été effacé.");
        document.getElementById('message').value = "";
        return false;

    } else {

        alert("Tous les champs sont renseignés");
        return true;

    }

}

/*document.getElementById("btn-form").addEventListener("click", function(e) {

    if (document.getElementById('nom').value == "") {

        alert("Merci de saisir votre nom de famille");

    } else if (document.getElementById('prenom').value == "") {

        alert("Merci de saisir votre prénom");

    } else if (document.getElementById('mail').value == "") {

        alert("Merci de saisir votre adresse e-mail");

    } else if (document.getElementById('message').value == "") {

        alert("Merci de saisir votre message");

    } else {

        alert("Tous les champs sont renseignés");

    }    

    e.preventDefault();

}, false);*/


