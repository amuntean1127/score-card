let homeScore = 0
let guestScore = 0
let homeElement = document.getElementById("home")
let guestElement = document.getElementById("guest")

function increaseHome(value) {
  homeScore += value
  homeElement.innerText = homeScore
}

function increaseGuest(value) {
  guestScore += value
  guestElement.innerText = guestScore
}

function reset() {
  homeScore = 0
  guestScore = 0
  homeElement.innerText = homeScore
  guestElement.innerText = guestScore
}