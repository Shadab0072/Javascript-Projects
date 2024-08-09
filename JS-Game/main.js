let RandomNumber = parseInt( Math.random()*30 + 1 )
console.log(RandomNumber)

let inputField = document.getElementById('inputField');
let submitButton = document.getElementById('submit');
let display = document.querySelector('.lowHigh')
let guessSlot = document.querySelector(".PrevGuess");
let remainingAttempt = document.querySelector('.RemainingAttempt');
let startOver = document.querySelector('.startOver');

let p = document.createElement('p')

let totalGuess = [] ;
let chance = 1;
let playGame = true;


if (playGame) {
    submitButton.addEventListener('click',(e)=>{
        e.preventDefault();
         const guess = parseInt(inputField.value);
       // console.log(guess);
        validateGuess(guess);
    })   
}


function validateGuess(guess){
    if(isNaN(guess)) {
        alert('PLease enter a valid number');
      } else if (guess < 1) {
        alert('PLease enter a number more than 1');
      } else if (guess > 30) {
        alert('PLease enter a  number less than 30');
      } else{
        totalGuess.push(guess);
        if (chance === 5) {
              if (guess === RandomNumber) {
                displayGuess(guess)
                checkGuess(guess)
              } else {   
                  displayGuess(guess)
                  displayMessage(`Game Over💀 Random number was ${RandomNumber} .`)
                  endGame(); 
              }
                
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if (guess === RandomNumber) {
        displayMessage(`You guessed it right, Congratulations  😁🥳🎉`);
        endGame();
      } else if (guess < RandomNumber) {
        displayMessage(`HINT 💡: Number is TOOO low`);
      } else if (guess > RandomNumber) {
        displayMessage(`HINT 💡: Number is TOOO High`);
      }
}


function displayGuess(guess){
    inputField.value ='';
    guessSlot.innerHTML += ` ${guess}  ,`
    chance++ 
    remainingAttempt.innerHTML =  6 - chance
}



function displayMessage(message){
    display.innerHTML = `<p>${message}</p>` ; 
}


function endGame(){
    inputField.value = '';
    inputField.setAttribute('disabled', '')
    p.innerHTML = `<button id="newGame" class="primary-button"> New Game </button>`
    startOver.appendChild(p);
    playGame = false;
    newGame()
}




function newGame(){
    const button = document.getElementById('newGame');
    button.addEventListener('click', (e)=>{
        RandomNumber = parseInt( Math.random()*30 + 1 )
        totalGuess= []
        chance = 1
        guessSlot.innerHTML="";
        remainingAttempt.innerHTML = 6 - chance;
        displayMessage(``);
      
        inputField.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true 
    })
}




