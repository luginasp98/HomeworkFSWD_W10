const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads'));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

app.put(
  '/contact/upload',
  multer({ storage: diskStorage }).single('photo'),
  (req, res) => {
    const file = req.file.path;
    console.log(file);
    if (!file) {
      res.status(400).send({
        status: false,
        data: 'No File is selected.',
      });
    }
    res.send(file);
  }
);

app.listen(3000, function () {
  console.log('server running');
});