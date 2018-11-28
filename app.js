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
          clicked = false;
          clickCheck(cell);
        });
      }
    }
    return board;
  };

  const clickCheck = (cellClicked) => {
    if (clicked === false) {
      cellClicked.setAttribute("background", randomColor());
      clicked = true;
    } else {
      clicked = false;

    }
  };

  const randomColor = () => {
    const hexValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];  //Hexadecimal goes up to 0-9 the A-F
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexValue[(Math.floor(Math.random() * 16))];
    }
    return hexColor;
  };
});

//grid in js 
//grid parameter size can change


