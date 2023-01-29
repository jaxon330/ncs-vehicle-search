const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/:query', async (req, res) => {
    try {
        const { query } = req.params;
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValues/${query}?format=json`;
        let result = await axios.get(url);
        res.status(200).send(result.data)
    } catch (err) {
        console.log(err)
        res.status(500).send({error: 'Something went wrong'})
    }
})

module.exports = router;