
const path = require('path')


let mainControllers = {

    home : (req,res) => {res.render('home.ejs')},
    about : (req,res) => {res.render('about.ejs')}
    

};

module.exports = mainControllers