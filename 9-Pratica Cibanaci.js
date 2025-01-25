/* 

ЗАДАЧА:

1. - Вам необходимо создать последовательность Фибоначи.

Последовательность выглядит так:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

Каждое число в этой последовательности - это сумма двух пред ведущих чисел.

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
...
И так далее.

2. - Создайте функцию, которая будет принимать в себя 1 параметр. 
1 параметр - это количество чисел которые вы хотите получить в вашей последовательности.


ПОДСКАЗКА:
1. - Задачу можно решить разными способами. Можно создать условное ветвление с помощью только else if. Можно вместе с else if использовать цикл for. 
2. - Попробуйте сначала, прописать логику вашей функции на листке бумаги, то как она будет работать, шаг за шагом.
3. Результат вашей последовательности запишите в пустую переменную - массив, например output = []

*/


/*
function add (n){
    let out = []   //una scatola vuota,( la preparo per agiungere i numeri del resultato)

    if (n===1){   //se n sara =1 risposta sara [0,1]( posso scrivere che ci pare)
        out=[0,1]
    }else{
        out=[0,1]  //scelgo che sara agiunto nella scatola
        for (i=2; i<n; i++){
            out.push(out[out.length-2]+ out[out.length-1]) //la formula che penultimo sara + piu ultimo e aggiunto un coda
        }
    }
    return out
}

const fin =add(9)   //attivo la funzione e metto un nr a caso,cosi fara quel Nr. di volte
console.log(fin)
*/