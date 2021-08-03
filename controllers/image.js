const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'cd76a95e3a214cdfa267e8a10e9bc6ca'
});

const handleApiKey = (req , res) => {

app.models 
.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
.then(data => {
  res.json(data);
})
.catch(err => res.status(400).json('Uable to work with API'))
 
}

const handleImage = (req, res ,db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiKey
};