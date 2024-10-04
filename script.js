const albumCover = document.querySelector(".album-cover");
const progressBar = document.querySelector(".progress-bar");
const startButton = document.querySelector(".fa-play");
const pauseButton = document.querySelector(".fa-pause");
const nextButton = document.querySelector(".fa-forward");
const prevButton = document.querySelector(".fa-backward");
const shuffleButton = document.querySelector(".fa-shuffle");
const songTitle = document.querySelector(".title");
const songsHTML = document.querySelector(".songs");

//an array that contains all the song's info
const mp3 = [
    {
        id: 1,
        title: "Cricket sound",
        src: "mp3 folder/Sound.mp3",
        artist: "some cricket",
        albumImage: "image folder/Cricket image.jpg",
        duration: "0:06"
    },
    {
        id: 2,
        title: "Bird sound",
        src: "mp3 folder/Bird sound.mp3",
        artist: "some bird",
        albumImage: "image folder/Bird image.jpg",
        duration: "0:17"
    },
    {
        id: 3,
        title: "Goat sound",
        src: "mp3 folder/Goat sound.mp3",
        artist: "some goat",
        albumImage: "image folder/Goat image.jpg",
        duration: "0:05"
    },
    {
        id: 4,
        title: "Water sound",
        src: "mp3 folder/Water sound.mp3",
        artist: "water",
        albumImage: "image folder/Water image.jpg",
        duration: "0:11"
    }
];
/*renders the song, pass the mp3 array and maps individual object into a new 
html snippet*/
function renderSong(array){
    const HTML = array.map((song)=> {
      return `
      <div class="song">
      <button class="song-button grid center" onclick = "pressPlayAudio(${song.id})">
        <div class="song-number">${array.indexOf(song)+1}</div>
            <div class="flexbox">
            <img class="album" src="${song.albumImage}">
            <div class="song-title">${song.title}</div>
                </div>
            <div class="song-artist">${song.artist}</div>
            <div class="song-length">${song.duration}</div>
            </button>
            <button class="button" onclick = "deleteSong(${song.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
    })
    .join("");
   songsHTML.innerHTML = HTML;
}
renderSong(mp3);
const currentSong = document.querySelectorAll(".song");
let currentSongIndex = 0;
let audio = new Audio(mp3[currentSongIndex].src);
let isShuffle = false;
songTitle.innerText = mp3[0].title;

//Buttons
    startButton.addEventListener("click", playAudio);
    pauseButton.addEventListener("click", pauseAudio);
    nextButton.addEventListener("click", nextAudio);
    prevButton.addEventListener("click", prevAudio);
    shuffleButton.addEventListener("click", shuffle);
//Ends the song

//functions
function pressPlayAudio(id){
    pauseAudio();
    currentSongIndex = id - 1;
    audio = new Audio(mp3[currentSongIndex].src);
    playAudio();
}
function playAudio(){
    if(isShuffle){
        //implement shuffle feature
    }
    else{
    audio.play();
    //visual aspect of the code
    albumCover.style.animationPlayState = "running";
    pauseButton.style.visibility = "visible";
    startButton.style.visibility = "hidden";
    currentSong[currentSongIndex].style.border = "3px solid yellow";
    albumCover.setAttribute("src", `${mp3[currentSongIndex].albumImage}`);
    songTitle.innerText = `${mp3[currentSongIndex].title}`;
    audio.addEventListener("ended", nextAudio);
    currentSong[currentSongIndex].style.animation = "none";
    currentSong[currentSongIndex].offsetWidth; 
    currentSong[currentSongIndex].style.animation = "opacitate 1s";
    }
}
function pauseAudio(){
    audio.pause();
    //visual aspect of the code
    albumCover.style.animationPlayState = "paused";
    pauseButton.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    currentSong[currentSongIndex].style.border = "none";
}
function nextAudio(){
    if(currentSongIndex < mp3.length - 1){
    currentSong[currentSongIndex].style.border = "none";
    audio.pause();
    currentSongIndex++;
    audio = new Audio(mp3[currentSongIndex].src);
    playAudio();
    }
    else{
        pauseAudio();
    }
}
function prevAudio(){
    if(currentSongIndex > 0){
    currentSong[currentSongIndex].style.border = "none";
    audio.pause();
    currentSongIndex--;
    audio = new Audio(mp3[currentSongIndex].src);
    playAudio();
    }
}
function shuffle(){
    if(!isShuffle){
        isShuffle = true;
        shuffleButton.style.color = "yellow";
    }
    else{
        isShuffle = false;
        shuffleButton.style.color = "white";
    }
}
function deleteSong(id){
    currentSongIndex = id - 1;
    mp3.splice(currentSongIndex, 1);
    renderSong(mp3);
}