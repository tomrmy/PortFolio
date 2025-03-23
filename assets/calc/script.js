document.getElementById("btn").addEventListener("click",function calculatrice (){
    let nombregauche = document.getElementById("nombre-gauche").value;
    let nombredroite = document.getElementById("nombre-droite").value;
    let operations = document.getElementById("operations").value;

    let num1 = parseInt(nombregauche);
    let num2 = parseInt(nombredroite);

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0){
        alert("Error :(");
        return;
    }
    if ((operations === "/" || operations === "%" ) && num2 === 0){
        alert("It's over 9000 !")
        console.log("It's over 9000 !")
        return
    }

    let resultat;
    switch(operations){
        case "+" : resultat = num1 + num2; break;
        case "-" : resultat = num1 - num2; break;
        case "*" : resultat = num1 * num2; break;
        case "/" : resultat = num1 / num2; break;
        case "%" : resultat = num1 % num2; break;
    }
    alert("Resultat :" + resultat)
    console.log("Resultat :" + resultat)
})


(function(){
    alert('Use me please');
},30000)