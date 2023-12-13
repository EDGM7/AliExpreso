const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path'); // Agrega esta línea para importar el módulo 'path'

const ejs = require('ejs');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'aliexpreso'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL: ' + err.message);
        // Envía una respuesta al cliente en caso de error de conexión
        res.status(500).send('Error interno del servidor (conexión a la base de datos)');
    } else {
        console.log('Conexión exitosa a MySQL');
        console.log('Connected to MySQL database: ' + db.config.database);

    }
});



app.use(bodyParser.urlencoded({ extended: true }));

app.post('/guardar-comentario', (req, res) => {
    const formData = req.body;

    // Verificar si ya existe un registro con los mismos datos
    const checkQuery = 'SELECT * FROM comentarios WHERE nombre = ? AND comentario = ?';
    const checkValues = [formData.nombre, formData.comentario];

    db.query(checkQuery, checkValues, (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error al verificar la existencia de datos:', checkErr);
            return res.status(500).send('Error interno del servidor');
        }

        // Si ya existe un registro, enviar un mensaje de error
        if (checkResult.length > 0) {
            console.log('Estos datos ya han sido registrados anteriormente');
            return res.status(400).send('Estos datos ya han sido registrados anteriormente');
        }

        console.log('nombreeee'+formData.nombre+' coment '+'nombreeee'+formData.comentario)

        // Si no existe, realizar la inserción
        const insertQuery = 'INSERT INTO comentarios (nombre, comentario) VALUES (?, ?)';
        const insertValues = [formData.nombre, formData.comentario];

        db.query(insertQuery, insertValues, (insertErr, insertResult) => {
            if (insertErr) {
                console.error('Error al insertar en la base de datos:', insertErr);
                return res.status(500).send('Error interno del servidor');
            } else {
                console.log('Datos insertados correctamente');
                // Enviar mensaje de éxito al cliente
                res.send('<script>alert("Comentario enviado. Gracias por Contactarnos"); window.location="http://localhost:3000/";</script>');
               
            }
        });
    });
});

/* para subir las imagenes */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
    }
});

const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/guardar-producto', upload.single('imagen'), (req, res) => {
    const formData = req.body;
    const imagenPath = req.file ? req.file.path : null;
    console.log('Ruta de la imagen:', imagenPath);

    
    const insertQuery = 'INSERT INTO productos (nombre, categoria, precio, moneda, imagen, descripcion, stock) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const insertValues = [formData.nombre, formData.categoria, formData.precio, formData.moneda, imagenPath, formData.descripcion, formData.stock];

    db.query(insertQuery, insertValues, (insertErr, insertResult) => {
        if (insertErr) {
            console.error('Error al insertar en la base de datos:', insertErr);
            return res.status(500).send('Error interno del servidor');
        } else {
            console.log('Producto insertado correctamente');
            res.send('<script>alert("Producto insertado correctamente"); window.location="http://localhost:3000/";</script>');
                    
        }
    });
});

app.get('/buscar-productos', (req, res) => {
    const busqueda = req.query.busqueda; // Obtenemos el parámetro de búsqueda desde la consulta
    
    // Realizas la lógica de búsqueda en la base de datos, por ejemplo
    const selectQuery = 'SELECT * FROM productos WHERE nombre LIKE ? OR categoria LIKE ?';
    const searchValue = `%${busqueda}%`;
    
    db.query(selectQuery, [searchValue, searchValue], (selectErr, selectResult) => {
        if (selectErr) {
            console.error('Error al realizar la búsqueda de productos:', selectErr);
            return res.status(500).send('Error interno del servidor');
        }

        // Devuelve los resultados como JSON
        res.json(selectResult);
    });
});