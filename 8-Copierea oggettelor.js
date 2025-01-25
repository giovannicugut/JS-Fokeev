/*
//  ----- Copierea Variabililot----
let aa = 5
let bb = aa
console.log(aa)
console.log(bb)
*/
//-----------------------------------------------------


//------Copierea Oggettelor------------
/*
const a ={
    name:"Dima",
    eta:37
}
const b= a
a.eta= 25   //anche se abbiamo cambiato il valore al "a", si cambia autom. anche al "b" oggetto

console.log(a)
console.log(b)
*/


//------Copierea Oggettelor possibilita di cambiare i dati al interno---
/*
const a1 ={
    name:"Dima",
    eta:37
}
const b1 = Object.assign({},a1)  // "Object.assign({},nome del oggetto dove copiate)"  , e il cod. che permette copiare solo i dati dal interno, "{}"-indica che va copiato solo che ce dentro
a1.name="Ghiorghita"

console.log(a1)
console.log(b1)
*/


//---------------Stessa coso come (Object.assign() ) pero usando un altro metodo: {... nome del oggetto}
/*
const a2 ={
    name:"Dima",
    eta:37
}
const b2 = {... a2}  //ho usato {... nome oggetto},che copia solo i dati che sono dentro {}
a2.name="Steopka"

console.log(a2)
console.log(b2)
*/


//------------- copiare oggetto dentro oggetto------
/*
const a2 ={
    name:"Dima",
    eta:37,
    tara:{              //oggetto dentro oggetto
        oras:"falesti",
        satul:"Glinjeni"
    }
}
const b2 = {... a2}  
a2.tara.satul= "Calugar" // aici sa comportat diver shi a schimbat satul in al 2 oggett. ca sa poti copia shi modifica datele din al 2 ogget folosim JSON

console.log(a2.tara.satul)
console.log(b2.tara.satul)
*/


//-----------copierea shi possibilita di modif oggette dentro oggette con JSON----
/*
const a3 ={
    name:"Dima",
    eta:37,
    tara:{              //oggetto dentro oggetto
        oras:"falesti",
        satul:"Glinjeni"
    }
}

const b3= JSON.parse(JSON.stringify(a3))  //"JSON.parse()"-converte in formato JSON, e "(JSON.stringify()"-riconverte in fortato JScript, cosi
a3.tara.satul ="Egorovca"                 // le modifiche fatti non cabiano sul sec.oggetto                          

console.log(a3.tara.satul)
console.log(b3.tara.satul)
*/

