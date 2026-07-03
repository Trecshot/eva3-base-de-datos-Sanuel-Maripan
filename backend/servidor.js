// Importamos las librerías instaladas
const express = require('express'); // Express permite generar la aplicación backend
const cors = require('cors'); // Cors permite que el servidor reciba solicitudes externas
const mongoose = require('mongoose'); // ORM que permite trabajar con objetos y DBs
const bcrypt = require('bcrypt');

// Iniciar la aplicación express
const aplicacion = express();
const puerto = 3000;

// Instanciar las clases necesarias en nuestra aplicación
aplicacion.use(cors());
aplicacion.use(express.json());

// Crear la conexión a DB
mongoose.connect('mongodb://localhost:27017/AP_N3_C1')
    .then(() => console.log('Conexión Exitosa!'))
    .catch((excepcion) => console.log('No ha sido posible conectarse por el siguiente error: ', excepcion));

const port = process.env.port || 3000;
aplicacion.listen(puerto, () => console.log(`Corriendo en el puerto ${port}`))

const comuna = new mongoose.Schema({
    codigo: String,
    nombre: String,
    region: String
});
// Crear un OBJETO en base al MODELO comuna
const Comuna = mongoose.model('Comuna', comuna, 'comunas');

const direccion = new mongoose.Schema({
    comuna: String,
    calle: String,
    numero: String,
    departamento: String
});

// Crear el MODELO de datos
const usuario = new mongoose.Schema({
    nombre: String,
    email: String,
    rut: String,
    telefono: String,
    contrasena: String,
    nacimiento: Date,
    genero: String,
    nacionalidad: String,
    direccion: [direccion]
});
// Crear un OBJETO en base al MODELO usuario
const Usuario = mongoose.model('Usuario', usuario, 'usuarios');

const pais = new mongoose.Schema({
    nombre: String,
    iso2: String,
    iso3: String,
    codigoPais: String,
    nacionalidad: String
});
// Crear un OBJETO en base al MODELO usuario
const Pais = mongoose.model('Pais', pais, 'paises');

// Crear el método para CREAR esos objetos en DB
aplicacion.post('/guardarUsuario', async (request, response) => {
    try {
        const { nombre, email, rut, telefono, contrasena, nacimiento, genero, nacionalidad, direccion } = request.body;

        const saltRounds = 10;
        const contrasenaEncriptada = await bcrypt.hash(contrasena, saltRounds);

        const jsonDireccion = JSON.parse(direccion);

        const nuevoUsuario = new Usuario({ nombre, email, rut, telefono, contrasena: contrasenaEncriptada, nacimiento, genero, nacionalidad, direccion: jsonDireccion });

        await nuevoUsuario.save();
        response.status(200).json({ mensaje: 'Datos almacenados correctamente.' });
    } catch (excepcion) {
        response.status(500).json({ mensaje: 'No se han podido almacenar los datos: ', excepcion });
    }
});

// Crear método para obtener objetos desde la DB
aplicacion.get('/usuarios', async (request, response) => {
    try {
        const usuarios = await Usuario.aggregate([{ // Colección original que queremos consultar
            $lookup:{
                from:'paises', // Colección desde la que quiero agregar datos
                localField:'nacionalidad', // CAmpo que relaciona la data de la colección agregada en la colección consultada
                foreignField:'iso2', // Campo de la tabla agragada que tiene la información relacionada
                as: 'paisOrigen' // Nombre dinámico que le daremos al objeto nuevo
            }
        }]);

        if (!usuarios || usuarios.length === 0) {
            return response.status(404).json({ mensaje: 'No se encontraron usuarios registrados.' });
        }

        response.status(200).json(usuarios);
    } catch (error) {
        response.status(500).json({ mensaje: 'No ha sido posible obtener los datos: ', error })
    }
});

aplicacion.get('/paises', async (request, response) => {
    try {
        const paises = await Pais.find().exec();
        if (!paises || paises.length === 0) {
            return response.status(404).json({ mensaje: 'No se encontraron países registrados.' });
        }

        response.status(200).json(paises);
    } catch (error) {
        response.status(500).json({ mensaje: 'No ha sido posible obtener los datos: ', error })
    }
});

aplicacion.get('/comunas', async (request, response) => {
    try {
        const comunas = await Comuna.find().exec();
        if (!comunas || comunas.length === 0) {
            return response.status(404).json({ mensaje: 'No se encontraron comunas registradas.' });
        }

        response.status(200).json(comunas);
    } catch (error) {
        response.status(500).json({ mensaje: 'No ha sido posible obtener los datos: ', error })
    }
});