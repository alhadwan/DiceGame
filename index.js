
function rollDice(){
    const fPlayer = document.querySelector('input[name="fPlayer"]').value.trim();
    const sPlayer = document.querySelector('input[name="sPlayer"]').value.trim();

    if(fPlayer === "" || sPlayer === ""){
        alert("Enter Players Name");
        return;
    }else{

        var randomNumber1 = Math.floor(Math.random() * 6)+1; 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.floor(Math.random() * 6)+1; 
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if(randomNumber1 > randomNumber2){
     var selectElement = document.querySelector('input[name="fPlayer"]');
     var selectedValue = selectElement.value;
     document.querySelector("h1").textContent = `${selectedValue} Wins! 🎉`
     
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
}else if(randomNumber1 < randomNumber2){
    var selectElement = document.querySelector('input[name="sPlayer"]');
    var selectedValue2 = selectElement.value;
    document.querySelector("h1").textContent = `${selectedValue2} Wins! 🎉`
   
}else{
    document.querySelector("h1");
}

    }

}