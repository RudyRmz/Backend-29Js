// console.log("Hola Koders! Como estan?")

// let a = 5
// let b = 10
// console.log(a+b)


//Script que imprime en consola el doble de un numero
//console.log(process.argv[2] * 2)

// console.log(process.argv)

///////////////
const alumnos = {
    Juan: [10, 5, 8, 9, 7],
    Diana: [10, 9, 9, 8, 10],
    Roberto: [6, 8, 5, 9, 10]
};

const promedio = (alumno) => {
    // Verificar si el alumno existe en el objeto 'alumnos'
    if (alumnos.hasOwnProperty(alumno)) {
        let result = alumnos[alumno].reduce((accum, current) => {
            return accum + current;
        }, 0);
        return result / alumnos[alumno].length;
    } else {
        // Mostrar mensaje si el alumno no existe
        return "No existe el alumno";
    }
};

console.log(promedio(process.argv[2]))

///////////////
// let nombres = process.argv.length

// let nombresIngresados = ()=>{
//     let result = nombres - 2
    
//     return result
// }

// console.log(nombresIngresados())
