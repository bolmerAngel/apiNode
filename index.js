const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


const { Mongoose } = require('./database')


//configuracion  para acceder descde cualquier parte de la aplicacion
//process.env.PORT para tomar cualquier puerto que este disponible
app.set('port', process.env.PORT || 3000)

//funciones
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200/" }))



//rutas
app.use('/api/empleado', require('./routes/empleados.routes'));

//empesando el servidor
app.listen(app.set('port'), () => {
    console.log('Servidor en puerto ', app.get('port'))

})