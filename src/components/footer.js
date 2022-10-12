export default function Footer() {
  const content = document.getElementById('content')

  const footer = document.createElement('footer')
  const footerDiv = content.appendChild(footer)

  const div = document.createElement('div')
  div.classList.add('center')
  footerDiv.appendChild(div)

  const p = document.createElement('p')
  div.appendChild(p)
  p.innerText = 'Copyright © 2022 AnthonyHeinrichs'

  const a = document.createElement('a')
  a.href = "https://github.com/AnthonyHeinrichs"
  a.target = "_blank"
  div.appendChild(a)

  const i = document.createElement('i')
  i.classList.add('icon')
  i.classList.add('fa')
  i.classList.add('fa-github')
  a.appendChild(i)
}