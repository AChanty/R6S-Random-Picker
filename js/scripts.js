import { attackers, defenders, allOps } from './operators.js'

let imgSelect = document.querySelector(".operator__img")
let iconSelect = document.querySelector(".operator__icon")
let nameSelect = document.querySelector(".operator__name")
let buttonAtk = document.querySelector(".btn-atk")
let buttonDef = document.querySelector(".btn-def")

// --------------------------------------------------------------------------------------------
// -------------------------- PERSO ALEATOIRE À L'ARRIVÉ SUR LA PAGE --------------------------
landingRandom() // appelle fonction "landingRandom"

function landingRandom () {
    let i = Math.floor(Math.random() * allOps.length) // arrondir au chiffre inférieur au nombre d'opérateurs présents
    const { image, icon, name } = allOps[i]
    imgSelect.setAttribute('src', image)
    iconSelect.setAttribute('src', icon)
    nameSelect.textContent = name
    console.log(i)
}

// -----------------------------------------------------------------------
// -------------------------- BOUTTON ATTACKERS --------------------------
buttonAtk.addEventListener('click', function () { // appelle une fonction au clic sur le boutton
    let i = Math.floor(Math.random() * attackers.length)
    const { image, icon, name } = attackers[i]
    imgSelect.setAttribute('src', image)
    iconSelect.setAttribute('src', icon)
    nameSelect.textContent = name
    animation() // appelle fonction "animation"
})

// -----------------------------------------------------------------------
// -------------------------- BOUTTON DEFENDERS --------------------------
buttonDef.addEventListener('click', function () { // appelle une fonction au clic sur le boutton
    let i = Math.floor(Math.random() * defenders.length)
    const { image, icon, name } = defenders[i]
    imgSelect.setAttribute('src', image)
    iconSelect.setAttribute('src', icon)
    nameSelect.textContent = name
    animation() // appelle fonction "animation"
})

// ----------------------------------------------------------------
// -------------------------- ANIMATIONS --------------------------
function animation() {
        imgSelect.classList.remove('operator__img'); // reset animation
        void imgSelect.offsetWidth;
        imgSelect.classList.add('operator__img'); // restart animation
    
        iconSelect.classList.remove('operator__icon'); // reset animation
        void iconSelect.offsetWidth;
        iconSelect.classList.add('operator__icon'); // restart animation
    
        nameSelect.classList.remove('operator__name'); // reset animation
        void nameSelect.offsetWidth;
        nameSelect.classList.add('operator__name'); // restart animation
}