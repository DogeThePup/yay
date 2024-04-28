window.onload = init
let maxwell;

function init() {
  maxwell = document.getElementById("maxwell");
  var audio = new Audio('pixelperfect.mp3');
  audio.play()
  maxwell.addEventListener('click', () => {
   audio.pause()
    var audio1 = new Audio('mexwellsound.mp3');
audio1.play();
  })



    var button = document.getElementById("yahoo");
    button.addEventListener('click', ()=>{
      audio.play()
    })
  
}