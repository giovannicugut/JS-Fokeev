
/* ---------OGGETTI con PUNTO----------------------------

const mik= {
    nome: "Ghita",
    anni: 30,
    citta:"NewY"
}
console.log(mik.citta)  // Nel caso che voule vedere solo una proprieta dalla lista

mik.nome= "Anna"
console.log(mik.nome)  // ho cambito il nome da"Ghita " in"Anna

mik.gen= "mujik"  // ho agiunto un proprieta alla lista de sus
console.log(mik)

delete mik.gen  // ho cancellato "gen dalla lista"
console.log(mik)
*/


//-----------OGGETTI con [" "] del posto di . punto---------------------

/*
const kok={
    nome:"Nik",
    eta: 10
}
kok["gen"] ="fem"  // agiungo una proprieta alla lista kok
console.log(kok)

const fem="Nata" //una nuova constante
kok[fem]= "Leon" //uttilizo il valore della constate e aggiungo sulla lista kok con un nuovo valore

console.log(kok["Nata"])


const gri= prompt("sceglie tra:   nome, eta, gen, Nata")
alert(kok[gri])

*/



//-----------Oggetto dentro l'Oggetto----------------

/*
 const fer ={
    nome: "Misa",
    eta: 30 ,
    provenenz : {
        tara: "moldova",
        oras: "egorovca"
    }
 }
 console.log(fer)
 console.log(fer.provenenz.oras)

 */


 //------------ Scorcetoia per scrivere meno unsando la VIRGOLA

 /*
    ---// modo lungo(senza virgola)   
 const nume = "Ion"
 const famil = "pirvu"

 const gor ={
        nume:nume,
        famil: famil
 }
 console.log(gor)
*/


      /*
     ---//mod scurt( usando la VIRGOLA)
   
     const nume = "Ion"
     const famil = "pirvu"
    
     const gor ={
            nume,  //non si usa :
            famil,  // obligatori scrito uguale come la constanta
     }
     console.log(gor)
     */



     //------------------------------OGGETTO che contoiene una FUNCTION --------------------------------------------------------------

     /*
  // con function expression ( si trova dentro a unavariabile)
     const nume = "ion"
     const famil = "burdeniuk"

     const fre = {
        nume,
        famil,
        anno:1987,
       unafun: function(){  // <-- function expresion --MODO LUNGO--
        return 2025-this.anno
       }
     }
     console.log(fre.unafun())


     const fre2 = {
        nume,
        famil,
        anno:2000,
       unafun (){  // <-- function expresion --MODO CORTO--    ,togliere " : " e parola "function" 
        return 2025-this.anno //  am usat "this" in loc de numele oggettului
       }
     }
     console.log(fre2.unafun())
*/




  //-----------  folosind una function dentro un oggetto  con function tipo DECLARATION (fuori) + "this"

/*
     const lo =28
     const po = "ciao"
   
function bc(){             //function DECLARATION (fuori oggetto)
   return 50- this.virsta
}


const calc= {
   lo,
   po,
   virsta :35,   //virsta e diversa di aceea de jos, dar functia(formula) e aceeasi
   bc
}
console.log(calc.bc())


const calc2= {
   lo,
   po,
   virsta :10,
   bc
}
console.log(calc2.bc())
*/








