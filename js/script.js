/*=============================
CACHED DOM NODES
 ===================*/
 const buttons = document.querySelectorAll("button");
 const row1 = document.querySelectorAll(".row1");  //caches rows 1-6 of circles on board
 const row2 = document.querySelectorAll(".row2");
 const row3 = document.querySelectorAll(".row3");
 const row4 = document.querySelectorAll(".row4");
 const row5 = document.querySelectorAll(".row5");
 const row6 = document.querySelectorAll(".row6");
 const circle1 = document.querySelector("#circle1");
 const winDisplay = document.querySelector("h3");
/*=======================
GLOBAL VARS
====================*/
boardArray = [];
  boardArray[0] = row6;  // puts all of the rows of circles into one array
  boardArray[1] = row5;
  boardArray[2] = row4;
  boardArray[3] = row3;
  boardArray[4] = row2;
  boardArray[5] = row1;

turn = "red";
win = false;
let numRows = 6;
let numColumns= 7;
/*===========================
FUNCTIONS
=============================*/
function changeColumnColor(column){  //changes color of topmost uncolored circle div in column to red or yellow
  for(const row of boardArray){
    if (row[column].className.includes("white")){ //if circle div includes class white change the color to the color of "turn"
      row[column].classList.add(turn);
      row[column].classList.remove("white");
      break;
    }
  }
  changeTurn();
  winCondition();
  //test();
}

function changeTurn() { //changes turn
  if (turn === 'red'){
    turn = 'yellow';
  }else{
    turn = 'red';
  }
}

function winCheckRow(){
   let winRedCounter = 0;
  let winYellowCounter = 0;

  for(const row of boardArray){
    for(const column of row){
      if (column.className.includes("red")){
        winRedCounter += 1;
        winYellowCounter = 0;
      } else if(column.className.includes("yellow")) {
        winYellowCounter += 1;
        winRedCounter = 0;
      } else if (column.className.includes("white")) {
        winYellowCounter = 0;
        winRedCounter = 0;
      }
      if (winRedCounter >= 4 || winYellowCounter >= 4){
        win = true;
      }

    }
    winYellowCounter = 0;
    winRedCounter = 0;
  }
}

function winCheckColumn(){
    let winRedCounter = 0;
    let winYellowCounter = 0;

    for(let i = 0; i < 7; i++){
      for(let j = 0; j < 6; j++){
        console.log("j is " + j);
        console.log("i is " + i);
        console.log(`winRedCounter is ${winRedCounter}`);
        console.log(`winYellowCounter is ${winYellowCounter}`);
        if (boardArray[j][i].className.includes("red")){
          winRedCounter += 1;
          winYellowCounter = 0;
        }else if (boardArray[j][i].className.includes("yellow")){
          winYellowCounter += 1;
          winRedCounter = 0;
        }else if (boardArray[j][i].className.includes("white")){
          winYellowCounter = 0;
          winRedCounter = 0;
        }
        if (winRedCounter >= 4 || winYellowCounter >= 4){
          win = true;
        }

      }
      winYellowCounter = 0;
      winRedCounter = 0;
    }
}

function winCheckDiagonal(){
  
}


function winCondition(){
  winCheckRow();
  winCheckColumn();
  if (win === true){
    winDisplay.innerHTML = "Win";
  }
}

/*=============================
EVENT LISTENERS
===============================*/
buttons[0].addEventListener('click',function(){
  changeColumnColor(0);
});
buttons[1].addEventListener('click',function(){
  changeColumnColor(1);
});
buttons[2].addEventListener('click',function(){
  changeColumnColor(2);
});
buttons[3].addEventListener('click',function(){
  changeColumnColor(3);
});
buttons[4].addEventListener('click',function(){
  changeColumnColor(4);
});
buttons[5].addEventListener('click',function(){
  changeColumnColor(5);
});
buttons[6].addEventListener('click',function(){
  changeColumnColor(6);
});


// function changeColumnColor(column){  //changes color of topmost uncolored circle div in column to red or yellow
//
//
//   if(boardArray[0][column].className.includes("white")){
//     boardArray[0][column].classList.add(turn);
//     boardArray[0][column].classList.remove("white");
//   }
//
//   changeTurn();
// }
