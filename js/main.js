/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Mobile filter
const sidebarToggleButton = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')

//клик по кнопке для скрытия/показа фильтра и изменения иконки
sidebarToggleButton.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active')
}


// Show 3 more cards
const btnShowMoreCards = document.querySelector('.btn-more')
const hiddenCards = document.querySelectorAll('.card-link--hidden')

//клик по кнопке и показ трех скрытых карточек
btnShowMoreCards.onclick = function(){
    hiddenCards.forEach(function (card){
        card.classList.remove('card-link--hidden')
    })
}


// Show/Hide widgets
const widgets = document.querySelectorAll('.widget')

//находим все виджеты на странице, слушаем клик по виджету, если клик по заголовку - показываем/скрываем тело виджета
widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e){
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active')
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})


//Location - btn any
const checkBoxAny = document.querySelector('#location-05')
const checkBox01 = document.querySelector('#location-01')
const checkBox02 = document.querySelector('#location-02')
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]')

//выбор кнопки "любая" и отключение других чекбоксов
checkBoxAny.addEventListener('change', function () {

    if(checkBoxAny.checked){
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        })
    } else {
        checkBox01.checked = true;
        checkBox02.checked = true;
    }

})

//клик по другим чекбоксам = отключение кнопки "любая"
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})


//Показать еще три доп опции с чекбоксами в фильтре
const showMoreOptions = document.querySelector('.widget__btn-show-hidden')
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden')

showMoreOptions.onclick = function (e) {
    //отключаю перезагрузку страницы по нажатию
    e.preventDefault()

    //если блоки были скрыты - значит показываем
    if(showMoreOptions.dataset.options == 'hidden'){
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'block';
        })
        showMoreOptions.innerText = 'Скрыть доп. опции'
        showMoreOptions.dataset.options = 'visible'

    }
    //если блоки были видны - скрываем
    else if (showMoreOptions.dataset.options == 'visible'){
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'none';
        })
        showMoreOptions.innerText = 'Показать ещё'
        showMoreOptions.dataset.options = 'hidden'
    }





}
