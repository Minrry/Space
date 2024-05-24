// ------------параллакс
      const parallax = document.querySelector('.parallax');
      if(parallax) {
          const sky = document.querySelector('.parallax_img_sky');
          const planet1 = document.querySelector('.parallax_img_planet1');
          const planet2 = document.querySelector('.parallax_img_planet2');
  
          // коэффициенты
          const forSky = 50;
          const fonPlanet1 = 10;
          const fonPlanet2 = 1;
  
          // скорость анимации
          const speed = 0.5;
  
          // обьявление переменных
          let positionX = 0, positionY = 0;
          let coordXprocent = 0, coordYprocent = 0;
  
          // анимация при движении мыши
          function setMouseParallaxStyle(){
              const distX = coordXprocent - positionX;
              const distY = coordYprocent - positionY;
  
              positionX = positionX + (distX * speed);
              positionY = positionY + (distY * speed);
  
              sky.style.cssText = `transform: translate(${positionX / forSky}%,${positionY / forSky}%);`;
              planet1.style.cssText = `transform: translate(${positionX / fonPlanet1}%,${positionY / fonPlanet1}%);`;
              planet2.style.cssText = `transform: translate(${positionX / fonPlanet2}%,${positionY / fonPlanet2}%);`;
              requestAnimationFrame(setMouseParallaxStyle);
          }
          setMouseParallaxStyle();
  
          parallax.addEventListener("mousemove", function (e){
              // ширина и высота блока
              const parallaxWidth = parallax.offsetWidth;
              const parallaxHeight = parallax.offsetHeight;
              // ноль по середине
              const coordX = e.pageX - parallaxWidth / 2;
              const coordY = e.pageY - parallaxHeight / 3; 
  
              // процент
              coordXprocent = coordX / parallaxWidth * 100;
              coordYprocent = coordY / parallaxHeight * 100;
          });
      }



//------------слайдер

// Функция для проверки, видим ли элемент на экране
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функция для ленивой загрузки изображений
function lazyLoadImages() {
  document.querySelectorAll('.slide_container img[data-src]').forEach(function(img) {
      if (isElementInViewport(img)) {
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
      }
  });
}

// Добавляем обработчик события для проверки видимости при прокрутке и загрузки страницы
document.addEventListener('DOMContentLoaded', lazyLoadImages);
document.addEventListener('scroll', lazyLoadImages);



