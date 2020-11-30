'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start= alert ('Угадай число от 1 до 100.');

let game = function number() {

    const n = Math.floor(1 + Math.random() * (100));
    console.log(n);
    

    function guessNumber(numberStep) {

        let i = numberStep - 1;
        let yourNumber = prompt('Введите число:');
            
        if(yourNumber === null) {

            alert('Игра окончена.');
                numberStep = 0;

        } else if(!isNumber(yourNumber)) {
            
            alert('Введи число.');
            
        } else if(+yourNumber < n && +yourNumber !== 0) {

            alert('Загаданное число больше');

        } else if(+yourNumber > n) {

            alert('Загаданное число меньше');

        } else if(+yourNumber === n) {
            
            alert('Поздравляю, Вы угадали!!!');
             numberStep = 0;
        }

        if(numberStep > 0) {
            guessNumber(numberStep);
        }
    }
    
    return guessNumber(6);    
};

game();
 console.dir(game);


    
       




