
// TODO: Declare any global variables we need
let outcome = 1;
let roll = document.getElementById("roll");
let clear = document.getElementById("clear");
let diceImage = document.getElementById("dice-img");
let message = document.getElementById("status");
let numOfRolls = 0;
let rollResultList = ["ones","twos","threes","fours","fives","sixes"]
let countList = [0, 0, 0, 0, 0, 0];
let percentageList = [0, 0, 0, 0, 0, 0];
let rollList = [];
let rollPercentList = [];
for (let i = 0; i < rollResultList.length; i++){
    rollList.push(document.getElementById(rollResultList[i]));
    rollPercentList.push(document.getElementById(`${rollResultList[i]}-percent`));
}


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    // console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    roll.addEventListener("click", () => {
        numOfRolls++;
        // Flip Button Click Handler
        let rolledValue = Math.ceil(Math.random() * 6);

        // TODO: Determine flip outcome
        switch (rolledValue) {
            case 1:
                diceImage.src = "/assets/images/dice/dice1.png";
                message.textContent = "You Rowed One!";
                countList[0] = countList[0] + 1;
                break;
            case 2:
                diceImage.src = "/assets/images/dice/dice2.png";
                message.textContent = "You Rowed Two!";
                countList[1] = countList[1] + 1;
                break;
            case 3:
                diceImage.src = "/assets/images/dice/dice1.png";
                message.textContent = "You Rowed Three!";
                countList[2] = countList[2] + 1;
                break;
            case 4:
                diceImage.src = "../assets/images/dice/dice4.png";
                message.textContent = "You Rowed Four!";
                countList[3] = countList[3] + 1;
                break;
            case 5:
                diceImage.src = "../assets/images/dice/dice5.png";
                message.textContent = "You Rowed Five!";
                countList[4] = countList[4] + 1;
                break;
            case 6:
                diceImage.src = "../assets/images/dice/dice6.png";
                message.textContent = "You Rowed Six!";
                countList[5] = countList[5] + 1;
                break;
        }
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        for (let i = 0; i < rollResultList.length; i++){
            percentageList[i] = Math.round(countList[i] / numOfRolls * 100);
            rollList[i].textContent = countList[i];
            rollPercentList[i].textContent = `${percentageList[i]}%`;
        } 
    });

    clear.addEventListener("click", () => {
        countList = [0, 0, 0, 0, 0, 0];
        percentageList = [0, 0, 0, 0, 0, 0];
        numOfRolls = 0;
        for (let i = 0; i < rollResultList.length; i++){
            rollList[i].textContent = countList[i];
            rollPercentList[i].textContent = `${percentageList[i]}%`;
        }
        message.textContent = "Let's Get Rolling!";
        // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    });
})