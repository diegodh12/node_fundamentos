let empleados = [{
        nombre: 'Jhon Janner',
        apellido: 'Gongora',
        edad: 20,
        estado: 'soltero'
    },
    {
        nombre: 'Leidy',
        apellido: 'Deaza',
        edad: 22,
        estado: 'casada'
    },
    {
        nombre: 'Brandon',
        apellido: 'Sanchez',
        edad: 24,
        estado: 'casado'
    },
    {
        nombre: 'Leo',
        apellido: 'Sabogal',
        edad: 35,
        estado: 'Separado'
    },
    {
        nombre: 'Diego',
        apellido: 'Díaz',
        edad: 24,
        estado: 'Soltero'
    }
];

let buscar = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(persona => persona.nombre === id);
        if (!empleado) {
            reject(`No existe ningún empleado con ese nombre`);
        } else {
            resolve(empleado);
        }
    });
}
let emp = buscar('d').then(empleado => {
    console.log('Datos del empleado', empleado);
}, (err) => {
    console.log(err);
});