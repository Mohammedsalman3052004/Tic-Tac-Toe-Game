let boxes = document.querySelectorAll(".box");
let newButton = document.querySelector("#new-btn");
let resetButton = document.querySelector("#reset-btn");
let message = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; 
let count = 0;

let winningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswin = checkWinner ();

        if(count === 9 && !iswin){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    message.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const messageContainer = (winner) => {
    message.innerText = `Congraulation, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winningPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    
        if(val1 !="" && val2 != "" && val3 !=""){
            if(val1 === val2 && val1 === val3){
                console.log("winner", val1);
                messageContainer(val1);
            }
        }
    }
};

newButton.addEventListener("click", resetgame);
resetButton.addEventListener("click", resetgame);