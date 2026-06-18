const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db/database");


const app = express();


app.use(cors());
app.use(express.json());
const eventRoutes = require("./routes/eventRoutes");
const authRoutes=require("./routes/authRoutes");

app.use("/events",eventRoutes);
app.use("/auth",authRoutes);

app.get("/", async (req,res)=>{

    try {

        const result = await pool.query(
            "SELECT NOW()"
        );

        res.json(result.rows);

    } catch(error){

        console.log(error);

        res.status(500).send("Database connection failed");

    }

});


const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{

    console.log(`Server running on port ${PORT}`);

});