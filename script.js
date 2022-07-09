const player = document.getElementById('player')
const object = document.getElementById('object')

let jumpObject = 0
let slideObject = 1

let intervalId = window.setInterval(() => {
  //randomly chooses slide or jump object
  let random = Math.floor(Math.random() * 2)

  if (random == jumpObject) {
    object.classList.add('object-jump')
  } else {
    object.classList.add('object-slide')
  }
  object.classList.add('move')

  setTimeout(() => {
    object.classList.remove('object-jump')
    object.classList.remove('object-slide')
    object.classList.remove('move')
  }, 1000)
}, 1500)

window.addEventListener('keydown', handleKeydown)

function handleKeydown(e) {
  //user presses w or arrow up
  if (e.keyCode == 87 || e.keyCode == 38) {
    jump()
  }
  //user presses s or arrow down
  if (e.keyCode == 83 || e.keyCode == 40) {
    slide()
  }
}

function jump() {
  //check if animation is already in action
  if (player.classList != 'jump' || player.classList != 'slide') {
    //if not in action, add jump animation
    player.classList.add('jump')

    //remove class after animation
    setTimeout(() => {
      player.classList.remove('jump')
    }, 500)
  }
} 

function slide() {
  //check if animation is already in action
  if (player.classList != 'jump' || player.classList != 'slide') {
    //if not in action, add slide animation
    player.classList.add('slide')

    //remove class after animation
    setTimeout(() => {
      player.classList.remove('slide')
    }, 500)
  }
}