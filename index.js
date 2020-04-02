// Stock Market Portfolio App By John Elder Codemy.com

const express = require('express');
const app = express();
//const serveStatic = require('serve-static')
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

//Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "and this is other stuff"

//Set handlebar routes
app.get('/', function (req, res) {
    res.render('home',{
    	stuff: "This is stuff.." + " " + otherstuff
    });
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log('Server Listening on port '+ PORT));
