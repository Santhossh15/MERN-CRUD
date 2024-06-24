const express = require('express');
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hi Santhossh");
})

mongoose.connect("mongodb+srv://santhossh15:Santhossh5151@backenddb.wm3dxbr.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connection Successful");
        app.listen(3000, () => {
            console.log("Server is running on 3000..")
        })
    })
    .catch(() => {
        console.log("Connection Failed");
    })



