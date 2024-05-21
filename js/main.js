const age = parseInt(prompt('inserisci la tua età'));
const km = parseInt(prompt('inserisci i km da percorrere'));
const prezzoBiglietto = (km * 0.21);
let sconto;

if (age < 18){
    
    sconto = (prezzoBiglietto * 0.8);
    const prezzo = document.getElementById('prezzo-biglietto');
    prezzo.innerHTML = '€' + sconto.toFixed(2);
    console.log(sconto);

} else if (age > 65){

    sconto = (prezzoBiglietto * 0.6);
    const prezzo = document.getElementById('prezzo-biglietto');
    prezzo.innerHTML = '€' + sconto.toFixed(2);
    console.log(sconto);

} else {

    sconto = prezzoBiglietto;
    const prezzo = document.getElementById('prezzo-biglietto');
    prezzo.innerHTML = '€' + sconto.toFixed(2);
    console.log(sconto);

}