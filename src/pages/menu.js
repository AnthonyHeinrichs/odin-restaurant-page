export default function Menu() {
  // Getting content div to add burgers to page
  const content = document.getElementById('contentAfterNav')
  
  // Creating div to center my burger content
  const div1 = document.createElement('div')
  div1.classList.add('centerBurgers')
  content.appendChild(div1)

  // Creating new burger img, title, ingredient description and price
  const cheeseburger = document.createElement('img')
  cheeseburger.src = '../src/assets/cheeseburger.png'
  cheeseburger.alt = 'cheeseburger'
  cheeseburger.classList.add('burger')
  div1.appendChild(cheeseburger)

  const div2 = document.createElement('div')
  div1.appendChild(div2)

  const cheeseburgerTitle = document.createElement('h2')
  cheeseburgerTitle.classList.add('burgerTitle')
  div2.appendChild(cheeseburgerTitle)
  cheeseburgerTitle.innerText = 'Cheeseburger'

  const cheeseburgerIngredients = document.createElement('p')
  cheeseburgerIngredients.classList.add('burgerIngredients')
  div2.appendChild(cheeseburgerIngredients)
  cheeseburgerIngredients.innerText = 'Includes bun, cheese, patty, tomatoes, onions, and mayo'

  const cheeseburgerPrice = document.createElement('p')
  cheeseburgerPrice.classList.add('burgerPrice')
  div2.appendChild(cheeseburgerPrice)
  cheeseburgerPrice.innerText = '€ 7,90'

  // Creating div to center my burger content
  const div3 = document.createElement('div')
  div3.classList.add('centerBurgers')
  content.appendChild(div3)

  // Creating new burger img, title, ingredient description and price
  const veggieburger = document.createElement('img')
  veggieburger.src = '../src/assets/veggieburger.png'
  veggieburger.alt = 'veggieburger'
  veggieburger.classList.add('burger')
  div3.appendChild(veggieburger)

  const div4 = document.createElement('div')
  div3.appendChild(div4)

  const veggieburgerTitle = document.createElement('h2')
  veggieburgerTitle.classList.add('burgerTitle')
  div4.appendChild(veggieburgerTitle)
  veggieburgerTitle.innerText = 'Veggieburger'

  const veggieburgerIngredients = document.createElement('p')
  veggieburgerIngredients.classList.add('burgerIngredients')
  div4.appendChild(veggieburgerIngredients)
  veggieburgerIngredients.innerText = 'Includes bun, halloumi cheese, tomatoes, onions, homemade mango chutney and honey-mustard sauce'

  const veggieburgerPrice = document.createElement('p')
  veggieburgerPrice.classList.add('burgerPrice')
  div4.appendChild(veggieburgerPrice)
  veggieburgerPrice.innerText = '€ 7,40'
}