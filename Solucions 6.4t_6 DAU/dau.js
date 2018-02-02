//JavaScript
function tirarDau(){

/*DAU num aleatori de 0 a 10*/
var numAletori = Math.random();
var numAleatoriDecimals=numAletori*10; // num aletori de 0 a 10 amb decimals (10 no inclòs)
var numAleatoriEnter = Math.round(numAleatoriDecimals); // arrodonim al valor més proper. (0 a 10 ambdós inclosos)

//Una altra opció:

var numAleatoriDecimals2=numAletori*11; // num aletori de 0 a 11 amb decimals (11 no inclòs)
var numAleatoriEnter2 = Math.floor(numAleatoriDecimals2); // arrodonim cap a baix. Es més efectiu a nivell de probabilitats (0 a 10 ambdós inclosos)

console.log("Decimal= "+numAleatoriDecimals+" Enter= "+numAleatoriEnter);
console.log("Decimal2= "+numAleatoriDecimals2+" Enter2= "+numAleatoriEnter2);
    //alert(numAleatoriEnter);
    
  var resultat = document.getElementById("contentDau");
    
    resultat.innerHTML=numAleatoriEnter;
    
    /* document.getElementById("contentDau").innerHTML=numAleatoriEnter;*/
}