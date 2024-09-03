
let string = "";
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)

    if(num == 0){
        string = "rock"
    }
    else if(num ==1){
        string= "paper";
    }
    else{
        string="scissor";
    }
    return string;
}


console.log(getComputerChoice());