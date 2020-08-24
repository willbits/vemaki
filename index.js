const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);
app.set('appName', 'Mi primer servidor');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('combined'));

/*app.use((req, res, next) =>{
	console. log('Request url: ', req.url);
	next();
});*/

//static files

app.use(express.static(path.join(__dirname,'pub')));

//rutas

app.get('/', (req, res) =>{
	res.render('index');
});

app.get('/contact', (req, res) =>{
	res.render('contact');
});

app.get('*', (req, res) =>{
	res.end('Archivo no encontrado!');
});

app.listen(app.get('port'), () =>{
	console.log('servidor funcionando', app.get('port'));
	console.log('Nombre de la App: ', app.get('appName'));
});