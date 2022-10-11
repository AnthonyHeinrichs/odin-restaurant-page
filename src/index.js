import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/contact'
import Menu from './pages/menu'

function initialPageLoad() {
  // Initially loading the navbar
  Navbar()

  // creating a div for all content after the navbar
  const contentDiv = document.getElementById('content')
  const contentAfterNav = document.createElement('div')
  contentAfterNav.id = 'contentAfterNav'
  contentDiv.appendChild(contentAfterNav)

  // initially loading the home page
  Home()
  
  // grabbing all buttons for listening
  const homeButton = document.getElementById('Home')
  const menuButton = document.getElementById('Menu')
  const contactButton = document.getElementById('Contact')
  
  // navbar buttons that listen for a click and render the page dynamically
  homeButton.addEventListener('click', () => {
    contentAfterNav.replaceChildren()
    Home()
  })
  
  menuButton.addEventListener('click', () => {
    contentAfterNav.replaceChildren()
    Menu()
  })
  
  contactButton.addEventListener('click', () => {
    contentAfterNav.replaceChildren()
    Contact()
  })
}

initialPageLoad()