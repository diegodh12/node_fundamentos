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
        estado: 'Separadp'
    },
    {
        nombre: 'Diego',
        apellido: 'Díaz',
        edad: 24,
        estado: 'Soltero'
    }
];

let buscar = (id, callback) => {
    let empleado = empleados.find(persona => persona.nombre === id);
    if (!empleado) {
        callback(`No existe ningún empleado con ese nombre`);
    } else {
        callback(null, empleado);
    }
}
buscar('4', (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});
let mayores = (edad, callback) => {
    let empleado = empleados.filter(empl => empl.edad > edad);
    if (!empleado) {
        callback(`no existe ningún empleado con edad mayor o igual a ${edad}`);
    } else {
        callback(null, empleado);
    }
}
mayores(21, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
    }
});