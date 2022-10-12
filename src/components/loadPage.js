import Navbar from './navbar'
import Home from '../pages/home'

export default function InitialPageLoad() {
  Navbar()

  // creating a div for all content after the navbar
  const contentDiv = document.getElementById('content')
  const contentAfterNav = document.createElement('div')
  contentAfterNav.id = 'contentAfterNav'
  contentDiv.appendChild(contentAfterNav)

  // initially loading the home page
  Home()
}