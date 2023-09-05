var express = require("express")
var app = express()
var PORT = 3000

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("Route girildi.")
        next()
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl)
        next()
    }
}

// app.get("/", function (req, res) {
//     res.send("helo")
// })

app.use(middleware.logger)

app.get("/deneme", middleware.requireAuthentication, function (req, res) {
    res.send("deneme")
})

app.use(express.static(__dirname + "/public"))

app.listen(PORT, function () {
    console.log("Server çalışıyor...")
})