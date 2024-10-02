const albumCover = document.querySelector(".album-cover");
const progressBar = document.querySelector(".progress-bar");
const startButton = document.querySelector(".fa-play");
const pauseButton = document.querySelector(".fa-pause");
const nextButton = document.querySelector(".fa-forward");
const prevButton = document.querySelector(".fa-backward");
const mp3 = [
    {
        id: 0,
        title: "Frog sound",
        src: "mp3 folder/Sound.mp3"
    },
    {
        id: 1,
        title: "Bird sound",
        src: "mp3 folder/Bird sound.mp3"
    }
];
let currentSongIndex = 0;
let audio = new Audio(mp3[currentSongIndex].src);


    startButton.addEventListener("click", playAudio);
    pauseButton.addEventListener("click", pauseAudio);
    nextButton.addEventListener("click", nextAudio);
    prevButton.addEventListener("click", prevAudio);

function playAudio(){
    audio.play();
    //visual aspect of the code
    albumCover.style.animationPlayState = "running";
    pauseButton.style.visibility = "visible";
    startButton.style.visibility = "hidden";
}
function pauseAudio(){
    audio.pause();
    //visual aspect of the code
    albumCover.style.animationPlayState = "paused";
    pauseButton.style.visibility = "hidden";
    startButton.style.visibility = "visible";
}
function nextAudio(){
    if(currentSongIndex < mp3.length - 1){
    currentSongIndex++;
    audio = new Audio(mp3[currentSongIndex].src);
    audio.pause();
    playAudio();
    }
}
function prevAudio(){
    if(currentSongIndex > 0){
    currentSongIndex--;
    audio = new Audio(mp3[currentSongIndex].src);
    audio.pause();
    playAudio();
    }
}
