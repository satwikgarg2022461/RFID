import express from 'express';
import color from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

dotenv.config({path : 'api/../.env' });

connectDB();

const app=express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:5173' // allow only this origin
}));


app.use('/api/v1/auth',authRoutes)


app.get("/",(req,res) =>{
    res.send("<h1>Welcomw to practice run</h1>")
})

const PORT = process.env.PORT;

app.listen(PORT,()=>
    {console.log(`server on port ${PORT}`.bgCyan.white)}
);