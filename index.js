const express = require('express');
const PORT = 5000;
const app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})


app.listen(PORT, () => {
  console.log(`Server Started On Port: ${PORT}`)
})




