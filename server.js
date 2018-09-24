const ex = require('express');
const hbs = require('hbs');

var app = ex();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(ex.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res) => {
	res.send('<h1 style="font-size:800px;">404</h1>')
});

app.listen(3000);