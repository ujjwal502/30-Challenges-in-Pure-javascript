function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== "transform") return;//skipping it if it's not trabsformed
    console.log(e.propertyName);
    e.target.classList.remove("playing");
}

function playSound(e) {
    // console.log(e);
    // console.log(e.keyCode)
    //getting the audio of respective data key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //Now selecting the corresponding key elements
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;//it will stop the function from running

    key.classList.add("playing");
    audio.currentTime = 0;//This will rewind to the start
    audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));//selecting every key
keys.forEach((key) => //iterating over node list of keys
    key.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);