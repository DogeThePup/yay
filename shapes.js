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
audio1.play();
  })



    var buttonyagoo = document.getElementById("yahoo");
    buttonyagoo.addEventListener('click', ()=>{
      audio.play()
    })
    var buttondeaf = document.getElementById("Going Deaf");
    buttondeaf.addEventListener('click', ()=>{
      audio.pause()
      
    })
    var buttonhear = document.getElementById("Hearing Aid");
    buttonhear.addEventListener('click', ()=>{
      audio.play()
      
    })
    var buttonup = document.getElementById("Volume Up");
    buttonup.addEventListener('click', ()=>{
      HTMLMediaElement.volume += .1
      
    })
    var buttondown = document.getElementById("Volume Down");
    buttondown.addEventListener('click', ()=>{
      HTMLMediaElement.volume -= .1 
      
      
    })
  }