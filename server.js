const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(__dirname)); // Serve seus arquivos HTML/CSS/JS

app.post('/upload', upload.single('cardapio'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }
  res.json({ filename: req.file.filename, originalname: req.file.originalname });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));