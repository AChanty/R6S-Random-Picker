import { attackers, defenders, allOps } from './operators.js'

const imgSelect = document.querySelector(".operator__img")
const iconSelect = document.querySelector(".operator__icon")
const nameSelect = document.querySelector(".operator__name")
const buttonAtk = document.querySelector(".btn-atk")
const buttonDef = document.querySelector(".btn-def")

// --------------------------------------------------------------------------------------------
// -------------------------- PERSO ALEATOIRE À L'ARRIVÉ SUR LA PAGE --------------------------
// landingRandom() // appelle fonction "landingRandom"

function landingRandom() {
    insertOpInfos(allOps)
}

// -----------------------------------------------------------------------
// -------------------------- BOUTTON ATTACKERS --------------------------
buttonAtk.addEventListener('click', function () { // appelle une fonction au clic sur le boutton
    insertOpInfos(attackers)
})

// -----------------------------------------------------------------------
// -------------------------- BOUTTON DEFENDERS --------------------------
buttonDef.addEventListener('click', function () { // appelle une fonction au clic sur le boutton
    insertOpInfos(defenders)
})

// -------------------------- INSERTION DU CONTENU --------------------------
function insertOpInfos(role) {
    let i = Math.floor(Math.random() * role.length) // prend un chiffre aléatoire par rapport au nombre d'opérateurs correspondant au role, arrondit au chiffre inférieur
    const { image, icon, name } = role[i]
    imgSelect.setAttribute('src', image) // remplace l'image par celle de l'opérateur tiré au hasard
    imgSelect.setAttribute('alt', name) // ajoute alt de l'image correpondant au nom de l'opérateur
    iconSelect.setAttribute('src', icon) // remplace l'icone par celui de l'opérateur tiré au hasard
    iconSelect.setAttribute('alt', name) // ajoute alt de l'icone correpondant au nom de l'opérateur
    nameSelect.textContent = name // remplace le nom par celui de l'opérateur tiré au hasard
    animation() // appelle fonction "animation"
}

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