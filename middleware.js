module.exports = {
    requireAuthentication: function (req, res, next) {
        console.log("Route girildi.")
        next()
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl)
        next()
    }
}