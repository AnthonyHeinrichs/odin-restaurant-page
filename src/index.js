import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/contact'
import Menu from './pages/menu'

function initialPageLoad() {
  Navbar()
  const contentDiv = document.getElementById('content')
  const contentAfterNav = document.createElement('div')
  contentAfterNav.id = 'contentAfterNav'
  contentDiv.appendChild(contentAfterNav)
  
  const homeButton = document.getElementById('Home')
  const menuButton = document.getElementById('Menu')
  const contactButton = document.getElementById('Contact')
  
  homeButton.addEventListener('click', () => {
    Home()
  })
  
  menuButton.addEventListener('click', () => {
    Menu()
  })
  
  contactButton.addEventListener('click', () => {
    Contact()
  })
}

initialPageLoad()