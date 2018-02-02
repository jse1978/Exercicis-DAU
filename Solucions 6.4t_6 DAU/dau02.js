//JavaScript
function tirarDau(){

/*DAU num aleatori de 0 a 10*/
	var numAleatoriDecimals=Math.random()*6+1; // num aletori de 0 a 10 amb decimals
	var numAleatoriEnter = Math.floor(numAleatoriDecimals); // arrodonim
	console.log("Decimal= "+numAleatoriDecimals+" Enter= "+numAleatoriEnter);
  
	var numAleatoriDecimals2=Math.random()*5+1; // num aletori de 0 a 10 amb decimals
	var numAleatoriEnter2 = Math.round(numAleatoriDecimals2); // arrodonim
	console.log("Decimal= "+numAleatoriDecimals2+" Enter= "+numAleatoriEnter2);

	var resultat = document.getElementById("contentDau");
    resultat.innerHTML=numAleatoriEnter;
}