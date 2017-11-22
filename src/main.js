
let resize = function () {
  let player = document.getElementById('trailer')
  let container = document.getElementById('video')
  let controls = document.getElementsByClassName('vjs-controls-enabled')[0]
  let playerTwo = document.getElementById('trailer_html5_api')
  player.style.width = container.clientWidth + 'px'
  controls.style.height = playerTwo.clientHeight + 'px'
  console.log(controls.clientHeight + ' container height ' + playerTwo.clientHeight)
  console.log(player.clientWidth + ' container ' + container.clientWidth)
}
window.onload = resize
window.onresize = resize
