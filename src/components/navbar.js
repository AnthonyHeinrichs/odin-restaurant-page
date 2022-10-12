export default function Navbar() {
  const tabs = ['Home', 'Menu', 'Contact']
  const contentDiv = document.getElementById('content')
  const navbar = document.createElement('navbar')
  const navbarDiv = contentDiv.appendChild(navbar)

  const div = document.createElement('div')
  div.classList.add('title')
  const titleDiv = navbarDiv.appendChild(div)

  const divForButtons = document.createElement('div')
  divForButtons.classList.add('buttons')
  const buttonDiv = navbarDiv.appendChild(divForButtons)

  const mainTitle = document.createElement('h2')
  mainTitle.classList.add('mainTitle')
  titleDiv.appendChild(mainTitle)
  mainTitle.innerText = `Marthas Delicious Burgers`

  for( let i = 0; i < tabs.length; i++){
    let btn = document.createElement('button')
    btn.id = tabs[i]
    btn.innerText = tabs[i]
    btn.type = 'button'
    buttonDiv.appendChild(btn)
  }
}
