import serverless from "serverless-http";
import router from '../../src/routes.js';
import express from 'express';

export const app = express();

app.use('/api/v1', router);

app.use((req, res, next) => {
    res.status(404).json('The requested resource was not found on this server');
});

export const handler = serverless(app);
