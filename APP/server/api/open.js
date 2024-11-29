const express = require('express');
const router = express.Router();

const db = require('../db.js');


router.get('/products', (req, res) => {
    const query = 'SELECT * FROM family_jewels.user';
    db.query(query, (err, results) => {
        if(err){
            console.error = err.message;
            res.status(500).send('Error retrieving data from the database');
        }else{
            res.json(results);
        }
    })
    
})


module.exports = router;