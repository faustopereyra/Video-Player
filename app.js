//Save Elements
const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");


//Server Logic

let clientId = null;

let ws = new WebSocket("ws://localhost:3000/")


const togglePlay = () => {
    let state

    video.paused ? state = true : state = false;

    const payload = {
        "method": "togglePlay",
        "play": state,
        "clientId": clientId
    }

    ws.send(JSON.stringify(payload))
}



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

        if (play) {
            video.play();
            playBtn.classList.replace("fa-play", "fa-pause");
            playBtn.setAttribute("title", "Pause")
        } else {
            video.pause();
            playBtn.classList.replace("fa-pause", "fa-play");
            playBtn.setAttribute("title", "play");
        }
    }
}


//Client Logic


// Progress Bar 
const displayTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return `${minutes}:${seconds}`
}
const updateProgress = () => {
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`
    currentTime.textContent = `${displayTime(video.currentTime)}/`;
    duration.textContent = `${displayTime(video.duration)}`;
}

const setProgress = (e) => {
    const newTime = e.offsetX / progressRange.offsetWidth;
    progressBar.style.width = `${newTime * 100}%`
    video.currentTime = newTime * video.duration;
}
// Volume Controls 
const changeVolume = (e) => {
    let volume = e.offsetX / volumeRange.offsetWidth;

    if (volume < 0.1) {
        volume = 0;
    }
    if (volume > 0.9) {
        volume = 1;
    }
    volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;

    volumeIcon.className = "";
    if (volume > 0.7) {
        volumeIcon.classList.add("fas", "fa-volume-up");
    } else if (volume < 0.7 && volume > 0) {
        volumeIcon.classList.add("fas", "fa-volume-down");
    } else {
        volumeIcon.classList.add("fas", "fa-volume-off");
    }
}


// Change Playback Speed 



// Fullscreen 


//Event Listeners

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);
progressRange.addEventListener("click", setProgress);
volumeRange.addEventListener("click", changeVolume)