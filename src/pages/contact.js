export default function Contact() {
  // Grabbing main content after navbar div to append to
  const content = document.getElementById('contentAfterNav')

  // Creating div element to center my contact title
  const div1 = document.createElement('div')
  div1.classList.add('center')
  const contactTitleDiv = content.appendChild(div1)
  
  // Creating contact title element
  const title = document.createElement('h2')
  title.classList.add('contactTitle')
  contactTitleDiv.appendChild(title)
  title.innerText = 'Contact us'

  // Creating div element to center my contact text
  const div2 = document.createElement('div')
  div2.classList.add('center')
  const contactTextDiv = content.appendChild(div2)

  // Creating contact text element
  const contactText = document.createElement('p')
  contactText.classList.add('contactText')
  contactTextDiv.appendChild(contactText)
  contactText.innerText = 'You can call us at 030 55065888'
}