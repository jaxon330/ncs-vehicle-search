const express = require('express');
const router = express.Router();
const google = require('googlethis');

router.get('/:query', async (req, res) => {
    try {     
        const { query } = req.params;
        const getImage = await google.image(query, { safe: true })
        res.status(200).send(getImage)
    } catch (err) {
        console.log(err)
        res.status(500).send({error: 'Something went wrong'})
    }
})


module.exports = router;