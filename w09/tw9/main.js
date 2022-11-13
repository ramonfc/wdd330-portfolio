const audios = document.getElementsByTagName("audio");
const arrayAudios = Array.from(audios);
// console.log(arrayAudios);

const keys = document.querySelectorAll(".key");

addEventListener("keypress", e=>{
    arrayAudios.forEach((audio, idx) =>{
        audio.pause();
        audio.currentTime = 0;
        if(audio.dataset.key == e.keyCode){
            audio.play();

            audio.addEventListener('play', (event) => {
                keys[idx].classList.add("playing");
                keys[idx].classList.add("moving");
            });
            
            audio.addEventListener('ended', (event) => {
                keys[idx].classList.remove("playing");
            }); 
            
            audio.addEventListener('pause', (event) => {
                keys[idx].classList.remove("playing");
            }); 
            
        }
        return
    });
    
});

