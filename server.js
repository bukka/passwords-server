import express from 'express';
import bodyParser from 'body-parser';
import password from './routes/password';

const app = express();
app.use(bodyParser.json());

app.use('/password', password);

app.listen(3000, () => console.log('Server is running'));
