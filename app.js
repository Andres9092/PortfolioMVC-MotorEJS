const express = require ('express')
const app = express()
const path = require('path')



app.use(express.static('public'))  //se puede prescidir de este termino __dirname,



app.listen(3030, () => console.log('Servidor levantado correctamente'));



const mainRoutes = require('./src/routes/main.js');



app.use('/', mainRoutes);

app.set('views', path.join(__dirname,'views'))

app.set('view engine','ejs')

