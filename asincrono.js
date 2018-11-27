let nombre = 'Diego';

function saludar() {
    return `Hola ${nombre +' eres el mejor'}`;
}
setTimeout(function() {
    console.log(`primer timeOut`);
}, 3000);
setTimeout(function() {
    console.log(`segundo timeOut`);
}, 0);
setTimeout(function() {
    console.log(`tercer timeOut`);
}, 0);
console.log(`Fin del programa`);