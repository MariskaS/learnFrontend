# FlexBox
FlexBox - это позиционирование элементов с помощью css3.
Раньше позиционирование делали с помощью `float:left;` `float:right;` и т.д.

С появлением FlexBox разработка стала намного проще и функциональнее.  

**FlexBox - родитель:**
- [flex-direction](#flex-direction)
- [justify-content](#justify-content)
- [align-items](#align-items)
- [flex-wrap](#flex-wrap)
- [flex-flow](#flex-flow)

**FlexBox - элементы:**
- [align-self](#align-self)
- [flex-basis](#flex-basis)
- [flex-grow](#flex-grow)
- [flex-shrink](#flex-shrink)
- [flex](#flex)
- [order](#order)

## FlexBox - родитель.
### flex-direction 
Свойство `flex-direction` устанавливает направление главной и поперечной оси или, говоря другими словами, расставляет элементы в ряд или в колонку.  
**Применяется к родительскому элементу** для flex блоков.

**Возможные значения:**   
`flex-direction: row | row-reverse | column | column-reverse;`

**Значение по умолчанию: row.**

- **row** - Главная ось направлена ***слева направо***. Элементы расположены в ряд, по умолчанию прижаты к левому краю (это регулируется свойством justify-content), их нумерация имеет обычный порядок - слева направо.

***Пример использования свойства row [codepen](https://codepen.io/MariskaS/pen/xxKgdEr):***
```
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

.container {
	display: flex;
	// flex-direction: row; - браузер задает по дефолту, указывать не нужно
}

.container div {
	border: 1px solid black;
	width: 100px;
	height: 50px;
	margin: 10px;
}
```

- **row-reverse** - Главная ось направлена ***справа налево***. Элементы расположены в ряд, по умолчанию прижаты к правому краю (см. justify-content), их нумерация имеет обратный порядок - справа налево.

***Пример использования свойства row-reverse:***
```
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

.container {
	display: flex;
	flex-direction: row-reverse;
}

.container div {
	border: 1px solid black;
	width: 100px;
	height: 50px;
	margin: 10px;
}
```

- **column** - Главная ось направлена ***сверху вниз***. Элементы расположены в колонку, по умолчанию прижаты к верху (см. justify-content), их нумерация имеет обычный порядок - сверху вниз.

***Пример использования свойства column:***
```
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

.container {
	flex-direction: column;
	display: flex;
}

.container div {
	border: 1px solid black;
	width: 100px;
	height: 50px;
	margin: 10px;
}
```

- **column-reverse** - Главная ось направлена ***снизу вверх***. Элементы расположены в колонку, по умолчанию прижаты к низу (см. justify-content), их нумерация имеет обратный порядок - снизу вверх.

***Пример использования свойства column-reverse:***
```
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

.container {
	flex-direction: column-reverse;
	display: flex;
}

.container div {
	border: 1px solid black;
	width: 100px;
	height: 50px;
	margin: 10px;
}
```

### justify-content
// TODO: ...

### align-items
// TODO: ...

### flex-wrap
// TODO: ...

### flex-flow
// TODO: ...

## FlexBox - элементы.
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
 
***Пример использования свойства order [codepen](https://codepen.io/MariskaS/pen/bGbggyo):***
```
// TODO: согласовать пример из codepen, если все ок, можно вставить сюда.
```

### flex-basis
// TODO: ...

### flex-grow
// TODO: ...

### flex-shrink
// TODO: ...

### flex
// TODO: ...


## Домашнее задание (делать в указанном порядке)
- почитать [css-tricks.com/snippets/css/a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Полное руководство по FlexBox. Этот сайт стоит запомнить, т.к он содержит много полезной информации.
- Поиграть в [flexboxfroggy.com](https://flexboxfroggy.com/#ru)
- Открыть [codepen](https://codepen.io/MariskaS/pen/bGbggyo)   
Написать этот же код на css + выровнять блоки(синий и красный) по центру страницы(по вертикали и горизонтали
- Написать когд где - 3 блока(последовательность в разметке -> **красный|зеленый|синий**) 
    - на мобилках и планшетах(все что меньше 780px) - блоки встают друг под другом и принимают порядок противоположный предыдущему пункту (т.е. **синий|зеленый|красный**). 
    - группа блоков должна центроваться по вертикали и горизонтали
    - пронумеровать блоки(добавить текст внутрь элемента) и выровнять текст для мобилок и планшетов(все что меньше 780px) по вертикали по центру и по горизонтали прибить к правому краю, а для всех остольных разрешений пусть будет по всем осям по центру.

**Enjoy! :)**

## Полезные ссылки
- [google.com](https://www.google.com/)




