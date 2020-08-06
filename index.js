const http = require("http");
const app = require("express")();

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"))
app.get("/app.js", (req, res) => res.sendFile(__dirname + "/app.js"))
app.get("/style.css", (req, res) => res.sendFile(__dirname + "/style.css"))
app.listen(3001, () => console.log("listening on http port 3001"))

const WebSocketServer = require("websocket").server
const httpserver = http.createServer()

//Listen to port 3000
httpserver.listen(3000, () => console.log("listening on http port 3000"))




// State
const clients = {};
let play = true

const wsServer = new WebSocketServer({
    "httpServer": httpserver
})


//Handle Connection
wsServer.on("request", request => {
    //User Connect
    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("Opened"));
    connection.on("close", () => console.log("Closed"));
    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)
        console.log(result)
        //Server Received a message from the client

        //a user stops/play
        if (result.method === "togglePlay") {
            console.log("activo")
            play = result.play
            updatePlayerState()
        }

    })

    //generate a new clientId
    const clientId = guid();
    clients[clientId] = {
        "connection": connection
    }

    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }



    //send back the client connect
    connection.send(JSON.stringify(payLoad))

    console.log(Object.keys(clients))

})


function updatePlayerState() {

    console.log(play)
    for (let client of Object.keys(clients)) {

        const payLoad = {
            "method": "update",
            "play": play
        }

        clients[client].connection.send(JSON.stringify(payLoad))
    }

    setTimeout(updatePlayerState, 500);
}



function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
