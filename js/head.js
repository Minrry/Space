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

document.querySelectorAll('.tooltip').forEach(item => {
    item.addEventListener('click', event => {
        const tooltip = item.querySelector('.tooltiptext');
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        } else {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        }
    });
});

