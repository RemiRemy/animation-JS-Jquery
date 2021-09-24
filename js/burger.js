//***************************  Version Jquery ***************************

// $(".burger").click(() => {
//     $(".listeMenu").slideToggle()
// })

// *************************** Version javascript **********************************

const button = document.querySelector(".burger") 
const menu = document.querySelector(".listeMenu")


button.addEventListener("click", event => {
    menu.classList.toggle("show")
    button.classList.toggle("croixBurger")
})

