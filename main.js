//TASK 1: Verificare se una parola è "palindroma"
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//dichiaro una funzione di nome "IsPalindrome" per verificare se una parola è palindroma
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
    for(let i=0; i< stringaArray.length; i++){
        console.log(stringaArray[i]);
        console.log(stringaArrayReverse[i]);
        //Se trovo sempre corrispondenza fra gli elementi degli array che si trovano nella stessa posizione, allora:
        //la parola è palindroma!
        if(stringaArray[i] !== stringaArrayReverse[i]){
            //LA PAROLA NON E' PALINDROMA
            /* IsPal= false; */
            return ("la parola non è palindroma");
        }
    }
    
   return ("la parola è palindroma");
   
}

//L'utente inserisce una parola
const wordA= prompt("Inserisci una parola");

//chiamo la funzione  "IsPalindrome"
const checkPal= IsPalindrome(wordA);
console.log(checkPal);

//TASK 2: Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (metodo js random (numeri casuali)).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const evenOdd= prompt("Inserisci pari o dispari");

//controllo se l'utente ha inserito un valore corretto
if (evenOdd==="pari" || evenOdd==="dispari"){
    //l'utente inserisce un numero da 1 a 5 
    const userNum=parseInt(prompt ("Inserisci un numero da 1 a 5"));
    if (userNum>=1 && userNum <=5){
        console.log("hai inserito un numero giusto");
        
        //Generiamo un numero random (sempre da 1 a 5) per il computer (metodo js random (numeri casuali)).
        const pcNum= Math.floor((Math.random() * 5) + 1);
        console.log(pcNum);
        


    }else{
        console.log("hai inserito un numero sbagliato");
    }
}else{
    console.log("hai inserito un valore sbagliato");
}














