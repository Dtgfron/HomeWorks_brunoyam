function main() {
  const tikTacToeField = [new Array(3), new Array(3), new Array(3)];

  function createField(field) {
    htmlFieldString = '';
    field.forEach((elem, i) => {
      htmlFieldString += '<div class="row">';
      field.forEach((elem, j) => {
        htmlFieldString += `<div class="cell cell-${i}-${j}" data-i="${i}" data-j="${j}"></div>`;
      })
      htmlFieldString += '</div>';
    });
  }

  createField(tikTacToeField);

  document.querySelector('.field').innerHTML = htmlFieldString;
  
  document.querySelector('.field').addEventListener('click', 
  function(event) {
    onFieldClick(event, tikTacToeField),
    showWinner(tikTacToeField)
  });
}
                                                  
function getCurrentPlayerSymbol(field) {
  let stepsCount = 0;

  field.forEach((elem, i) => {
    field.forEach((elem, j) => {
      if (field[i][j] !== undefined) {
        stepsCount++;
      }
    });
  });
  return stepsCount % 2 === 0;
}

function onFieldClick(event, field) {
  const targetElement = event.target;
  const i = targetElement.dataset.i;
  const j = targetElement.dataset.j;

  if (field[i][j] !== undefined) {
    return;
  }

  field[i][j] = getCurrentPlayerSymbol(field) ? 'X' : '0';
  document.querySelector(`.cell-${i}-${j}`).innerHTML = field[i][j];
}

function showWinner(field) {
  field.forEach((elem, i) => {
    let counter = 0;
    let firstElementHorizontal = field[i][0];

    if (firstElementHorizontal !== undefined) {
      field.forEach((elem, j) => {
        if (firstElementHorizontal === field[i][j]) {
          counter++;
        }
      });

      if (counter === field.length) {
        {
          alert('Победил игрок: ' + firstElementHorizontal);
        }
      }
    }
  });
  
  field.forEach((elem, j) => {
    let counter = 0;
    let firstElementVertical = field[0][j];

    if (firstElementVertical !== undefined) {
      field.forEach((elem, i) => {
        if (firstElementVertical === field[i][j]) {
          counter++;
        }
      });

      if (counter === field.length) {
        alert('Победил игрок: ' + firstElementVertical);
      }
    }
  });
}

main();

