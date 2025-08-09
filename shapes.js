window.onload = init
let maxwell;
let kirb
var darkmode = false
var button = document.getElementById("yahoo");
button.addEventListener('click', ()=>{
  audio.play()
})
var audio
var audio1
var audio2kirb
function init() {
  maxwell = document.getElementById("maxwell");
  audio = new Audio('pixelperfect.mp3');
  audio.play()
  maxwell.addEventListener('click', () => {
    audio.pause()
    audio1 = new Audio('mexwellsound.mp3');
    audio1.play();
  })
  kirb = document.getElementById("kirb");
  kirb.addEventListener('click', () => {
    audio.pause()
    audio2kirb = new Audio('poyo.mp3');
    audio2kirb.play();
  })
  
  
  var buttonyagoo = document.getElementById("yahoo");
  buttonyagoo.addEventListener('click', ()=>{
    audio.play()
  })
  var buttondeaf = document.getElementById("Going Deaf");
  buttondeaf.addEventListener('click', ()=>{
    audio.pause()
    audio1.pause()
  })
  var buttonhear = document.getElementById("Hearing Aid");
  buttonhear.addEventListener('click', ()=>{
    audio.play()
    audio1.play()
  })
  var buttonup = document.getElementById("Volume Up");
  buttonup.addEventListener('click', ()=>{
    audio.volume += .1
    audio1.volume += .1 
  })
  var buttondown = document.getElementById("Volume Down");
  buttondown.addEventListener('click', ()=>{
    audio.volume -= .1 
    audio1.volume -= .1 
    
  })
  var buttondark = document.getElementById("dark mode");
  buttondark.addEventListener('click', ()=>{ 
    darkmode = !darkmode
    var heading = document.getElementsByTagName("h1")[0]
    if (darkmode) {
      document.body.style.backgroundColor = 'black';
      document.documentElement.style.backgroundColor = 'black';
      heading.style.backgroundColor = 'black'
      heading.style.color = 'white'
    } else {
      document.body.style.backgroundColor = 'white';
      document.documentElement.style.backgroundColor = 'white';
      heading.style.backgroundColor = 'white'
      heading.style.color = 'black'
    }
  })
}