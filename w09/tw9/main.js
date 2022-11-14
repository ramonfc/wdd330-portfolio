const audios = document.getElementsByTagName("audio");
const arrayAudios = Array.from(audios);
// console.log(arrayAudios);

const keys = document.querySelectorAll(".key");

function bajar(key, amount) {
    key.style.transform = `translateY(${amount}px)`;
    window.requestAnimationFrame(bajar);
}
let count = 1;
addEventListener("keypress", e=>{
    
    arrayAudios.forEach((audio, idx) =>{
        audio.pause();
        audio.currentTime = 0;
        if(audio.dataset.key == e.keyCode){
            audio.play();
            count++; 
            audio.addEventListener('play', (event) => {
                keys[idx].classList.add("playing");
                // keys[idx].classList.add("moving");
                let id = requestAnimationFrame(bajar(keys[idx], 10*count));

            });
            
            audio.addEventListener('ended', (event) => {
                keys[idx].classList.remove("playing");
            }); 
            
            audio.addEventListener('pause', (event) => {
                keys[idx].classList.remove("playing");
            }); 
         
         if(count ===11) count = 0;  
        }
        return
    });
    
});

