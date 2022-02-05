// Написать функцию, преобразующую число в объект. Передавая на вход число 
// от 0 до 999, мы должны получить на выходе объект, в котором в 
// соответствующих свойствах описаны единицы, десятки и сотни. Например, 
// для числа 245 мы должны получить следующий объект: 
// {'единицы': 5, 'десятки': 4, 'сотни': 2}. Если число превышает 999, 
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть 
// пустой объект.


function objectNumber(number) {
    if (typeof number !== 'number') {
        console.log('Передаваемое значение должно быть числом');
        return {};
    }
    if (number < 0 || number > 999) {
        console.log('Число должно быть от 0 до 999');
        return {};
    }
    let strNumber = number.toString();
    let strNumbersArray = strNumber.split('').reverse();
    return {
        'единицы': +strNumbersArray[0],
        'десятки': +strNumbersArray[1],
        'сотни': +strNumbersArray[2],
    };
}

let result = objectNumber(745);
console.log(result);