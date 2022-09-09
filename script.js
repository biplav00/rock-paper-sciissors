const choices = ["rock","paper","scissors"]
const winners = []


function game(){
    for(i=1; i<=5;i++){
        playGame(i);
    }
    logWins();
}

function playGame(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}




function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerChoice(){
    let input = prompt("Enter your choice (Rock, Paper or Scissors)");
    while(input == null)
    {
        input = prompt("Enter your choice (Rock, Paper or Scissors)") ;
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
        input = prompt("Enter the proper choice (Rock, Paper or Scissors)") ;
        while(input == null){
        input = prompt("Enter your choice (Rock, Paper or Scissors)") ;
    }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}

function validateInput(input){
    if(choices.includes(input)){
        return true;
    }return false;
}

function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC){
        return "Tie";
    }else if(
        (choiceP === "rock" && choiceC == "scissors")||
        (choiceP === "paper" && choiceC == "rock")||
        (choiceP === "scissors" && choiceC == "paper")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}


function logWins(){
    let playerWins = winners.filter((item)=> item == "Player").length;
    let computerWins = winners.filter((item)=> item == "Computer").length;
    let ties = winners.filter((item)=> item == "Tie").length;

    console.log('Resuts:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);

}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round :',round);
    console.log('Player Chose   : ', playerChoice);
    console.log('Computer Chose : ', computerChoice);
    console.log(winner, 'Won the Round!');
    console.log('------------------------------------');
}
