let user = document.getElementById("user");
console.log(user);


let userPositionX = Math.round(innerWidth / 2 - user.offsetWidth / 2) // locate the middle of X
let userPositionY = Math.round(innerHeight / 2 - user.offsetHeight / 2) // locate the middle of Y

console.log(user.offsetHeight);

// user placement in the middle
function locateUser() {
    user.style.left = userPositionX + 'px'
    user.style.top = userPositionY + 'px'
  }

// Call function after window onload
window.addEventListener('load', () => {
    locateUser()
  })

  document.addEventListener('keydown', handleUser);

// Manipulating with the user

function handleUser(e) {
  let coordinates = user.getBoundingClientRect()

  if (e.key === 'ArrowUp') {   

    if (coordinates.top < user.offsetHeight) {
      user.style.top = 20 + 'px'
    } else {
      user.style.top = coordinates.top - user.offsetHeight + 'px'
    }
  } else if (e.key === 'ArrowRight') { 

    if (coordinates.right + user.offsetWidth >= window.innerWidth) {
      user.style.right = 20 + 'px'
    } else {
      user.style.left = coordinates.left + user.offsetWidth + 'px'
    }
  } else if (e.key === 'ArrowLeft') { 

    if (coordinates.left < user.offsetWidth) {
      user.style.left = 20 + 'px'
    } else {
      user.style.left = coordinates.left - user.offsetWidth + 'px'
    }
  } else {

    if (coordinates.bottom + user.offsetWidth >= window.innerHeight) {
      user.style.bottom = 20 + 'px'
    } else {
      user.style.top = coordinates.top + user.offsetWidth + 'px'
    }
  }
}