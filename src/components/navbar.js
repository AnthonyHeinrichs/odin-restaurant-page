export default function Navbar() {
  const tabs = ['Home', 'Menu', 'Contact']
  const contentDiv = document.getElementById('content')
  const navbar = document.createElement('navbar')
  const navbarDiv = contentDiv.appendChild(navbar)

  for( let i = 0; i < tabs.length; i++){
    let btn = document.createElement('button')
    btn.id = tabs[i]
    btn.innerText = tabs[i]
    btn.type = 'button'
    navbarDiv.appendChild(btn)
  }    
}
