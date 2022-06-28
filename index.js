import express from "express";
import bodyParser from "body-parser";
//! body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.The middleware is a part of Express.js.

import usersRoutes from "./routes/users.js";

const app = express();
//! by doing const app is equal to express and we call that express as a function now our whole application lies in this little variable
const PORT = 5000;

app.use(bodyParser.json());
//! we can initialize the body parser middleware. we're gonna be using json data in our whole application json stands for javascript object notation and it is a common format for sending and requesting data to a rest api

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
//! we need to send some data from the front end to the server that data being the values in the forms user inputted so that's why we are need to use router.post method.
//! We can no longer use chrome or any browser for that matter because browsers can only make get requests that's why we need a software which can help us test our api and that's where postman comes