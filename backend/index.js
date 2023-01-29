const express = require('express');
const bodyParser = require('body-parser')

const cors = require('cors');

const imageSearch = require('./controllers/imageSearchController');
const videoSearch = require('./controllers/videoSearchController');
const detailSearch = require('./controllers/detailsSearchController')

const app = express();
app.use(cors())

app.use('/images', imageSearch)
app.use('/', detailSearch)
app.use('/videos', videoSearch)


app.listen(5000, () => console.log('Server is listening on port 5000.'));
