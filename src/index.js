import initialPageLoad from './components/loadPage'
import Home from './pages/home'
import Contact from './pages/contact'
import Menu from './pages/menu'

initialPageLoad()

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