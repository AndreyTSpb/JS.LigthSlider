# JS.LigthSlider
JS.LigthSlider. Простой слайдер на чистом JS

Простой слайдер создает блок слайдера на странице средствами ЯваСкрипт.
Для этого в конце HTML страницы надо прописать подключение скрипта, и вызов слайдера с параметрами стилей и перечислением картинок
```html
    <script src="js/slider.js"></script>
    <script>
        /**
         * Параметры для слайдера
         * идентификатор, стили , ссылка на паку с картнками и перечень картинок
         */
        let params = {
                idSlider:"slider", // идентификатор слайдера на странице
                sec:5, //Интервал для перелистывания слайдера
                indexShow:1, //Стартовая картинка
                /*PARAMS CSS*/
                classDivWraper:"slider",
                classDivImgs:"carousel-inner",
                classDivImg:"carousel-img",
                classBtnPrev:"carousel-button-prev",
                classBtnNext:"carousel-button-next",
                classDivDots:"carousel-dots",
                
                /* IMGS */
                img_folder:"img/slider_imgs", // folders with images files
                imgs_name:['1.jpg','2.jpg', '3.jpg'] // array with name files
        }; 
        slider(params);
    </script>
```
В том месте где нужна прокрутка слайдера создать блок с идентификатором слайдера 
```html
  <div id="slider">
            <!--THIS SLIDER-->
          </div>
```
Можно размещать несколько на одной странице, требуется указать разные идентификаторы блоков для вставки слайдера. 
Через параметры можно указывать разный набор свойств и картинок для слайлера.
