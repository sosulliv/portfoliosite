import express from 'express';
const router = express.Router();
import blog_controller from'../../controllers/blog_controller';

router.get('/recent', blog_controller.recent);
router.get('/all', blog_controller.all);

export default router;
