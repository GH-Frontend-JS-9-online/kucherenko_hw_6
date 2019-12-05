"use strict"

 let arr =[12,3435,32,105,902, 728,];
        document.getElementById('array').innerHTML = ('Заданный массив:  ' + arr + '<br>');
       
        
// 1.Find in array: sum, min and max, replace min and max - create custom functions 
       
        function summ(){
            let result = arr.reduce(function(sum, current) {return sum + current;
            });
			document.getElementById('sum').innerHTML = 'Сумма всех элементов массива:  ' + result;
        };
     

        

        function min(){
            let min=Math.min(...arr);
           document.getElementById('min').innerHTML = ('Минимум в масиве:  ' + 'min = ' + min + '<br>');
        };
        min();

        function max(){
            let max=Math.max(...arr);
            document.getElementById('max').innerHTML = ('Максимум в масиве:  ' + 'max = ' + max + '<br>');
        };
        max();

        function replace(){
            min=Math.max(...arr),
            max=Math.min(...arr);

           document.getElementById('mins').innerHTML = ('Измененный минимум:  ' + 'min = ' + min + '<br>');
           document.getElementById('maxs').innerHTML = ('Измененный максимум:  ' + 'max = ' + max + '<br>');
        };
        replace();

// 2.Create function which will return function with callback in arguments

function forCallback (){
	document.getElementById('callback').innerHTML = ("Это функция, которая будет вызвана в другой функции, при необходимости.");
}; 
        function create(callback){ 
            callback(); 
        };
 create(forCallback);

         // 3.Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.

          function foobar(){
            for (let i=0; i< arr.length; i++){
                if((arr[i]% 3==0) && (arr[i]% 7==0)){
                    arr[i]='foobar';
                }
                else
                    if((arr[i]%3)==0){
                    arr[i]='foo';
                }
                else
                    if((arr[i]%7)==0){
                    arr[i]='bar';
                }
            }
            document.getElementById('foobar').innerHTML = (arr)
        ;}
        foobar();


        // 4.Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.

         function twixString(strFirst,strSecond){
            strFirst = prompt('Введите 1 строку для сравнения');
            strSecond = prompt('Введите 2 строку для сравнения');
            document.getElementById('string').innerHTML = (strFirst + '<br>' + strSecond);
            let count = 0;
          for (let i = 0;   i<strFirst.length; i++){
            if (strFirst[i] === strSecond[i]) {
                console.log(strFirst[i] + ' - ' + strSecond[i]);
                count++;
              } 
            }
          let percent;
            if (strFirst.length >= strSecond.length){
                percent = (count/strFirst.length)* 100 + '%';
            }
            else
                {percent = (count/strSecond.length)* 100 + '%';};
         document.getElementById('percent').innerHTML = ('<br>' + "Процент совпадений:  " + percent);
        }
        twixString();