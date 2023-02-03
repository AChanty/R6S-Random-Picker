import { attackers, defenders, allOps } from './operators.js'

const elements = {
   img: document.querySelector('.operator__img'),
   icon: document.querySelector('.operator__icon'),
   name: document.querySelector('.operator__name'),
}

const buttons = {
   atk: document.querySelector('.btn-atk'),
   def: document.querySelector('.btn-def'),
}

displayRandomOperator(allOps)

buttons.atk.addEventListener('click', () => displayRandomOperator(attackers))
buttons.def.addEventListener('click', () => displayRandomOperator(defenders))

function displayRandomOperator(role) {
   const randomIndex = Math.floor(Math.random() * role.length)
   const { image, icon, name } = role[randomIndex]

   elements.img.setAttribute('src', image)
   elements.img.setAttribute('alt', name)
   elements.icon.setAttribute('src', icon)
   elements.icon.setAttribute('alt', name)
   elements.name.textContent = name

   animateElements()
}

function animateElements() {
   Object.values(elements).forEach((element) => {
      const className = element.classList[0]
      element.classList.remove(className)
      void element.offsetWidth
      element.classList.add(className)
   })
}
