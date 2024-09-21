const { checkout } = require("../routes/router");

const main = {
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    help:(req, res) =>{
        res.render('help');
    },
    information:(req, res) =>{
        res.render('information');
    },
    
}


module.exports = main;