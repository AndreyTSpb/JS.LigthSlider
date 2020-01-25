/**
 * Простенький слайдер 
 * подтягивает картинки из папки img/slider_imgs
 * @param {*} params - object 
 */

function slider(params){
    /**
     * ТО что ожидаем в параметраж
     */


    createSlider();

    let slider = document.getElementById(params.idSlider),
        indexShow = params.indexShow;
    if(slider != null){
        let imgs = slider.querySelectorAll('.carousel-img'),
            prev = slider.querySelector('.carousel-button-prev'),
            next = slider.querySelector('.carousel-button-next'),
            dots = slider.querySelectorAll('.dot'),
            dotsWrap = slider.querySelector('.carousel-dots ol');

        /**
         * Перевичный вызов функции показа слайда 
         */
        showSlid(indexShow);

        /**
         * Прокрутка слайдера с задержкой sec *1000
         */
        setInterval(()=>{
            showSlid(++indexShow);
        }, params.sec *1000); // устанавливаем интервал перелистывания в милисекундах

        /**
         * скрываем все картинки, а потом показывем только указанную
         */
        function showSlid(index){
            /**
             * Проверка на первый и последний слайдер
             */
            if(indexShow > imgs.length){
                indexShow = 1;
                index = indexShow;
            }
            if(indexShow < 1){
                indexShow = imgs.length;
                index = indexShow;
            }
            /* Скрываем картинки и удаляем класс актив у индикаторов*/
            imgs.forEach((img)=>img.style.display = "none");
            dots.forEach((dot)=>dot.classList.remove("active"));

            /* Показываем указанную картинку */
            imgs[index-1].style.display = "block";
            dots[index-1].classList.add("active");
        }

        /**
         * перелистывание , увеличиваем индекс на единицу
         */
        function moveSlide(n){
            showSlid(indexShow += n);
        }
        
        /**
         * отображение указанного слайда
         */
        function currentSlider(n){
            showSlid(indexShow = n);
        }
        
        /*кнопка назад , индекс -1*/
        prev.addEventListener('click', ()=>{
            moveSlide(-1);
        });

        /* кнопка вперед, индекс + 1 */
        next.addEventListener('click', ()=>{
            moveSlide(1);
        });

        /* Нажатие на точки */
        dotsWrap.addEventListener('click', (event)=>{
            for(let i=0; i<dots.length + 1; i++){
                console.log(event);
                if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                    currentSlider(i);
                }
            }
        });
    }

    /**
     * Создаем тело слайдера
     */
    function createSlider(){
        /*SLIDER*/
        let divWrap = document.createElement('div'),
            divImgs = document.createElement('div'),
            divBtnPrev = document.createElement('div'),
            divBtnNext = document.createElement('div'),
            divDots    = document.createElement('div'),
            ol = document.createElement('ol');

        document.getElementById(params.idSlider).appendChild(divWrap);
        
        divWrap.classList.add(params.classDivWraper);
        /* Div - imeges */
        divImgs.classList.add(params.classDivImgs);
        divWrap.appendChild(divImgs);
        
        /* BTN PREV*/
        divBtnPrev.classList.add(params.classBtnPrev);
        divBtnPrev.innerHTML = "<span>&laquo;</span>";
        divWrap.appendChild(divBtnPrev);

        /* BTN NEXT */
        divBtnNext.classList.add(params.classBtnNext);
        divBtnNext.innerHTML = "<span>&raquo;</span>";
        divWrap.appendChild(divBtnNext);

        /* DIV DOTS */
        divDots.classList.add(params.classDivDots);
        divDots.appendChild(ol);
        divWrap.appendChild(divDots);

        /**
         * Заполнения картинками и точками навигации
         */
        params.imgs_name.forEach((img_name)=>{
            let divImg  = document.createElement('div'),
                img = document.createElement('img'),
                li  = document.createElement('li');
            /**
             * Картинки
             */
            divImg.classList.add(params.classDivImg);
            img.src = params.img_folder+"/"+img_name;
            img.classList.add("d-block", "w-100");
            divImg.appendChild(img);
            divImgs.appendChild(divImg);
            /**
             * Точки навигации
             */
            li.classList.add("dot");
            li.innerHTML = " &#8212; ";
            ol.appendChild(li);
        });        
    }
}