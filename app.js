const express = require('express');
const app = express();
const routes = require('./routes/router.js');
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static('public'));
app.listen(3000 , ()=>{
    console.log('server initailize on http://localhost:3000 ');
});