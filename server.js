const ex = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = ex();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(ex.static(__dirname + '/public'));

hbs.registerHelper('currentYear', () => {
	return new Date().getFullYear();
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page'
	});
});

app.get('/projects', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'Projects page'
	});
});

app.get('/bad', (req, res) => {
	res.send('<h1 style="font-size:800px;">404</h1>')
});

app.listen(port, () => {
	console.log(`app is running on port: ${port}`);
});