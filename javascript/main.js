function hover(element) {
    element.setAttribute('src', 'images/play-button-push.png');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'images/play-button-w.png');
  }

document.getElementById('rock').onclick = playerSelection;
document.getElementById('paper').onclick = reply_click;
document.getElementById('scissors').onclick = reply_click;
    

        function game(){
            //Setup Variables to use later
            let i = 0;
            let playerScore = 0;
            let computerScore = 0;
            let playerQuit = 0;
                //Initiate a while loop to repeat game 5 times
                do {
                    i += 1;
                    //Prompt human player to choose between rock, paper and scissors
                    let playerSelection = prompt ("Pick: Rock, Paper or Scissors?");
                    //If player selection is not null, convert his choice to lower case,
                    if (playerSelection != null){
                        let playerSelectionL = playerSelection.toLowerCase();
                        //then confirm that player input is between either rock, paper or scissors only
                        if (playerSelectionL === "rock" || playerSelectionL === "paper" || playerSelectionL === "scissors"){
                            //If player choice correct, next let computer pick a choice
                            function computerPlay() {
                                let choices = ["rock", "paper", "scissors"];
                                let compSelection = Math.floor(Math.random() * choices.length);
                                return compChoice = choices[compSelection];
                            }
                            computerPlay();
                            //At each of the 5 game rounds, compare player selection to computer selection, pick a winner 
                            //for current game session, keep track and update players scores
                            function playRound(playerSelectionL, compChoice){
                                if (playerSelectionL === compChoice) {playerScore = ++playerScore; computerScore = ++computerScore;
                                    return `It\'s a tie! you both chose ${playerSelectionL}.`;
                                } else if (playerSelectionL === "rock" && compChoice === "paper") {computerScore = ++computerScore;
                                    return `You lose! ${compChoice} beats ${playerSelectionL}.`;
                                } else if (playerSelectionL === "rock" && compChoice === "scissors") {playerScore = ++playerScore;
                                    return `You Win! ${playerSelectionL} beats ${compChoice}.`;
                                } else if (playerSelectionL === "paper" && compChoice === "rock") {playerScore = ++playerScore;
                                    return `You Win! ${playerSelectionL} beats ${compChoice}.`;
                                } else if (playerSelectionL === "paper" && compChoice === "scissors") {computerScore = ++computerScore;
                                    return `You lose! ${compChoice} beats ${playerSelectionL}.`;
                                } else if (playerSelectionL === "scissors" && compChoice === "rock") {computerScore = ++computerScore;
                                    return `You lose! ${compChoice} beats ${playerSelectionL}.`;
                                } else if (playerSelectionL === "scissors" && compChoice === "paper") {playerScore = ++playerScore;
                                    return `You Win! ${playerSelectionL} beats ${compChoice}.`;
                                }
                            }
                            //At each game session, display player choice and computer choice
                            console.log(`Player chose: ${playerSelectionL}, Computer chose: ${compChoice}`);
                            //Pull data from the playRound function so that...
                            console.log(playRound(playerSelectionL, compChoice));
                            //...at each game session, we can display current player score and current computer score
                            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
                        } else {
                            //If player typed anything other than rock, paper or scissors 
                            //in the prompt, display this
                            console.log("Poop! Allowed choices are Rock, Paper or Scissors! Please pick one."); 
                            //then remove 1 iteration so that player can still play 5 games
                            i = i - 1;
                        }
                    } else {
                        //If player input is null, display this
                        console.log("Poop L!. Game quit by player.");
                        //Quit flag
                        playerQuit =+ 1;
                        break;
                    }
              //Start the loop over if number of games is less than 5
            } while (i < 5);
            //Check if player quit and if not...
            if (playerQuit < 1){
                //...display the final score comparison and declare a winner
                if (playerScore === computerScore) {
                                    console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. It's a tie!`);
                                } else if (playerScore > computerScore) {
                                    console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. You won!`);
                                } else if (playerScore < computerScore) {
                                    console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. You lost!`);
                                }
            }                    
        } 
        //Run the game
        //game();