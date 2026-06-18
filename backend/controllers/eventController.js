const pool = require("../db/database");


// Get all events
exports.getEvents = async (req,res)=>{

    try{

        const result = await pool.query(
            "SELECT * FROM events ORDER BY date ASC"
        );

        res.json(result.rows);

    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};


// Get event by ID
exports.getEventById = async(req,res)=>{

    try{

        const {id}=req.params;

        const result = await pool.query(
            "SELECT * FROM events WHERE id=$1",
            [id]
        );


        res.json(result.rows[0]);

    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// Create event
exports.createEvent = async(req,res)=>{

    try{

        const {
            title,
            description,
            category,
            date,
            venue,
            registration_link,
            poster_url
        } = req.body;


        const result = await pool.query(

        `INSERT INTO events
        (title,description,category,date,venue,registration_link,poster_url)
        VALUES($1,$2,$3,$4,$5,$6,$7)
        RETURNING *`,

        [
            title,
            description,
            category,
            date,
            venue,
            registration_link,
            poster_url
        ]);

        res.json(result.rows[0]);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// Delete event
exports.deleteEvent = async(req,res)=>{

    try{

        const {id}=req.params;


        await pool.query(
            "DELETE FROM events WHERE id=$1",
            [id]
        );


        res.json({
            message:"Event deleted"
        });


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// Update event
exports.updateEvent = async(req,res)=>{

    try{

        const {id}=req.params;

        const {
            title,
            description,
            category,
            date,
            venue,
            registration_link,
            poster_url
        }=req.body;


        const result = await pool.query(

        `UPDATE events SET
        title=$1,
        description=$2,
        category=$3,
        date=$4,
        venue=$5,
        registration_link=$6,
        poster_url=$7
        WHERE id=$8
        RETURNING *`,

        [
            title,
            description,
            category,
            date,
            venue,
            registration_link,
            poster_url,
            id
        ]);


        res.json(result.rows[0]);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};