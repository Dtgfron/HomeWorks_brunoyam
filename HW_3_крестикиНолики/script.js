tikToeField = [new Array(3), new Array(3), new Array(3)];

htmlFieldString = '';

for (let i = 0; i < tikToeField.length; i++) {
  htmlFieldString = htmlFieldString + '<div class="row">';
  for (let j = 0; j < tikToeField.length; j++) {
    htmlFieldString += `<div class="cell cell-${i}-${j}" data-i="${i}" data-j="${j}"></div>`; // лучше было клетки сделать в виде buttons или через div class="tabindex"
  }
  htmlFieldString += '</div>';
}


document.querySelector('.field').innerHTML = htmlFieldString;
// эта часть работает

function step(tikToeField) {
  let stepsCount = 0;

  for (let i = 0; i < tikToeField.length; i++) {
    for (let j = 0; j < tikToeField.length; j++) {
      if (tikToeField[i][j] !== undefined) {
        stepsCount++;
      }
    }
  }

  return stepsCount % 2 === 0;
}

function onFieldClick(event, tikToeField) {
  const targetElement = event.target;
  const i = targetElement.dataset.i;
  const j = targetElement.dataset.j;

  if (tikToeField[i][j] !== undefined) {
    return;
  }

  tikToeField[i][j] = step(tikToeField) ? 'X' : '0';      // лучше обрабатывать ячейки (массив) в js, чем обращаться к html. Будет дольше работать. Тут верно
  document.querySelector(`.cell-${i}-${j}`).innerHTML = tikToeField[i][j];

 if (winUserHorizontal()) {
				alert('Победил игрок: ' + (winUserHorizontal()));
}
if (winUserVertical()) {
  alert('Победил игрок: ' + (winUserVertical()));
}
}


  function winUserHorizontal() {
    for (let i = 0; i < tikToeField.length; i++) {
    let counter = 0;
    let firstElementHorizontal = tikToeField[i][0];

    if (firstElementHorizontal !== undefined) {
        for (let j = 0; j < tikToeField.length; j++) {
            if (firstElementHorizontal === tikToeField[i][j]) {
                counter++;
            }
        }

      if (counter === tikToeField.length) {
            return firstElementHorizontal;
      }
    }
  }
}

function winUserVertical() {                        
  for (let j = 0; j < tikToeField.length; j++) {
    let counter = 0;
    let firstElementVertical = tikToeField[0][j];

    if (firstElementVertical !== undefined) {
      for (let i = 0; i < tikToeField.length; i++) {
        if (firstElementVertical === tikToeField[i][j]) {
          counter++;
        }
      }

      if (counter === tikToeField.length) {
        return firstElementVertical;
      }
    }
  }
}



document.querySelector('.field').addEventListener('click', function (event) {
    onFieldClick(event, tikToeField, winUserHorizontal, winUserVertical);
});
