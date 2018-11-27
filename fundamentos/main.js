const { crearArchivo, listar } = require('./app');
const colors = require('colors');
const argv = require('yargs').command('listar', "Imprime en consola la tabla de multiplicar", {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
}).argv;
let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.b).then(archivo => {
            console.log(`archivo creado con ${archivo}`.red);
        }).catch(e => {
            console.log(e);
        });
        break;
    case 'listar':
        listar(argv.b, argv.l).then(data => {
            console.log(data.yellow);
        }).catch(e => {
            console.log(e);
        });
        break;
    default:
        console.log('comando no reconocido');

}