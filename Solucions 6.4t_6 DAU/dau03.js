//JavaScript
function tirarDau(){

/*DAU num aleatori de 1 a 6*/
	var numAleatoriDecimals=Math.random()*6+1;  // num aletori de 1 a 6 amb decimals. 
												//el 5 surt de fer 6-1, interval entre el maxim i el minim. 
												//El 1 és el minim.

	var numAleatoriEnter = Math.floor(numAleatoriDecimals); // arrodonim
	console.log("Decimal= "+numAleatoriDecimals+" Enter= "+numAleatoriEnter);
  
  	var resultat = document.getElementById("contentDau");
    
    resultat.innerHTML=numAleatoriEnter;
    
}