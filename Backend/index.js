require("dotenv").config();

const express = require("express");
const app = express();
const port = 3333;
const cors = require("cors");
const AIRouter = require("./router/AIRouter.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(
    {
        origin: `${process.env.FRONTEND_URL}` || "http://localhost:5173",
        credentials: true,
    }
));


app.use("/api/v1/", AIRouter)

app.listen(port, (req, res)=>
{
    console.log("successfully connected at port:", port);
})