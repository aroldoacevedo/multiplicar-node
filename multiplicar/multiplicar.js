const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============================='.green)
    console.log(`========tabla de ${ base }============`.green)
    console.log('==============================='.green)

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${index * base} \n`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero `);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${index * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);

        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}