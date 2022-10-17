const express = require ('express')
const app = express()
const path = require('path')



app.use(express.static('public'))  //se puede prescidir de este termino __dirname,



app.listen(3030, () => console.log('Servidor levantado correctamente'));



const mainRoutes = require('./src/routes/main.js');



app.use('/', mainRoutes);

app.set('views', path.join(__dirname,'src/views')) //necesario ya que archivos que estan en carpeta VIEWS, no estan en carpeta raiz, si no que dentro de SRC.

app.set('view engine','ejs')  //seteo el motor

