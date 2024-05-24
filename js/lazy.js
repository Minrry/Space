// window.addEventListener('click', function(event) {
//     if (event.target.classList.value === "btn") {
//       window.addEventListener('click', function(event) {
//         if (event.target.classList.value === "btn") {
//           event.target.closest('.btn_box').querySelectorAll('.btn').forEach((element) => {
//             element.style.transform = "scale(1)";
//             element.style.backgroundColor = "#fff";
//           })
//           if (event.target.id === 'b1') {
//             event.target.closest('.btn_box').style.transform = "translate(-0%,-50%)";
//             event.target.style.transform = "scale(1.5)";
//             event.target.style.backgroundColor = "#ceb47b";
//             event.target.closest('.slider').querySelector('.slides').style.left = 0 + '%'
//           }
//           if (event.target.id === 'b2') {
//             event.target.closest('.btn_box').style.transform = "translate(-50%,-50%)";
//             event.target.style.transform = "scale(1.5)";
//             event.target.style.backgroundColor = "#ceb47b";
//             event.target.closest('.slider').querySelector('.slides').style.left = -100 + '%'
//           }
//           if (event.target.id === 'b3') {
//             event.target.closest('.btn_box').style.transform = "translate(-100%,-50%)";
//             event.target.style.transform = "scale(1.5)";
//             event.target.style.backgroundColor = "#ceb47b";
//             event.target.closest('.slider').querySelector('.slides').style.left = -200 + '%'
//           }
//         }
//       })
      
//         // Запуск ленивой загрузки изображений после обновления контента
//         lazyLoadImages();
//     }
//   });
  
  
  
  const loadImage = (url) => {
      return new Promise((resolve) => {
         fetch(url)
            .then((resp) => resp.blob())
            .then((blob) => {
               const img1 = document.createElement("img");
               img1.src = URL.createObjectURL(blob);
               img1.onload = () => {
                  resolve(img1);
               };
            });
      });
   };
   
  const img = document.getElementById('lazy');
   loadImage("img/fon1.png").then(url => {
     img.src = url.src
   });
  
   const imgg = document.getElementById('lazyy');
   loadImage("img/planet1.png").then(url => {
     imgg.src = url.src
   });
   const imggg = document.getElementById('lazyyy');
   loadImage("img/planet2.png").then(url => {
     imggg.src = url.src
   });
  