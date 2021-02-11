# Rock-Papper-Scissors
### Objective

Create de necessary logic to play Rock-Paper-Scissors with against the computer. No need for UI, this game is played on the console, at least for now.

### Understanding the problem

The players should choose between Rock, Paper ou Scissors, and the possible results are tie or one of them win.
In this case we need a function to play for the computer, a function than randomly chooses between the three chances. We are going to call this function __computerPlay__, which should return the variable __computerSelection__.
There as to be an input for the player, creating the variable __playerSelection__, this should be case insensative.
The result of one round will be given by the function __playRound__;
build another function, __game()__, for a 5 round game, giving back the winner, and keeping score.

Possible cases:

Rocks Rocks
Paper Paper
Scissors Scissors (simple to verify: ===, being all lowercase, or uppercase)

Rocks Scissors
Rocks Paper
Paper Scissors (not so simple, one way is to write all possible cases, but it would be nice to find a better way)

The tie situation is simple, lets present possibilities if player is the winner with each hand, else we looses.


### PseudoCode

create a variable __computerSelection__ of type string;
create a variable __playerSelection__ of type string;



__playerInput__ is given by a case insensitive prompt(), choose between rock, paper or scissor__s__;
__playerSelection__ is __playerInput__.toLowerCase();
__computerSelection__ is given by 

function __computerPlay__
        randomly select ["rock", "paper", "scissors"]:
        let plays = ("rock", "paper", "scissors")
        let random= Math.floor(Math.random()*plays.length);
        __computerPlay__ = plays[random]
        returns __computerSelection__;

Function __playRound__ (__computerSelection__ , __playerSelection__)
        
        if __playerSelection__ === __computerSelection__
        return "It's a tie! ";
        
        if __playerSelection__ wins:
                __playerSelection__=== "rock" && __computerSelection__=== "scissors";
                __playerSelection__=== "paper" && __computerSelection__=== "rock";
                __playerSelection__=== "scissors" && __computerSelection__==="paper"

            return  "You win! "+ __playerSelection__ + " beats " + __computerSelection__";
       
        else __playerSelection__ Looses:

            return  "You Lose! "+ __computerSelection__ + " beats " + __playerSelection__";