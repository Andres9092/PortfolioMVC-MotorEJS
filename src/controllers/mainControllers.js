
const path = require('path')


let mainControllers = {    //objeto con metodos

    home : (req,res) => {res.render('home.ejs')},    //cuando tipeo en web /home, devuelve lo que esta dentro del metodo de mainControllers.home..... Es decir la renderizacion de home.ejs
    about : (req,res) => {res.render('about.ejs')}
    

};

module.exports = mainControllers