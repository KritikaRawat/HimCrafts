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


const port = 3000;
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working /api/v1");
});

//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

///For showing pictures to the front end
app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
