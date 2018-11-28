document.addEventListener('DOMContentLoaded', function () {
  // Add code here
  const board = document.getElementById('board');

  createBoard(10, 10);

  function createBoard(rowSize, colSize) {
    for (let i = 0; i < rowSize; i++) {
      let divRow = document.createElement("div");
      divRow.setAttribute("class", "row")
      board.appendChild(divRow);
      for (let j = 0; j < colSize; j++) {
        let cell = divRow.appendChild(document.createElement("div"));
        cell.className = "col";
        cell.addEventListener("click", () => {
          console.log("Clicked!!!")
        });
      };
    }
    return board;
  }


});

//grid in js 
//grid parameter size can change


const clickCheck = () => {
  if (clicked === false) {
    clickDiv.style.backgroundColor = "red";
    clicked = true;
  } else {
    clickDiv.style.backgroundColor = "white";
    clicked = false;
  }
};