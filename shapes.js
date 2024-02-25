window.onload = init
let maxwell;

function init() {
  maxwell = document.getElementById("maxwell");
  maxwell.addEventListener('click', () => {
    document.getElementById('pixel').pause();
    var audio = new Audio('pixelperfect.mp3');
audio.play();;
  });
}