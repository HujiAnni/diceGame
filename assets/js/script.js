
// const firstName = document.querySelector("#first-name");

// firstName.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

// TODO: Declare any global variables we need
let outcome = true;
let flip = document.getElementById("flip");
let clear = document.getElementById("clear");
let coinImage = document.getElementById("coin-img");
let message = document.getElementById("status");
let numOfFlips = 0;
let head = 0;
let headCount = document.getElementById("heads");
let tail = 0;
let tailCount = document.getElementById("tails");
let headPercentage = 0;
let headPercent = document.getElementById("heads-percent");
let tailPercentage = 0;
let tailPercent = document.getElementById("tails-percent");

let coinSound = new Audio("../assets/sounds/coin-drop-39914.mp3");

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    // console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    flip.addEventListener("click", () => {
        coinSound.play();
        let i = -1;
        let anime = setInterval(() => {
            coinImage.style.transform = `scaleX(${i})`;
            i = -i;
        }, 50);
        setTimeout(() => {
            clearInterval(anime);
        }, 2000);
        setTimeout(() => {
                    numOfFlips++;
    
        // Flip Button Click Handler
        let rolledValue = Math.ceil(Math.random() * 6);

        // TODO: Determine flip outcome
        if (rolledValue % 2 === 0) {
            outcome = false;
            // TODO: Update image and status message in the DOM
            coinImage.src = "/assets/images/penny-tails.jpg";
            message.textContent = "You Flipped Tails!";
            tail++;
            

        } else {
            outcome = true;
            // TODO: Update image and status message in the DOM
            coinImage.src = "/assets/images/penny-heads.jpg";
            message.textContent = "You Flipped Heads!";
            head++;
           
        }
        

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        headPercentage = Math.round(head / numOfFlips * 100);
        headCount.textContent = head;
        headPercent.textContent = `${headPercentage}%`;
        tailPercentage = Math.round(tail / numOfFlips * 100);
        tailCount.textContent = tail;
        tailPercent.textContent = `${tailPercentage}%`;
        }, 2000)
    });

    clear.addEventListener("click", () => {
        outcome = true;
        numOfFlips = 0;
        head = 0;
        headPercentage = 0;
        headCount.textContent = head;
        headPercent.textContent = `${headPercentage}%`;
        
        tail = 0;
        tailPercentage = 0;
        tailCount.textContent = tail;
        tailPercent.textContent = `${tailPercentage}%`;
        message.textContent = "Let's Get Rolling!";
        // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    });
})