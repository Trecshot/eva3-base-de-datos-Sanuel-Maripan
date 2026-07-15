
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');


const aplicacion = express();
const puerto = 3000;


aplicacion.use(cors());
aplicacion.use(express.json());


mongoose.connect('mongodb://localhost:27017/AP_N3_C1')
    .then(() => console.log('Conexión Exitosa!'))
    .catch((excepcion) => console.log('No ha sido posible conectarse por el siguiente error: ', excepcion));


const comunaSchema = new mongoose.Schema({
    codigo: String,
    nombre: String,
    region: String
});
const Comuna = mongoose.model('Comuna', comunaSchema, 'comunas');

const paisSchema = new mongoose.Schema({
    nombre: String,
    iso2: String,
    iso3: String,
    codigoPais: String,
    nacionalidad: String
});
const Pais = mongoose.model('Pais', paisSchema, 'paises');


const direccionSchema = new mongoose.Schema({
    comuna: { type: String, required: true },
    calle: { type: String, required: true },
    numero: { type: String, required: true },
    departamento: { type: String }
}, { _id: false });

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String },
    fechaNacimiento: { 
        type: Date,
        required: true,
        validate: {
            validator: function(valor) {
                return valor && valor < new Date();
            },
            message: 'La fecha de nacimiento debe corresponder a una fecha válida y anterior a la fecha actual.'
        }
    },
    nacionalidad: { 
        type: String, 
        required: true,
        match: /^[A-Z]{2}$/
    },
    genero: { 
        type: String, 
        required: true,
        enum: ['M', 'F', 'O']
    },
    direccion: { type: direccionSchema, required: true },
    contrasena: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');


const facturaSchema = new mongoose.Schema({
    
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: true 
    },
    numero: { type: String, required: true },
    proveedor: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    monto: { type: Number, required: true },
    impuesto: { type: Number, required: true },
    estado: { type: String, required: true },
    metodoPago: { type: String, required: true },
    descripcion: { type: String },
    moneda: { type: String, required: true }
});

const Factura = mongoose.model('Factura', facturaSchema, 'facturas');



aplicacion.post('/guardarUsuario', async (request, response) => {
    try {
        const { nombre, correo, rut, telefono, contrasena, fechaNacimiento, genero, nacionalidad, direccion } = request.body;

        const saltRounds = 10;
        const contrasenaEncriptada = await bcrypt.hash(contrasena, saltRounds);

        const jsonDireccion = typeof direccion === 'string' ? JSON.parse(direccion) : direccion;

        const nuevoUsuario = new Usuario({ 
            nombre, 
            correo, 
            rut, 
            telefono, 
            contrasena: contrasenaEncriptada, 
            fechaNacimiento, 
            genero, 
            nacionalidad, 
            direccion: jsonDireccion 
        });

        await nuevoUsuario.save();
        response.status(200).json({ mensaje: 'Datos almacenados correctamente.' });
    } catch (excepcion) {
        response.status(500).json({ mensaje: 'No se han podido almacenar los datos: ', error: excepcion.message });
    }
});

aplicacion.get('/usuarios', async (request, response) => {
    try {
        const usuarios = await Usuario.aggregate([
            {
                $lookup: {
                    from: 'paises', 
                    localField: 'nacionalidad', 
                    foreignField: 'iso2', 
                    as: 'paisOrigen' 
                }
            }
        ]);

        if (!usuarios || usuarios.length === 0) {
            return response.status(404).json({ mensaje: 'No se encontraron usuarios registrados.' });
        }

        response.status(200).json(usuarios);
    } catch (error) {
        response.status(500).json({ mensaje: 'No ha sido posible obtener los datos: ', error: error.message });
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
        response.status(500).json({ mensaje: 'No ha sido posible obtener los datos: ', error: error.message });
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
        response.status(500).json({ mensaje: 'No ha sido posible obtener los datos: ', error: error.message });
    }
});


aplicacion.post('/guardarFactura', async (request, response) => {
    try {
        const nuevaFactura = new Factura(request.body);
        const facturaGuardada = await nuevaFactura.save();
        response.status(201).json({ mensaje: 'Factura almacenada con éxito.', data: facturaGuardada });
    } catch (error) {
        response.status(400).json({ mensaje: 'Error al almacenar la factura: ', error: error.message });
    }
});


aplicacion.get('/obtenerFacturas', async (request, response) => {
    try {
        const resultadoAgregacion = await Factura.aggregate([
            {
                
                $lookup: {
                    from: 'usuarios',           
                    localField: 'usuario',       
                    foreignField: '_id',         
                    as: 'usuarioRelacionado'     
                }
            },
            {
                
                $unwind: '$usuarioRelacionado'
            },
            {
                
                $project: {
                    numero: 1,
                    proveedor: 1,
                    fecha: 1,
                    monto: 1,
                    impuesto: 1,
                    estado: 1,
                    metodoPago: 1,
                    descripcion: 1,
                    moneda: 1,
                    'usuarioRelacionado.nombre': 1, 
                    'usuarioRelacionado.rut': 1     
                }
            }
        ]);

        if (!resultadoAgregacion || resultadoAgregacion.length === 0) {
            return response.status(404).json({ mensaje: 'No se encontraron facturas registradas.' });
        }

        response.status(200).json(resultadoAgregacion);
    } catch (error) {
        response.status(500).json({ mensaje: 'Error crítico en el pipeline de agregación: ', error: error.message });
    }
});


const port = process.env.port || 3000;
aplicacion.listen(puerto, () => console.log(`Corriendo en el puerto ${port}`));