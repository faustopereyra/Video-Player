const http = require("http");
const app = require("express")();

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"))
app.listen(3001, () => console.log("listening on http port 3001"))

const WebSocketServer = require("websocket").server
let connection = null

//Create Server
const httpserver = http.createServer((req, res) => {
    console.log("request");
})

// State
const VideoSettings = {}

const wsServer = new WebSocketServer({
    "httpServer": httpserver
})

//Handle Connection

wsServer.on("request", request => {
    //User Connect
    connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("open"));
    connection.on("close", () => console.log("close"));
    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)
        //Server Received a message from the client

        console.log(result)
    })

})


//Listen to port 3000
httpserver.listen(3000, () => console.log("listening on http port 3000"))