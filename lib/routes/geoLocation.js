const express = require('express');
const { getlocation } = require('../services/geoLocationService');

const router = express.Router();

router.get('/', async ({query}, res) => {
    try{
        const {message, outlet, error} = await getlocation(query);
        if(error) {
            return res.status(400).send({
                status: 400,
                message: 'Bad Request',
                error
            });
    
        }
        return res.status(200).send({
            status: 200,
            message,
            outlet
        });


    } catch(err){
        console.log(err)
    }
})

module.exports = router;