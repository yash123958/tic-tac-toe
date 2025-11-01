let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset');
let messagecontainer = document.querySelector('.msg-container');
let message = document.querySelector('#msg');
let turnx = true;

const winningpatterens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turnx=true;
    enabled();
    messagecontainer.classList.add("hide");

}
const diasabled =(winner)=>{
    for(let box of boxes){
        box.disabled = true;
    }

}
const enabled =(winner)=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }

}
const showwinner = (winner) => {
    message.innerText = `${winner} is the winner!`;
    messagecontainer.classList.remove("hide");
    diasabled(winner);
};

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        console.log("box clicked");

        if (turnx) {
            boxes[i].innerText = 'X';
            turnx = false;
        } else {
            boxes[i].innerText = '0';
            turnx = true;
        }

        boxes[i].disabled = true;
        checkwin();
    });
}

const checkwin = () => {
    for (let i = 0; i < winningpatterens.length; i++) {
        let [a, b, c] = winningpatterens[i];

        let pos1 = boxes[a].innerText;
        let pos2 = boxes[b].innerText;
        let pos3 = boxes[c].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showwinner(pos1);
            }
        }
    }
};
resetButton.addEventListener('click', resetgame);