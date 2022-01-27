// Реализовать основные арифметические операции: сложение, вычитание, умножение, деление.
// Сделать их в виде функций с двумя параметрами.

export function sum(a, b) {
    console.log(a + b)
}

export function subtract(a, b) {
    console.log(a - b)
}

export function multiplicat(a, b) {
    console.log(a * b)
}

export function divide(a, b) {
    if (b === 0) {
        console.log('Делить на 0 нельзя')
        return
    }
    console.log(a / b)
}