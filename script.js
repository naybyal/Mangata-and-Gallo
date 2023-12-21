const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay, false);

let hasPlayed = false;
function handleFirstPlay(event) {
    if (!hasPlayed) {
        hasPlayed = true;

        // Remove listener so this only gets called once.
        const vid = event.target;
        vid.removeEventListener("play", handleFirstPlay);

        // Start whatever you need to do after first playback has started
    }
}
let playAttempt = setInterval(() => {
    videoElem
        .play()
        .then(() => {
            clearInterval(playAttempt);
        })
        .catch((error) => {
            console.log("Unable to play the video, User has not interacted yet.");
        });
}, 3000);
