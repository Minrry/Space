const header = document.querySelector("header");
window.addEventListener("scroll" , () => {
        header.classList.toggle("shadow", window.scrollY > 40);
});


// адаптивное меню
const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".menu_lin").forEach(n => n.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
}))

