   //operatore trenario (cu o singura conditie)
/*
let age=10
let scelta= (age>18)? "vino": "succo"
console.log(scelta)
*/




   //aici am folosti mai multe conditii( in caz de mai multe conditii m bine folosit IF/ELSE)
/*
let ani=prompt("indica la tua eta")
let mes=(ani<18)?"sentire i genitori":(ani<50)?"esti un adult":"ai mai mult de 50"
console.log(mes)
*/


//---------------------------------------------------------------------
                    //FUNCTION



          //Function DECLARATION
         /* 
          function conto(a,b,c){
            return (a*b)-c
         }
         let hey=conto(2,3,5)
         console.log(hey)
         */



         //Function EXPRESSION(si trova dentro una variabile,non a un nome)
/*
let da= function(n1,n2,n3){
   return n1+n2+n3
}
console.log(da(1,3,1))
*/

//----------------------------------------------------------------


  /*                Function Freceta ()=>
            
 let resul=(a1,a2,a3)=>a1+a2-a3
 console.log(resul(1,5,2))
    */     
//--------------------------------------------------------------------
/*
function goog( davai, sc,her){
   if(confirm (davai) ){
     sc()
   }else her()
   }
   goog("cumparam o casa",function(){alert("cravascik, scelta jiusta")},function(){ alert("daaa, mare bou mai esti")})
*/


                        //  CALLBACK

/*
              // Funzione di esempio che accetta un callback
function saluta(bari) {
   console.log("Ciao!");
   bari();  //attiva(prepara) il parametro come futtura function
 }
 
 // Funzione callback
 function dopoSaluto() {
   console.log("Come stai?");
 }
 
 // Chiamata alla funzione con callback
 saluta(dopoSaluto);
 */

