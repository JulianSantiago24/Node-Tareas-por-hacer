//  const argv = require('yargs')

//  .command('crear', 'Crear un elemento o tarea por hacer', {
//          descripcion: { //flag o bandera del comando
//              default: true,
//              alias: 'd',
//              desc: 'Descripcion de la tarea por hacer'
//          }
//      })
//      .command('actualizar', 'Actualiza el estado completado de una tarea', {
//          descripcion: {
//              default: true,
//              alias: 'd',
//              desc: 'Descripcion de la tarea por hacer'
//          },
//          completado: { //flag o bandera del comando
//              default: true, // valor por defecto
//              alias: 'c',
//              desc: 'Marca como completado o pendiente la tarea'
//          }
//      })

//  .command('borrar', 'Borrar la tarea seleccionada', {
//      descripcion: {
//          default: true,
//          alias: 'd',
//          desc: 'Descripcion de la tarea por hacer'
//      }
//  })


// Todo el codigo anterior sera optimizado con las siguiente lineas reducidas: 


const descripcion = {
    default: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')

.command('crear', 'Crear un elemento o tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })

.command('borrar', 'Borrar la tarea seleccionada', {
    descripcion
})

.help()
    .argv;

module.exports = {
    argv
}