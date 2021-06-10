import express from 'express';
import foodRouter from './routers/food.routers.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/food/', foodRouter);


app.listen(port, () => {
    console.log(`Todo app listening at the http://localhost:${port}`);
})