let http = require("http")

let server = http.createServer((req, res) => {

    if (req.url == "/news") {
        res.end("welcome to news page")
    }
    if (req.url == "/") {

        res.end("welcome my brown suger")
    }


})

server.listen("8000")  // http//localhost:8000