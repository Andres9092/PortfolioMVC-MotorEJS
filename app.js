const express = require ('express')
const app = express()




app.use(express.static('public'))  //se puede prescidir de este termino __dirname,



app.listen(3030, () => console.log('Servidor levantado correctamente'));



const mainRoutes = require('./src/routes/main.js');



app.use('/', mainRoutes)

