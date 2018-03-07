import express from 'express';
import open from 'open';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import contact_router from './controllers/contact_controller.js';
import blog_router from './controllers/blog_controller.js';




/* eslint-disable no-console*/

const port = 3006;
const url = 'http://localhost:';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//express config
app.use(express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.render('index');
});

//app.get('/blog', function (req, res) {
	//console.log(req);
	//res.render('blog');
//});

app.get('/projects', function (req, res) {
	res.render('projects');
});

app.get('/contact', function (req, res) {
	res.render('contact');
});

app.get('/about', function (req, res) {
	res.render('about');
});

//router
app.use('/', contact_router);
app.use('/', blog_router);


app.listen(port, function (err) {
	if (err) { console.log(err); }
	else {
		open(url + port);
	}
})
