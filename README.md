# Проектная работа. МБОУ АЛГОСОШ им. Фибоначчи

Это web-приложение, которое визуализирует работу популярных алгоритмов и структур данных.
- Проект реализован на [React](https://ru.react.js.org/docs/getting-started.html) с использованием [TypeScript](https://www.typescriptlang.org/)
- Дизайн проекта [дизайн проекта](https://www.figma.com/file/RIkypcTQN5d37g7RRTFid0/Algososh_external_link?node-id=0%3A1).

# Функционал
## Строка
### Визуализация разворота строки.
  * Введите текст в инпут и нажмите развернуть.

## Последовательность Фибоначчи
### Визуализация генерирования  чисел последовательности Фибоначчи. 
  * Например, вы ввели 4, тогда на экране должен появиться ряд 1, 1, 2, 3, 5. 
  * В инпут можно вводить только положительные целые числа, граница ввода 1 ≤ `n`≤ 19.


## Сортировка массива
### Визуализация алгоритмов сортировки выбором и пузырьком.
  * Радиокнопки - выбор метода сортировки. По умолчанию стоит значение «Выбор».
  * Кнопка «По убыванию», по клику на неё элементы массива отсортируются по убыванию, алгоритм сортировки выбирается радиокнопкой.
  * Кнопка «По возрастанию», по клику на неё элементы массива должны отсортироваться по возрастанию, алгоритм сортировки выбором или пузырьком.
  * Кнопка «Новый массив», по клику на неё генерируется случайный массив чисел.
  * Минимальное количество элементов массива 3, максимальное  17.


## Стек
### Визуализация удаления и добавления элементов в структуру данных стек
  * Инпут для ввода значений, которые будут добавляться в стек.
  * Кнопкa «Добавить», по клику на неё происходит добавление в стек.
  * Кнопкa «Удалить», по клику на неё происходит удаление из стека.
  * Кнопка «Очистить», по клику на неё происходит удаление всех элементов из стека.
  * Если нажать «Удалить», из стека извлекаеться верхний элемент. Удаляемый элемент выделяется цветом, надпись `top` перемещается на его левого соседа. 
  * Если в стеке всего один элемент, то после нажатия «Удалить» на странице не отображаются никакие элементы стека. 
  * По клику на кнопку «Очистить» из стека удаляются все элементы сразу.
  * Установлено ограничение на ввод одного значения до четырёх символов.


## Очередь
### Визуализация удаления и добавления элементов в структуру данных «очередь».
  * Инпут для ввода значений, которые будут добавляться в очередь, количество элементов очереди 7;
  * Кнопкa «Добавить», по клику на неё происходит добавление элемента в очередь;
  * Кнопкa «Удалить», по клику на неё происходит удаление элемента в из очереди;
  * Кнопкa «Очистить», чтобы по клику на неё сразу удалить все элементы из очереди;
  * Отображаются пустые элементы очереди;
  * Кнопка «Очистить», по клику на неё сразу удаляются все элементы из очереди.
  * При добавлении элементов в очередь позиция tail смещаться, на долю секунды новый элемент выделяется цветом,
если нажать кнопку «Удалить», из очереди извлекается элемент под индексом 0, на долю секунды элемент выделяется цветом, 
a `head` будет перемещён на элемент с индексом 1. Ограничен ввод одного значения до четырёх символов.
* Установлено ограничение на ввод одного значения до четырёх символов.
  
## Связный список
### Визуализация добавления и удаления элементов в связный список. 
  - Для добавления элемента:
     * Инпут с плейсхолдером «Введите значение» для ввода значения, которое будете добавлено в список;
     * Кнопка «Добавить в head», по клику на которую значение из инпута станет новой головой списка;
     * Кнопка «Добавить в tail», по клику на которую значение из инпута статнет новым хвостом списка.

  - Для удаления элемента:
     * Кнопка «Удалить из head», по клику на которую удаляется первый элемент из списка;
     * Кнопка «Удалить из tail», по клику на которую удаляется последний элемент из списка.

  - Для удаления или добавления по индексу:
     * Кнопка «Добавить по индексу», по клику на которую значение(элемент) из инпута займёт в списке место по индексу;
     * Кнопка «Удалить по индексу», по клику на которую удаляется элемент из списка по индексу.
     * Кроме элементов управления, на странице в начальном состоянии генерируется небольшой связный цифровой список из четырех элементов, например `0 → 34 → 8 → 1`.
* Установлено ограничение на ввод одного значения до четырёх символов.

