// Функция для добавления/удаления класса shadow в зависимости от ширины экрана
function updateHeaderShadow() {
    const header = document.querySelector("header");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
        header.classList.add("shadow");
    } else {
        header.classList.toggle("shadow", window.scrollY > 40);
    }
}

// Вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    updateHeaderShadow();

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
});

// Вызов функции при изменении размера экрана
window.addEventListener("resize", updateHeaderShadow);

// Обновление класса shadow при прокрутке
window.addEventListener("scroll", () => {
    if (window.innerWidth > 425) {
        const header = document.querySelector("header");
        header.classList.toggle("shadow", window.scrollY > 40);
    }
});


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




