//JavaScript
function tirarDau(){

/*DAU num aleatori de 0 a 10*/
	var numAleatoriDecimals=Math.random()*11; // num aletori de 0 a 10 amb decimals
	var numAleatoriEnter = Math.floor(numAleatoriDecimals); // arrodonim
	console.log("Decimal= "+numAleatoriDecimals+" Enter= "+numAleatoriEnter);

    alert(numAleatoriEnter);
}