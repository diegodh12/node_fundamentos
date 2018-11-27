const fs = require('fs');

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un número');
        } else {
            let data = '';
            for (i = 1; i <= limite; i++) {
                data = data.concat(`${base} * ${i} = ${base*i} \n`);
            }
            resolve(data);
        }
    });
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) reject('No es un número');
        let data = '';
        for (i = 1; i <= 10; i++) {
            data = data.concat(`${base} * ${i} = ${(base * i)} \n`);
        }

        fs.writeFile('tablas/tabla.txt', data, (err) => {
            if (err) reject(err);
            resolve(`base ${base}`);
        });
    });
}
module.exports = {
    crearArchivo,
    listar
}