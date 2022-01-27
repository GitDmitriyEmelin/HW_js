// Нарисовать пирамиду с помощью console.log, как показано на 
// рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 'x'; i.length <= 20; i.concat('x')) {
    console.log(i)
}