window.onload = init
let maxwell;
sys.set_int_max_str_digits(5000)

var button = document.getElementById("yahoo");
    button.addEventListener('click', ()=>{
      audio.play()
    })
function init() {
  maxwell = document.getElementById("maxwell");
  var audio = new Audio('pixelperfect.mp3');
  audio.play()
  maxwell.addEventListener('click', () => {
   audio.pause()
    var audio1 = new Audio('mexwellsound.mp3');
audio.play();
  })



    var button = document.getElementById("yahoo");
    button.addEventListener('click', ()=>{
      audio.play()
    })
    var button = document.getElementById("Going Deaf");
    button.addEventListener('click', ()=>{
      audio.pause()
      
    })
    var button = document.getElementById("Hearing Aid");
    button.addEventListener('click', ()=>{
      audio.play()
      
    })
    var button = document.getElementById("Volume Up");
    button.addEventListener('click', ()=>{
      HTMLMediaElement.volume;1.1
      
    })
    var button = document.getElementById("Volume Down");
    button.addEventListener('click', ()=>{
      HTMLMediaElement.volume;.5 
      
      
    })
  }