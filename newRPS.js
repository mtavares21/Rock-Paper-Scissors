
let playerInput ;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let playRock = rock.addEventListener("click", play);
let playPaper = paper.addEventListener("click", play);
let playScissors = scissors.addEventListener("click", play);

let scoreRock = rock.addEventListener("click",score);
let scorePaper = paper.addEventListener("click",score);
let scoreScissors = scissors.addEventListener("click", score)

function computerPlay(){
let plays = ["rock", "paper", "scissors"];
let computerSelection= plays[Math.floor(Math.random() * plays.length)];
return computerSelection
}

function play(e){
    let playerInput = e.path[0].classList.value;
    let computerSelection = computerPlay();
    let point = document.createElement("div");
    point.className = "point";
    point.textContent = "i" ;
    if (playRound(computerSelection, playerInput) === "win")
        {let you = document.querySelector(".playerScore");
        you.appendChild(point)
    }
        else if (playRound(computerSelection, playerInput) === "lose")
            {let computer = document.querySelector(".computerScore")
            computer.appendChild(point)
        }
            else if (playRound(computerSelection, playerInput) === "tie"){
            let none = document.querySelector(".tieScore");
            let tie = document.createElement("div");
            tie.className = "point";
            tie.textContent = "X";
            none.appendChild(tie);
            }
}


function score (){ 
    let plays = document.querySelectorAll(".point").length;
    let playerPoints = document.querySelector(".playerScore").childNodes.length;
    let computerPoints = document.querySelector(".computerScore").childNodes.length;
    if (plays === 5 && playerPoints>computerPoints){
        let scoreDiv = document.createElement("div");
        scoreDiv.textContent= "You won!";
        scoreDiv.className= "scoreDiv";
        let scoreDisplay = document.querySelector(".scoreDisplay");
        scoreDisplay.appendChild(scoreDiv);
        resetButton()
        
        
    }
    else if (plays === 5 && computerPoints>playerPoints){
        let scoreDiv = document.createElement("div");
        scoreDiv.textContent= "You lose!";
        scoreDiv.className= "scoreDiv";
        let scoreDisplay = document.querySelector(".scoreDisplay");
        scoreDisplay.appendChild(scoreDiv);
        resetButton()
        
        
        
    }
    else if ( plays === 5 && playerPoints===computerPoints){
        let scoreDiv = document.createElement("div");
        scoreDiv.textContent= "It's a tie!";
        scoreDiv.className= "scoreDiv";
        let scoreDisplay = document.querySelector(".scoreDisplay");
        scoreDisplay.appendChild(scoreDiv);
        resetButton()
    }
    }
    
    

function resetButton() {
    let btn = document.createElement("button");
    let parent = document.querySelector(".scoreDisplay");
    btn.textContent = "Reset";
    btn.className= "resetButton";
    btn.onclick = eraser;
    parent.appendChild(btn);
}

    function eraser (){
        document.querySelectorAll(".point").forEach(n=>n.remove());
        document.querySelector(".scoreDiv").remove();
        document.querySelector(".resetButton").remove();
     }

    

      
function  playRound (computerSelection , playerSelection){ 
        
        if (playerSelection === computerSelection){return "tie"}
        
            else if (playerSelection=== "rock" && computerSelection=== "scissors"){
             return "win"}

               else if ( playerSelection === "paper" && computerSelection === "rock"){
               return "win"}
               
                else if( playerSelection === "scissors" && computerSelection==="paper"){
                   return "win"}
       
        else { return "lose"}

        }
    

function game(){
    let playerScore = 0;
    let computerScore=0;
    for (let i=0; i<=5; i++){
         playerInput = prompt("1,2,3, rock, paper or scissors??");
         playerSelection = playerInput.toLowerCase();
        computerPlay()
        playRound(computerSelection,playerSelection)
        if (playRound(computerSelection, playerSelection).startsWith("You win")){playerScore++}
         else if(playRound(computerSelection, playerSelection).startsWith("You Lose")){computerScore++}
         }
         return ("Player " + playerScore + "   Computer " + computerScore )  ;
}



