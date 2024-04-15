//Roll Functionality for Dice Project

function rollDice(num, num2, Name1) {
    console.log("No. of sides: ", num, num2)
    document.getElementById(Name1).innerHTML = minMax(num, num2);
}

function minMax(min, max){
    const rollDice =Math.floor(Math.random()*(max - min +1)) +min;
    console.log(rollDice)
    return(rollDice)
}

if(rollDice()==0) {
    throw new Error("Test failed")
};
if(rollDice()!=6) {
    throw new Error("Test failed")
};
if(rollDice()==3) {
    throw new Error("Test failed")
}
