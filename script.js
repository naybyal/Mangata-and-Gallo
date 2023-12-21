audioElement.play();

if (navigator.getAutoplayPolicy(video) === "allowed") {
    // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
    // Mute audio on video
    video.muted = true;
} else if (navigator.getAutoplayPolicy(video) === "disallowed") {
    // Set a default placeholder image.
    video.poster = "https://w0.peakpx.com/wallpaper/490/440/HD-wallpaper-emerald-ring-jewelry-gem-black-feathers-white-gold.jpg";
}