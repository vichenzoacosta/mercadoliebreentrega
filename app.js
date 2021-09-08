const express = require("express")
const app = express();
const path = require('path')


const PORT= process.env.PORT||3000

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log('App listening http://localhost:3000/');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve("views/home.html"))
});;
