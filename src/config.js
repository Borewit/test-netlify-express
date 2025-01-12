import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const envConfigFile = process.env;

if (envConfigFile.NODE_ENV !== 'prod') {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const configFile = path.resolve(__dirname, '../.env.sample');
    dotenv.config({ path: configFile, encoding: 'utf-8' });
}

const { APP_PORT } = envConfigFile;

export { APP_PORT };