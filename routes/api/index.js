import express from 'express';
import blogRoutes from "./blog";
import contactRoutes from "./contact";

const router = express.Router();

router.use("/blog", blogRoutes);
router.use("/message", contactRoutes);

export default router;
