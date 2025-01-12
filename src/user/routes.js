import express from 'express';
// import { create } from './controller.js';

const router = express.Router();

// router.get('/create', create);

router.get('/test', (req, res) => {
    res.send("Test page for netlify hosting");
});

export default router;