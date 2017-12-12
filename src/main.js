
let resize = function () {
  let player = document.getElementById('videoPlayer')
console.log(player.clientWidth);
  player.style.height = (player.clientWidth / (16 / 9)) + 'px'
}
window.onload = resize
window.onresize = resize
