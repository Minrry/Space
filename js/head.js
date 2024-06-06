// script.js

// Добавление тени к заголовку при прокрутке
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 40);
});

// Адаптивное меню
const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu_lin").forEach(n => n.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
}));

// Подсказки
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tooltip').forEach(tooltip => {
        tooltip.addEventListener('touchstart', function (event) {
            event.stopPropagation();
            // Скрываем все остальные подсказки
            document.querySelectorAll('.tooltip.active').forEach(activeTooltip => {
                if (activeTooltip !== tooltip) {
                    activeTooltip.classList.remove('active');
                }
            });
            // Переключаем видимость текущей подсказки
            tooltip.classList.toggle('active');
        });
    });

    // Скрываем подсказку при касании вне нее
    document.addEventListener('touchstart', () => {
        document.querySelectorAll('.tooltip.active').forEach(tooltip => {
            tooltip.classList.remove('active');
        });
    });
});




