
let arrayDispari = [];
let input = 0;
let i=0;
while(arrayDispari.length < 10){
    console.log('enro')
    input = parseInt(prompt("inserisci numero"));
    if(input%2==0){
        arrayDispari.push(input);
    }
}

for(i ; i<10 ; i++){
    console.log('nella cella di memoria: '+i+' e salvata la seguente cifra: '+arrayDispari[i]);
}

