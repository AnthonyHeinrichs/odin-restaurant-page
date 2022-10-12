export default function Home() {
  const content = document.getElementById('contentAfterNav')

  // Creating img html element and appending to content after navbar
  const img = document.createElement('img')
  img.src = '../src/assets/marthas.png'
  img.alt = `Marthas delicious burgers`
  img.id = 'homeImg'
  content.appendChild(img)

  const div = document.createElement('div')
  div.classList.add('statement')
  content.appendChild(div)

  const p = document.createElement('p')
  p.classList.add('statementText')
  div.appendChild(p)
  let paragraph = "Fresh burger's in the heart of the historic Kreuzberg district."
  paragraph += " " + "Come try our unique burgers and eat our fresh cut fries."
  paragraph += " " + "We make our buns in house with lots of love and care."
  paragraph += " " + "Come down anytime!"
  p.innerText = paragraph
}