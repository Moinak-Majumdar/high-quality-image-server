import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/route';


const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());


app.use(router);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ 'Hello World': 'Server connected' });
})

app.listen(PORT, () => {

    console.log(`Listening on PORT: ${PORT}`);
});