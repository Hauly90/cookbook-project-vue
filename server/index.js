import express from 'express';
import soupRouter from './routers/soup.routers.js';
import dishRouter from './routers/dish.routers.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/soup/', soupRouter);
app.use('/dish/', dishRouter);


app.listen(port, () => {
    console.log(`Todo app listening at the http://localhost:${port}`);
})