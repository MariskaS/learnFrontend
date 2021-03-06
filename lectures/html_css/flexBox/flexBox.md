# FlexBox
**FlexBox** это позиционирование элементов с помощью css3 (относится к современным способам верстки).

Другими словами - FlexBox это все о выравнивании элементов по горизонтали *(она же главная ось)* и вертикали *(она же поперечная ось)*. Когда мы говорим о Flex - это значет что мы говорим о родителе и о дочерних элементах которые мы выравниваем относительно родителя.

Раньше позиционирование делали с помощью `float:left;` `float:right;` и т.д.   
Теперь мы можем отказаться от **float** так как все то же самое и намного проще мы можем сделать используя **FlexBox**.  

Раньше что бы разместить блоки в одну линию используя **float** приходилось писать такой код:  
```
<ul class="menu">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

.menu li {
    float: left;
}
.menu li:after,
.menu li:before {
    display: table;
    content: " ";
}
.menu li:after {
    clear: both;
}
```
P.S. - при использовании **float** нам приходилось бороться с пропаданием высоты родительского элемента с помощь хаков как в примере выше или [тут](https://www.w3schools.com/howto/howto_css_clearfix.asp)  
**Визуализация баги "пропадание высоты родительского элемента":**
![floatClearFix.png](floatClearFix.png)  

**Пример на FlexBox:**
```
<ul class="menu">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

.menu {
    display: flex;
}
```
С появлением FlexBox разработка стала функциональнее.   
Помимо того что сократилось количество кода, с FlexBox появилась возможность гораздо проще управлять поведением.  
[Вот пример](https://codepen.io/MariskaS/pen/eYOvKbd) распространенного кейса - список карточек одинаковой высоты (все карточки подстраиваются под элемент с наибольшей высотой в строке), текст кнопки выравниается по центру и сама кнопка всегда прибивается к нижнему краю родителя (в примере используется Less).

## FlexBox - справочная информация по свойствам.
**FlexBox - родитель:**
- [flex-direction](#flex-direction)
- [justify-content](#justify-content)
- [align-items](#align-items)
- [flex-wrap](#flex-wrap)
- [flex-flow](#flex-flow)

**FlexBox - элементы:**
- [align-self](#align-self)
- [order](#order)
- [flex-basis](#flex-basis)
- [flex-grow](#flex-grow)
- [flex-shrink](#flex-shrink)
- [flex](#flex)

## FlexBox - родитель.
### flex-direction 
Свойство `flex-direction` устанавливает направление главной и поперечной оси или, говоря другими словами, расставляет элементы в ряд или в колонку.  
**Применяется к родительскому элементу** для flex блоков.

**Возможные значения:**   
`flex-direction: row | row-reverse | column | column-reverse;`

**Значение по умолчанию: row.**

### justify-content
Свойство `justify-content` задает выравнивание элементов вдоль главной оси.  
**Применяется к родительскому элементу** для flex блоков.  

**Возможные значения:**   
`justify-content: flex-start | flex-end | center | space-between | space-around;`  

**Значение по умолчанию: flex-start.**  

### align-items
Свойство `align-items` задает выравнивание элементов вдоль поперечной оси.  
**Применяется к родительскому элементу** для flex блоков.  

**Возможные значения:**   
`align-items: flex-start | flex-end | center | baseline | stretch;`  

**Значение по умолчанию: stretch.**  

### flex-wrap
Свойство `flex-wrap` задает многострочную расстановку блоков по главной оси.
**Применяется к родительскому элементу** для flex блоков.  

**Возможные значения:**   
`flex-wrap:  nowrap | wrap | wrap-reverse;`  

**Значение по умолчанию: nowrap.**  

### flex-flow
Свойство `flex-flow` это сокращение для flex-direction и flex-wrap.
**Применяется к родительскому элементу** для flex блоков.  

**Возможные значения:**   
`flex-flow: row wrap | column wrap`  

**Значение по умолчанию: nowrap.**  

## FlexBox - элементы.
### align-self 
CSS свойство ``align-self`` указывает, каким образом будет выравниваться flex-элемент по вертикали,
внутри flex-контейнера.  
Оно работает аналогично свойству ``align-items``, отличие заключается в том, что ``align-items`` применяется ко всем элементам и задаётся для flex-контейнера.
А ``align-self`` применяет к конкретному элементу. 

**Возможные значения:**   
`align-self: auto | flex-start | flex-end | center | baseline | stretch;`

**Значение по умолчанию: auto.** 


### order 
Это свойство устанавливает порядок следования флекс элемента в контейнере относительно остальных. 
Тоесть при выводе блоков в разметке в одной последовательности, стилями мы можем задать любую другую.  
Часто встречается кейс - когда нужно на desktop показать блок с настройками формы справа от самой формы,
а на мобилке и планшете нам нужно чтобы этот блок находился над формой.  
Если бы мы использовали `float` тогда блок с настройками мы могли бы сместить только вниз,
 но используя flexBox и свойство `order` мы можем перемещать элементы так как нам взумается.  

**Возможные значения:**   
`Целое число`

**Значение по умолчанию: 0**  
По умолчанию все блоки будут следовать друг за другом в порядке, заданном в html.
 
**Пример использования свойства order [codepen](https://codepen.io/MariskaS/pen/bGbggyo):**

### flex-basis
Свойство `flex-basis` задает размер конкретного flex-блока до применения к нему остальных flex свойств.
**Применяется к: конкретному flex блоку.** 

**Возможные значения:**   
`flex-basis: любые CSS единицы (и проценты) | auto;`  

**Значение по умолчанию: auto.**  

### flex-grow
Свойство `flex-grow` определяет то, на сколько отдельный flex-блок может быть больше соседних элементов, если это необходимо.  
Например, если все flex-блоки внутри flex-контейнера имеют flex-grow:1, то они будут одинакового размера. Если один из них имеет flex-grow:2, то он будет в 2 раза больше, чем все остальные.
**Применяется к: конкретному flex блоку.** 

**Возможные значения:**   
`flex-grow: положительное число;`  

**Значение по умолчанию: 0.**  

### flex-shrink
Свойство `flex-shrink` определяет то, насколько flex-блок будет уменьшаться относительно соседних элементов внутри flex-контейнера в случае недостатка свободного места.  
Например, если все flex-блоки внутри flex-контейнера имеют flex-shrink:1, то они будут одинакового размера. Если один из них имеет flex-shrink:2, то он будет в 2 раза больше, чем все остальные.
**Применяется к: конкретному flex блоку.** 

**Возможные значения:**   
`flex-shrink: положительное число;`  

**Значение по умолчанию: 1.**  

### flex
Свойство `flex` сокращение для flex-basis, flex-shrink и flex-grow.  
Порядок значения не имеет. Второй и третий параметры (flex-shrink, flex-basis) не обязательны.
**Применяется к: конкретному flex блоку.** 

**Значение по умолчанию: 0 1 auto.**  

## Что еще стоит знать про flexBox
Про короткую запись `flex: 1;`.  
На самом деле это может случиться не только с flexBox, но и с другими короткими записями: в Chrome Canary может возникнуть ситауция когда `flex: 1;` отрабатывает не корректно. Напрмер вы ожидали что ваш блок растянется на всю высоту экрана (при условии что у родителя стоит `display: flex` и он то же растянут на всю высоту экрана), но этого не случилось - попробуйте написать `flex-grow: 1;` должно помочь)  
Да и в целом под экзотические браузеры не стоит использовать короткие записи, т.к потом очень сложно искать где ошибка.


## Домашнее задание (делать в указанном порядке)
1. почитать [css-tricks.com/snippets/css/a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Полное руководство по FlexBox.
1. Поиграть в [flexboxfroggy.com](https://flexboxfroggy.com/#ru)
1. Открыть [codepen](https://codepen.io/MariskaS/pen/bGbggyo)   
Написать этот же код на css + выровнять блоки(синий и красный) по центру страницы(по вертикали и горизонтали
1. Написать когд где - 3 блока(последовательность в разметке -> **красный | зеленый | синий**) 
    - на мобилках и планшетах(все что меньше 780px) - блоки встают друг под другом и принимают порядок противоположный предыдущему пункту (т.е. **синий | зеленый | красный**). 
    - группа блоков должна центроваться по вертикали и горизонтали
    - пронумеровать блоки(добавить текст внутрь элемента) и выровнять текст для мобилок и планшетов(все что меньше 780px) по вертикали по центру и по горизонтали прибить к правому краю, а для всех остольных разрешений пусть будет по всем осям по центру.

**Enjoy! :)**

## Полезные ссылки
- [CSS Gap creates a bright future for margins in Flex as well as Grid](https://bryanlrobinson.com/blog/gap-provides-bright-future-for-margins-in-flex-as-well-as-grid/?fbclid=IwAR0Fxrjl7-epkEKe-aSYFj0tl5ZZJLxme3wb5tpsQUxCy_eQ5E1LlHrodsg)
- [Вёрстка реальных проектов на гридах](https://css-live.ru/articles/vyorstka-realnyx-proektov-na-gridax-css-grid-layout-uzhe-sejchas.html)
- [Flexbox playground](https://codepen.io/MariskaS/pen/vYBxzGN) - тут можно поиграться с FlexBox.
- [Better, Simpler Grid Systems](https://philipwalton.github.io/solved-by-flexbox/demos/grids/) - сетка на FlexBox.
- [flexboxfroggy.com](https://flexboxfroggy.com) - игрушка для быстрого изучения FlexBox.
- [css-tricks.com/snippets/css/a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Этот сайт стоит запомнить, т.к он содержит много полезной информации.
- [css-tricks.com/all-about-floats](https://css-tricks.com/all-about-floats/) - все про float. Так же пользуясь отладчиком можно посмотреть как использовались float в ранних версиях [bootstrap.com](https://getbootstrap.com/docs/3.3/css/#grid) (на примере grid system).

