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
   loadImage("img/planet2s.png").then(url => {
     imggg.src = url.src
   });
  
