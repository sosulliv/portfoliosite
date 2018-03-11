import express from 'express';
const router = express.Router();
import blog_controller from'../../controllers/blog_controller';


router.get('/', (req, res)=>{
res.render('index');
});


router.get('/blog', blog_controller.view);


router.get('/projects', (req, res)=> {
	res.render('projects');
});

router.get('/contact', (req, res)=> {
	res.render('contact');
});

router.get('/about', (req, res)=> {
	res.render('about');
});

export default router;