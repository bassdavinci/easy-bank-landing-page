const togglerIcons = document.querySelector(".toggler-icons")
const dropdownMenu = document.querySelector(".dropdown-menu")

togglerIcons.addEventListener("click", () => togglerIcons.classList.toggle("active"))

function openMenu() {
    dropdownMenu.style.display = "block"
}
function closeMenu() {
    dropdownMenu.style.display = "none"
}