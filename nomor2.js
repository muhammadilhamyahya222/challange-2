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

// endpoint celcius dengan method GET
app.get("/convert/celsius/:celsius", (req,res) => {

    let celsius = req.params.celsius
    let resultR = (4 / 5) * celsius
    let resultF = ((9 / 5) * celsius) + 32
    let resultK = (celsius * 1) + 273

    let response = {
        celsius : celsius,
        result : {
            reamur : resultR,
            fahrenheit : resultF,
            kelvin : resultK,
        },
    }

    res.json(response)
})

// endpoint reamur dengan method GET
app.get("/convert/reamur/:reamur", (req,res) => {

    let reamur = req.params.reamur
    let resultC = (5 / 4) * reamur
    let resultF = ((9 / 4) * reamur) + 32
    let resultK = ((5 / 4) * reamur) + 273

    let response = {
        reamur : reamur,
        result : {
            celsius : resultC,
            fahrenheit : resultF,
            kelvin : resultK,
        },
    }

    res.json(response)
})

// endpoint kelvin dengan method GET
app.get("/convert/kelvin/:kelvin", (req,res) => {

    let kelvin = req.params.kelvin
    let resultC = kelvin - 273
    let resultR = (4 / 5) * (kelvin - 273)
    let resultF = ((9 / 5) * (kelvin - 273)) + 32

    let response = {
        kelvin : kelvin,
        result : {
            celsius : resultC,
            reamur : resultR,
            fahrenheit : resultF,
        },
    }

    res.json(response)
})

// endpoint gahrenheit dengan method GET
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {

    let fahrenheit = req.params.fahrenheit
    let resultC = ((5 / 9) * (fahrenheit - 32))
    let resultR = ((4 / 9) * (fahrenheit - 32))
    let resultK = ((5 / 9) * (fahrenheit - 32)) + 273

    let response = {
        fahrenheit : fahrenheit,
        result : {
            celsius : resultC,
            reamur : resultR,
            kelvin : resultK
        },
    }

    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
