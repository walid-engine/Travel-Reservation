import express from 'express'
import mongoose from "mongoose"

import voyageurRouter from './routes/voyageur_routes.js'
import destinationRouter from './routes/destination_routes.js'
import reservationRouter from './routes/reservation_routes.js'

import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/voyageurs",voyageurRouter);
app.use("/api/destinations", destinationRouter);
app.use("/api/reservations", reservationRouter);

mongoose.connect(process.env.DB_URL)
    .then((res) => {
        app.listen(process.env.PORT, () => {
            console.log("===============================================");
            console.log("Server is running");
            console.log("===============================================");
        });
    }).catch(err => {
        console.log(err);
    });