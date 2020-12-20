// Identification
// Nom : Oueslati
// Prénom : Mohamed Aymen
// Code permanent : OUEM09038506

// Placez votre code ici...

let form=document.querySelector('form');
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');

form.addEventListener("submit", e => {
    e.preventDefault();

    valideFormulaire();
    resultat();



});

function valideFormulaire(){

    clearErrorMessages();
    var q1V = validateInputField("q1", "resultat");
    var q2V = validateInputField("q2", "resultat");
    var q3V = validateInputField("q3", "resultat");
    var q4V = validateInputField("q4", "resultat");
    var q5V = validateInputField("q5", "resultat");



    return q1V && q2V && q3V && q4V && q5V  ;

}

function clearErrorMessages() {
    document.getElementById("resultat").innerHTML = "";

}

function validateInputField(inputId, spanId) {
    var value = document.getElementById(inputId).value;
    if (value == null || value === "") {
        document.getElementById(spanId).innerHTML = "veuillez remplir vos champs!";
        document.getElementById(spanId).style.color="red";
        return false;
    }
    return true;
}

function resultat(){
    let container = document.getElementById("resultat");

    load().then(reponseJson => container.innerHTML = reponseJson+"votre score est "+score())
        .catch(error => container.innerHTML = " erreur ");
}
//appel asynchrone. Await est un mot-clé pour pouvoir appeler des functions asynchrones.
//await permet d'attendre le résultat de la fonction sans bloquer l'application
async function load() {
    const formData = new FormData(form);
    const resp = await fetch("correction.php", { method: 'POST', body: formData });
    const reponseJson = await resp.json();
    return  reponseJson;
}

function score(){


    let q11 = document.getElementById('q1').value;
    let q22 = document.getElementById('q2').value;
    let q33 = document.getElementById('q3').value;
    let q44 = document.getElementById('q4').value;
    let q55 = document.getElementById('q5').value;
    let score=0;
    if(q11==='q1_a'){
        score=score+20;
    }
    if(q22==='q2_c'){
        score=score+20;
    }
    if(q33==='q3_a'){
        score=score+20;
    }
    if(q44==='q4_d'){
        score=score+20;
    }
    if(q55==='q5_b'){
        score=score+20;
    }


    return score;

}
