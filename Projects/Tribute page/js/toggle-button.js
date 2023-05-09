const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


function showAlert() {
  alert ("If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe.");
      
}