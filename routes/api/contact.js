import express from 'express';
const router = express.Router();
import contact_controller from'../../controllers/contact_controller';

router.post('/create', contact_controller.create);
export default router;
