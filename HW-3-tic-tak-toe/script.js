const tikTacToeField = [new Array(3), new Array(3), new Array(3)];

function createField() {
  htmlFieldString = '';
  tikTacToeField.forEach((elem, i) => {
    htmlFieldString += '<div class="row">';
    tikTacToeField.forEach((elem, j) => {
    htmlFieldString += `<div class="cell cell-${i}-${j}" data-i="${i}" data-j="${j}"></div>`;
  })
  htmlFieldString += '</div>';
  })
}

createField(tikTacToeField);

document.querySelector('.field').innerHTML = htmlFieldString;

function step() {
  let stepsCount = 0;

  tikTacToeField.forEach((elem, i) => {
    tikTacToeField.forEach((elem, j) => {
      if (tikTacToeField[i][j] !== undefined) {
        stepsCount++;
      }
    })
  })

  return stepsCount % 2 === 0;
}

step(tikTacToeField);

function onFieldClick(event) {
  const targetElement = event.target;
  const i = targetElement.dataset.i;
  const j = targetElement.dataset.j;
  
  if (tikTacToeField[i][j] !== undefined) {
    return;
  }

  tikTacToeField[i][j] = step() ? 'X' : '0';
  document.querySelector(`.cell-${i}-${j}`).innerHTML = tikTacToeField[i][j];
}

function winUserHorizontal() {
  tikTacToeField.forEach((elem, i) => {
    let counter = 0;
    let firstElementHorizontal = tikTacToeField[i][0];

    if (firstElementHorizontal !== undefined) {
      tikTacToeField.forEach((elem, j) =>  {
        if (firstElementHorizontal === tikTacToeField[i][j]) {
          counter++;
        }
      })

      if (counter === tikTacToeField.length) {{
        alert('Победил игрок: ' + firstElementHorizontal);
      }
      }
    }
  })
}

function winUserVertical() {
  tikTacToeField.forEach ((elem, j) => {
    let counter = 0;
    let firstElementVertical = tikTacToeField[0][j];

    if (firstElementVertical !== undefined) {
      tikTacToeField.forEach ((elem, i) => {
        if (firstElementVertical === tikTacToeField[i][j]) {
          counter++;
        }
      })

      if (counter === tikTacToeField.length) {
        alert('Победил игрок: ' + firstElementVertical);
      }
    }
  })
}

document.querySelector('.field').addEventListener('click', function (event) {
  onFieldClick(event), winUserVertical(), winUserHorizontal()
});

