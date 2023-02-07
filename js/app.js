
let arrayDispari = [];
let input = 0;
for (let i = 0; i < 10; i++) {
    while(input%3==0){
        input = prompt("inserisci numero");
    }
    arrayDispari.push(input);
}
console.log(arrayDispari);