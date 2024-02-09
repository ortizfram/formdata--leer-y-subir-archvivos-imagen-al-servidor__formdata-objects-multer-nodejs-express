const express = require('express');
const multer = require('multer')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const PORT = process.env.PORT || 5000;

const upload = multer({ dest: 'uploads/' });


app.post('/send', upload.single('image'), (req, res) => {
    console.log('Form data received:', req.body);
    console.log('File data received:', req.file);
    // You can further process the form data here
    res.send('Form data received successfully');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});