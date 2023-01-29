const express = require('express');
const router = express.Router();
const youtubesearchapi = require("youtube-search-api");

router.get('/:query', async (req, res) => {
    try {    
        const { query } = req.params;
        const getVideo = await youtubesearchapi.GetListByKeyword(query,[false],[3],[{type: 'video'}]);
        res.status(200).send(getVideo)
    } catch (err) {
        console.log(err)
        res.status(500).send({error: 'Something went wrong'})
    }
})

module.exports = router;