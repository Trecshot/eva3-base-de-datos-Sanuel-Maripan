window.onload = function () {
    obtenerUsuarios();
};

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('http://localhost:3000/usuarios');
        const usuarios = await respuesta.json();

        console.log(usuarios);

        new DataTable('#tablaUsuarios',{
            data: usuarios,
            columns:[
                {data:'nombre'},
                {data:'email'},
                {data:'rut'},
                {data:'telefono'},
                {data:'nacimiento'},
                {data:'genero'},
                {data:'nacionalidad'}
            ]
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};