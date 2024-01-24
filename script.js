let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-container");
let msg1=document.querySelector("#msg");
let newGameBtn=document.querySelector(".new");
let turn0=true; //playerX,player0

const winPattern=[
         [0,1,2],
         [0,3,6],
         [0,4,8],
         [1,4,7],
         [2,5,8],
         [2,4,6],
         [3,4,5],
         [6,7,8]];

//Add the event listener
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button was clicked");
        if(turn0){
            box.innerText='O';
            turn0=false;
        }else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

 const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val ===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }

        }
    }
};

const showWinner=(winner)=>{
    msg1.innerText=`Congartulation,The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetBtn=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


newGameBtn.addEventListener("click",resetBtn);
resetbtn.addEventListener("click",resetBtn);
