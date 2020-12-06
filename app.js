const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors/safe');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
console.log(argv.base);
//console.log('Limite: ', argv.limite);