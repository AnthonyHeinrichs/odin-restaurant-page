export default function Home() {
  const content = document.getElementById('contentAfterNav')

  // Creating img html element and appending to content after navbar
  const img = document.createElement('img')
  img.src = '../src/assets/marthas.png'
  img.alt = `Martha's delicious burgers`
  img.id = 'homeImg'
  content.appendChild(img)

  
}