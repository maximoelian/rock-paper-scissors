
let humanScore = 0;
let computerScore = 0;


for(let i = 1; i <=5; i++){
    playGame();
}
if( humanScore == computerScore ) finalResult = "it's a draw! you are to good!";
else if (humanScore > computerScore)finalResult= "You win!"
else finalResult="the computer win! Better luck next time.";
console.log(finalResult);


function getHumanChoice(choice){
    let chosen = "";
    if(choice ==1 ){
        chosen = "rock";
    }
    else if(choice ==2){
        chosen = "paper";
    }
    else if(choice == 3){
        chosen = "scissor";
    }else{
        chosen= "ERROR. select a number from 1 to 3."
    }
    return chosen;
}



function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    let string =""
    if(num == 0){
        string = "rock"
    }
    else if(num ==1){
        string= "paper";
    }
    else if(num ==2){
        string="scissor";
    }
    return string;
}


function playRound(humanChoice,computerChoice)
{
    let result = ""
    switch(humanChoice){
        case "rock":
            if(computerChoice == "rock") result = "it's a tie!";
            else if(computerChoice == "paper")result="Computer win!", computerScore++;
            else if (computerChoice == "scissor") result ="You win!",humanScore++;
            break;
        case "paper":
            if(computerChoice == "rock") result = "You win!",humanScore++;   
            else if(computerChoice == "paper")result= "it's a tie!";
            else if (computerChoice == "scissor") result = "Computer win!", computerScore++;
            break;
        case "scissor":
            if(computerChoice == "rock") result = "Computer win!", computerScore++;
            else if(computerChoice == "paper")result= "You win!",humanScore++;   
            else if (computerChoice == "scissor") result = "it's a tie!";
            break;       
    }
    return result;
}


function playGame(){
    let humanChoice = prompt("1.Rock 2.paper 3.scissor");
    const humanSelection = getHumanChoice(humanChoice);
    const computerSelection = getComputerChoice();
    result = playRound(humanSelection,computerSelection);
    console.log("your choice is:" + humanSelection);
    console.log("The computer choice is:"+  computerSelection);
    console.log(result)
    console.log("your score is:" + humanScore);
    console.log("the computer score is:" + computerScore);
    
}
