const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point siskom dengan method GET
app.get("/biner/:biner", (req,res) => {

    let biner = req.params.biner
    let decimal = parseInt(req.params.biner,2).toString(10).toUpperCase();
    let oktal = parseInt(req.params.biner,2).toString(8);
    let hexadecimal = parseInt(req.params.biner,2).toString(16);

    let response = {
        Biner : biner,
        Decimal : decimal,
        Oktal : oktal,
        Hexadecimal : hexadecimal
    }

    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
