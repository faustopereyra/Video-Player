//Save Elements
//const playBtn = document.getElementById("play-btn")

//Server Logic

let clientId = null;

let ws = new WebSocket("ws://localhost:3000/")


//Define Events

// playBtn.addEventListener("click", () => {

//     const payload = {
//         "method": togglePlay,
//         "clientId": clientId
//     }

//     ws.send(JSON.stringify(payload))
// })

//Get Server Data
ws.onmessage = message => {
    const response = JSON.parse(message.data);

    //conect
    if (response.method === "connect") {
        clientId = response.clientId;
        console.log("Client id Set successfully " + clientId)
    }

    //update
    if (response.method === "update") {
        const play = response.play

        console.log(play)
    }
}


//Client Logic

// Play & Pause ----------------------------------- //



// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


