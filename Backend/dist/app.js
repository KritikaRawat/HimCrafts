//Routes store the routes for user and products
//Controller contains the functions the routes use
//models is where schema of orders, user etc are defined
//middlewares stores those functions or handlers that are used as middleware
//types stores the custom type of TS used
//utils store the features which are used repetitively
import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import dashboardRoute from "./routes/stats.js";
import NodeCache from 'node-cache';
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from 'stripe';
config({
    path: "./.env"
});
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";
connectDB(mongoURI);
export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.send("API is working /api/v1");
});
//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);
///For showing pictures to the front end
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});
