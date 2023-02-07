
let arrayDispari = [];
let input = 0;
for (let i = 0; i < 10; i++) {
    while((input%2==0)){
        input = parseInt(prompt("inserisci numero"));
    }
    arrayDispari.push(input);
}

for(let i=0 ; i<10 ; i++){
    console.log('nella cella di memoria: '+i+' e salvata la seguente cifra: '+arrayDispari[i]);
}