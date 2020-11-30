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

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari body

    let volume = sisi * sisi  * sisi
    let luas_permukaan = 6 * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let p = Number(req.body.p) // mengambil nilai panjang dari body
    let l = Number(req.body.l) // mengambil nilai panjang dari body
    let t = Number(req.body.t) // mengambil nilai panjang dari body

    let volume = p * l  * t
    let luas_permukaan = 2 * (p*l + p*t + l*t)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        p: p,
        l: l,
        t: t,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/prisma s4" dengan method POST
app.post("/prismas4", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let s = Number(req.body.s) // mengambil nilai panjang dari body, s = sisi
    let t = Number(req.body.t) // mengambil nilai panjang dari body

    let ka = 4 * s // ka = keliling alas
    let volume = s * s * t
    let luas_permukaan = 2 * s * s + (ka * t)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        s: s,
        t: t,
        ka: ka,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) // mengambil nilai panjang dari body, r = jari-jari

    let pi = 3.14
    let volume = 4/3 * pi * (r * r * r)
    let luas_permukaan = 4 * pi * (r * r)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        r: r,
        pi: pi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
