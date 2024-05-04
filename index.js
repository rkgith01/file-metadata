const express = require('express');
const cors = require('cors');
require('dotenv').config()
const multer = require('multer');
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
const upload = multer({ dest: './public/data/uploads' })
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname, mimetype, size } = req.file

  const data = { 
    name: originalname, 
    type: mimetype,
     size: size 
  }

  res.json(data)
})


const port = process.env.PORT || 4500;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
