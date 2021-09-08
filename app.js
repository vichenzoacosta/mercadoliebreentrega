const express = require("express")
const app = express();
const path = require('path')


const PORT= process.env.PORT||4000

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log('App listening http://localhost:4000/');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve("views/home.html"))
});;
app.get('/', (req, res) => {
    res.sendFile(path.resolve("views/register.html"))
});;
