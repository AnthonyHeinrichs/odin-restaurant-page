export default function Home() {
  const content = document.getElementById('contentAfterNav')

  const img = document.createElement('img')
  img.src = '../src/assets/marthas.png'
  img.alt = `Martha's delicious burgers`
  img.id = 'homeImg'
  content.appendChild(img)
}