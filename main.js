//TASK 1: Verificare se una parola è "palindroma"
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//L'utente inserisce una parola
const wordA= prompt("Inserisci una parola");

//chiamo la funzione  "IsPalindrome"
const checkPal= IsPalindrome(wordA);
console.log(checkPal);


//creo e dichiaro una funzione di nome "IsPalindrome" per verificare se una parola è palindroma
function IsPalindrome(stringa){
    const l=stringa.length;
    const stringaArray=[];
    
    //trasforma il parametro "stringa" in un'array contenente ogni singolo suo carattere
    //riempio l'array "stringaArray" con ogni singolo carattere di "stringa"
    for(let i=0; i<l; i++){
        const x=i+1;
        //metodo per estrarre un carattere da una stringa:
        // i= inidice iniziale da cui estrarre
        // x= indice fino al quale estrarre (escluso)
        const ThisCharacter=stringa.substring(i,x);
        
        //aggiungo la sottostringa (carattere) all'array:
        stringaArray.push(ThisCharacter);
    }
    
    //riempio l'array "stringaArrayReverse" 
    const stringaArrayReverse= stringaArray.toReversed();

    console.log(stringaArrayReverse);
    console.log(stringaArray);

    //verifico l'uguaglianza dei due array:
    //Se trovo sempre corrispondenza fra gli elementi degli array che si trovano nella stessa posizione, allora:
    //la parola è palindroma!
    /* let IsPal= null; */
    

    for(let i=0; i< stringaArray.length; i++){
        console.log(stringaArray[i]);
        console.log(stringaArrayReverse[i]);
        
        if(stringaArray[i] != stringaArrayReverse[i]){
            //LA PAROLA NON E' PALINDROMA
            /* IsPal= false; */
            return ("la parola non è palindroma");
        }
    }
    
   return ("la parola è palindroma");
   
}





//metodo js random (numeri casauli)
