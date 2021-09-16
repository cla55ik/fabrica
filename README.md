# Лендинг для FABRICA design servicе
Одностраничный сайт с адаптивным дизайном; формами регистрации, авторизации, обратной связи; слайдерами изображений и карточек, интерактивными вкладками

### Основные технологии:
`HTML`
`CSS`
`JavaScript`

### Использованные фреймворки и библиотеки:
Верстка на `Bootstrap` с применением `jQuery`

Слайдеры на `Owl Carousel`

Маски для форм на `MaskedInput`
____
### Интересные моменты
#### Кастомные кнопки управления слайдером Owl

1.Добавляем стандартную верстку слайдера Owl. Указываем кастомный id - он понадобится нам дальше в JS. В нашем случае `id = project_slider`
``` html
<div class="carousel__wrapper owl-carousel owl-theme" id="project_slider">
    <div class="item project-item">
        <img src="assets/img/proj1.jpg" alt="">
    </div>
    <div class="item project-item">
        <img src="assets/img/proj2.jpg" alt="">
    </div>
    <div class="item project-item">
        <img src="assets/img/proj3.jpg" alt="">
    </div>
    <div class="item project-item">
        <img src="assets/img/proj1.jpg" alt="">
    </div>
    <div class="item project-item">
        <img src="assets/img/proj2.jpg" alt="">
    </div>
    <div class="item project-item">
        <img src="assets/img/proj3.jpg" alt="">
    </div>
</div>
```

2. Добавляем свои кнопки, указывем уникальный селектор css-class или id

```html
<div class="">
    <button class="proj_prev_btn"> // по этому селектору будем отслеживать нажатие кнопки
        Назад
    </button>
</div>

<div class="">
    <button class="proj_next_btn"> // по этому селектору будем отслеживать нажатие кнопки
        Вперед
    </button>
</div>
```

3. Добавляем jQuery код для управления нашим слайдером

Отключаем стандартные кнопки навигации - `nav: false,` `dots: false,`

```javascript
$('#project_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
```

4. Добавляем код для делегирования управления на наши кастомные кнопки

`project_slider` - id нужного owl-слайдера, `.proj_next_btn` и `proj_prev_btn` - классы кнопок

```javascript
    var owl_proj = $("#project_slider"); 
    owl_proj.owlCarousel();
    $(".proj_next_btn").click(function() {
        owl_proj.trigger("next.owl.carousel"); // При нажатии на нашу кнопку произойдет действие "next.owl.carousel" для слайдера "#project_slider"
    });
    $(".proj_prev_btn").click(function() {
        owl_proj.trigger("prev.owl.carousel");
    });
```
