import express from 'express';
import cors from 'cors';
import { APP_PORT } from './config.js';
import router from './routes.js';
import serverless from 'serverless-http';

const app = express();

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});

app.use(express.json({ limit: '5mb' }));
app.use(cors());

app.use('/api/v1', router);

app.use((req, res, next) => {
    res.status(404).json('The requested resource was not found on this server');
});

export default serverless(app);