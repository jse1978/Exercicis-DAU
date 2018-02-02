//JavaScript
function tirarDau(){
	var numAleatoriDecimals=Math.random()*6+1;  
	var numAleatoriEnter = Math.floor(numAleatoriDecimals);
	console.log("Decimal= "+numAleatoriDecimals+" Enter= "+numAleatoriEnter);
  
  	var resultat = document.getElementById("imagen");
    var htmlInput = './img/dado'+numAleatoriEnter+'.png';
    console.log(htmlInput);
    resultat.src = htmlInput;
}