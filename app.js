let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpartterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");
}
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}



const checkWinner = () => {
    for (pattern of winpartterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {

            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val)
            };


        }
    }
};


newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


