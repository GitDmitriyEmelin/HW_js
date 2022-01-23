// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций, 
// используя функции из пункта 5, и вернуть полученное значение, используя switch.

import { divide, multiplicate, subtract, sum } from "./5";

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            sum(arg1, arg2)
        case 'subtract':
            subtract(arg1, arg2)
        case 'multiplicate':
            multiplicate(arg1, arg2)
        case 'divide':
            divide(arg1, arg2)
    }
    
}

