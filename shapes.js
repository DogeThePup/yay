window.onload = init
let maxwell;
var darkmode = false
var button = document.getElementById("yahoo");
    button.addEventListener('click', ()=>{
      audio.play()
    })
var audio1
function init() {
  maxwell = document.getElementById("maxwell");
  var audio = new Audio('pixelperfect.mp3');
  audio.play()
  maxwell.addEventListener('click', () => {
   audio.pause()
     audio1 = new Audio('mexwellsound.mp3');
audio1.play();
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
      document.html.style.backgroundColor = 'black';
      heading.style.backgroundColor = 'black'
      heading.style.color = 'white'
      } else {
              document.body.style.backgroundColor = 'white';
              document.html.style.backgroundColor = 'white';
          heading.style.backgroundColor = 'white'
          heading.style.color = 'black'
      }
    })
  }