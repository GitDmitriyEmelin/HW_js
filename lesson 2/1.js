// Объяснить, почему код ниже даёт именно такие результаты?

var a = 1, b = 1, c, d; 
c = ++a; alert(c); // 2 (Сначала а = 1, затем к ней прибавляется 1 (++а), потом выводится результат)
d = b++; alert(d); // 1 (Сначала b = 1, затем выводится результаnт, потом к ней прибавляется 1 (b++))
c = (2+ ++a); alert(c); // 5 (а = 2, затам к ней прибавляется еденица (++а), теперь а = 3; 2 + 3 = 5)
d = (2+ b++); alert(d); // 4 (b = 2, затем (2 + 2), результат присваивается переменной d, затем к b 
                        // прибавляется 1 (b++), если еще раз вызвать переменную d, то она уже будет равняться 5)
alert(a); // 3 (в переменную а уже записан результат 3)
alert(b); // 3 (в пердыдущем вызове b = 2, но есть выражение b++, те есть, если еще раз вызвать переменную b, 
          // то к ней прибавится еденица)