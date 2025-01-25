
/*  qui separa i nr. che viniscono con "raZa"  ex:3raza
for (i=1;i<=20;i++){
    if(i<=4 && i>1){
        console.log(` ${i}nr finisce con raZA`)
    } else if(i>=12 && i<=14){
        console.log(` ${i}nr finisce con raZA`)
    }else{
        console.log(`${i} e normale`)
    }
}
*/

 


/*
const arr =[]
const by =[
            "dor",
            25,
            true,
            15,
            "faci"
          ]
for(i=0;i<by.length;i++){
    arr.push(typeof by[i])
} 
console.log(arr)

for(i=0; i<by.length; i++){
     if(typeof by[i] !=="string") continue  //!== segnifica daca nu e o stringa egnora shi mergi m departe
     console.log(by[i])
}

*/

const gree =[
    "ram",
    "tav",
    15,
    false,
    18,
    "go",
    
]

/*      CONTINUE
const est = []

for(i=0; i<gree.length;i++){
   if(typeof gree[i]!=="number") continue // daca e diver ,atunco prosta continua
est.push(gree[i])
}
console.log(est)
*/


/*     BREAK
for(i=0; i<gree.length;i++){
    if(typeof gree[i]==="number") break  //appena trova un Nr. si ferma
    console.log (gree[i])
}
    */

/*   un altro con BREAK
 for(i=0; i<gree.length; i++){
    if(gree[i] === 15)  break  //  //appena trova un Nr. 15 si ferma
    console.log(gree[i])
 }

 */



                      //ESECRIZI
/*
 //  1  Scrivi un ciclo for che stampa i numeri da 1 a 10, ma salta i numeri pari.
 for(i =0; i<=10;i++){
    if(i % 2 ===0) continue

    console.log(i)
 }
 */
//---------------------------------------------------------------------------

 /*
   //  2 Scrivi un ciclo for che stampa le lettere di una stringa, ma salta le vocali (a, e, i, o, u).
    let parola = "javascriptu";
    for (let i = 0; i < parola.length; i++) {
        if(["a","u","i"].includes(parola[i])) continue
        console.log(parola[i])
  }
*/
//-------------------------------------------------------------------------------

// 3 Scrivi un ciclo for che stampa i numeri da 1 a 20, ma salta i numeri divisibili per 3.
/*
for(i=0;i<=20;i++){
if(i % 3 ===0)  continue
  console.log(i)
}
*/

//---------------------------------------------------------------------------

// 4 Scrivi un ciclo for che stampa i numeri da 1 a 15, ma salta i numeri che contengono la cifra 5.
 /*
 for(i=1; i<=15;i++){
    if(i.toString().includes("5")) continue
        console.log(i)
 }
*/