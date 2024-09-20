let boxes=document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset-btn");
let newbtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

  let turn0=true; //player0

let count=0;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// for drow condiction
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

// reset button
const restGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// click any button
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Button was clicked");

        if(turn0){
            //turn player0
            box.innerText="0";
            turn0=false; 
        }else{
            // turn player X
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        count++;

        let isWinner = checkWinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

// to disable all winner
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
// to enable all winner
const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const shoWinner = (winner) =>{
     msg.innerText=`Conguratulaction, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// check winner

const checkWinner=() =>{
    for(let pettern of winpatterns){
    
     let pos1val=boxes[pettern[0]].innerText;
     let pos2val=boxes[pettern[1]].innerText;
    let pos3val=boxes[pettern[2]].innerText;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        
        if( pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            shoWinner(pos1val);
            return true;
        }
    }
    }
};

newbtn.addEventListener("click", restGame);
resetbtn.addEventListener("click", restGame);
