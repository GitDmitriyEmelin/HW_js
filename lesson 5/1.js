// Создать функцию, генерирующую шахматную доску. Можно использовать 
// любые HTML‑теги. Доска должна быть верно разлинована на черные 
// и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
// столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function generateBoard() {
    let board = document.getElementById("board");
    
    // генерация строки с буквами
    let charArray = ['A','B','C','D','E','F','G','H'];
    let charEl = document.createElement("div");
    let rowElement = document.createElement("div");
    rowElement.className = 'row';
    charEl.classList.add('cell');
    rowElement.appendChild(charEl);
    
    for (let char of charArray) {
        let charEl = document.createElement("div");
        charEl.classList.add('cell');
        charEl.innerHTML = char;
        rowElement.appendChild(charEl);
    }
    board.appendChild(rowElement);

    // генерация строк шахматной доски (поля)
    for (let i = 8; i > 0; i--) {
        let rowElement = document.createElement("div");
        rowElement.className = 'row';
        let numberElement = document.createElement("div");
        numberElement.classList.add('cell');
        numberElement.innerHTML = i;
        rowElement.appendChild(numberElement);
        for (let j = 1; j <= 8; j++) {
            let cellElement = document.createElement("div");
            cellElement.classList.add('cell');
            if (isEven(i)) {
                if (isEven(j)) {
                    cellElement.classList.add('black');
                } else {
                    cellElement.classList.add('white');
                }       
            } else {
                if (isEven(j)) {
                    cellElement.classList.add('white');
                } else {
                    cellElement.classList.add('black');
                }       
            }
            rowElement.appendChild(cellElement);
        }
        board.appendChild(rowElement);
    }
}
function isEven(number) {
    return number % 2 === 0;
}
generateBoard()