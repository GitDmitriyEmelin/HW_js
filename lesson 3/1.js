let i = 1
let n = 100


function isPrime(number) {
    if (number <= 1) {
    return false
    }
    let start = 2;
    // Введем переменную limit, которая будет равна
    // корню проверяемого числа (простое или нет) для
    // уменьшения количества операций (актуально для 
    // больших последовательностей чисел)
    const limit = Math.sqrt(number) 
    while (start <= limit) {
        if (number % start === 0) {
            return false
        }
        start++
    }
    return true
}

// Передаем в функцию i, если функция вернула true,
// то выводим в консоле это значение, затем увеличивем
// i на 1
while (i <= n) {
    if (isPrime(i)) {
    console.log(i)
    }
    i++
}