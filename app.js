const restArray = [
  'Red Bowl',
  'Woodys Tavern',
  'Bravos',
  'Blaze',
  'Lacucina',
  'Jersey Mikes',
  'Triangle Chicken House',
  'Salsa Fresh',
  'Chilis',
  'Lucky 7',
  'Wegmans',
]
const clickButton = document.getElementById('rdmBtn')
const display = document.querySelector('.display')

// let choice = Math.floor(Math.random() * (1 - 4) + 4)

function getRandom(min = 1, max = 4) {
  return Math.floor(Math.random() * (max - min) + min)
}

clickButton.addEventListener('click', () => {
  let randomRest = restArray[Math.floor(Math.random() * restArray.length)]

  function pick() {
    return randomRest
  }

  display.innerHTML = pick(randomRest)
})
