---
title: Объекты
slug: objects
---

> [!TIP]
> 
> Объекты в JavaScript это структура данных, используемая для хранения пар "ключ-значение", где:
> - Ключи свойств должны быть строками или символами (обычно строками).
> - Значения могут быть любого типа.

## Создание объекта

Объект создаётся через литерал объекта `{}`.

```js
let user = { 
  name: "Иван", 
  age: 30 
}; 
console.log(user.name); // "Иван"
```

> [!TIP]
> 
> **Что можно хранить в свойствах**
> 
> - Примитивные значения (`string`, `number`, `boolean`, `null`, `undefined`).
> - Другие объекты (вложенность).
> - Функции (методы объекта).

## Доступ к свойствам объекта

1. Точечная нотация `.`
	Используется, когда имя свойства известно.
```js
let user = { name: "Иван" };
console.log(user.name); // "Иван"
```
2. Квадратные скобки `[ ]`
	Используются, если имя свойства хранится в переменной, содержит специальные символы или просто неизвестно заранее.
```js
let key = "age";
let user = { [key]: 30 };
console.log(user["age"]); // 30
```
3. Вычисляемые свойства
	Имя свойства может быть сформировано динамически с помощью `[ ]`.
```js
let fruit = "apple";
let obj = { [fruit + "Count"]: 5 }; 
console.log(obj.appleCount); // 5
```

## Операции с объектом

- Удаление свойства
	Оператор `delete` позволяет удалить свойство из объекта.
```js
let user = { name: "Иван", age: 30 };
delete user.age;
console.log(user.age); // undefined
```
- Проверка существования свойства
	Оператор `'key' in obj` возвращает `true`, если в объекте свойство `'key'`, в т.ч. даже если оно имеет значение `undefined`.
```js
let user = { name: "Иван" };
console.log("name" in user); // true
console.log("age" in user); // false
```
- Перебор свойств объекта
	Цикл `for..in` позволяет пройтись по всем свойствам объекта.
```js
let user = { name: "Иван", age: 30 };

for (let key in user) {
  console.log(key, user[key]);
}
// "name Иван"
// "age 30"
```

## Свойство из переменной

Можно сокращать запись объекта, если имя свойства совпадает с именем переменной.

```js
let name = "Иван";
let age = 30;

let user = { name, age }; // { name: "Иван", age: 30 }
```

> [!TIP]
> 
> **Как это работает**
> 
> Обычно свойство объекта записывается как `ключ: значение`:
> ```js
> let user = { name: name, age: age }; // { name: "Иван", age: 30 }
> ```
> Но если имя переменной совпадает с именем свойства, можно записать короче:
> ```js
> let user = { name, age }; // { name: "Иван", age: 30 }

## Имена свойств объекта

В JavaScript имена свойств объекта могут быть:
- `string` (включая пустые и строки с пробелами).
- `number`, `true`, `false`, `null`, `undefined` и др. - они автоматически преобразуются в `string`.

```js
let obj = { 0: "ноль", true: "истина", null: "значение null" };

console.log(obj["0"]);    // "ноль"
console.log(obj["true"]); // "истина"
console.log(obj["null"]); // "значение null"
// 0, true и null стали строками "0", "true" и "null".
```

> [!NOTE]
> 
> Только символы (`Symbol`) не преобразуются в строку (`string`).
> Это может быть полезно для уникальных идентификаторов.
> 
> ```js
> let id = Symbol("id");
> let user = { [id]: 123 };
> console.log(user[id]); // 123
> ```
> 
> Такие свойства не перебираются в `for..in` и не видны через `Object.keys()`.

## Копирование объектов

Одними из ключевых отличий объектов от примитивов (таких как `number` или `string`) являются способы хранения и копирования:
- **Примитивы** копируются как **значение** (новая копия данных).
- **Объекты** копируются **по ссылке**, а не создают новый объект.

> [!TIP]
> 
> **Как это работает**
> 
> Обе переменные user и admin ссылаются на один и тот же объект, поэтому изменения через одну переменную видны и через другую.
> ```js
> let user = { name: "Alex" };
> 
> let admin = user; // копируется ссылка на объект, а не сам объект
> 
> admin.name = "Gregory"; // изменяем свойство объекта через admin
> 
> // 'user' и 'admin' в этом случае указывают на один и тот же объект
> console.log(user.name); // "Gregory"
> ```

> [!TIP]
> 
> **Когда это полезно?**
> 
> - Используется для передачи объектов между функциями.
> - Позволяет изменять данные внутри переданного объекта без его явного возврата.

> [!NOTE]
> 
> **Как создать копию объекта**
> 
> Чтобы создать независимую копию объекта, можно использовать:
> 1. `Object.assign(dest, [src1, src2, src3...]) `
> 	- `dest` - целевой объект.
> 	- `[src1, src2, src3...]` - исходные объекты.
> 2. `structuredClone()`
> ```js
> let user = { name: "John" };
> let clone = Object.assign({}, user); // clone = { name: "John" }
> 
> let permissionView = { canView: true };
> let permissionEdit = { canEdit: true };
> 
> Object.assign(clone, permissionView, permissionEdit);
> console.log(clone); // { name: "John", canView: true, canEdit: true }
> 
>  // 'structuredClone()' cоздает полную копию, включая вложенные объекты
> let deepClone = structuredClone(user);
> ```

## Методы объекта

Объекты представляют **сущности**: пользователя, карточку продукта, заказ и пр.

Эти сущности могут не только **хранит данные**, но и **выполнять действия**. Например, пользователь может авторизоваться, добавить товар в корзину или оплатить заказ.

```js
let user = {
	name: "Jackie",
	sayHi() {
		console.log(`Hello, ${this.name}!`);
	}
};

user.sayBye = function() {
	console.log(`Bye, ${this.name}!`);
}

user.sayHi(); // "Hello, Jackie!"
user.sayBye(); // "Bye, Jackie!"
```

> [!TIP]
> 
> **Что такое `this`**
> 
> Внутри метода `this` ссылается на сам объект.
> 
> ```js
> let car = {
> 	brand: "Tesla",
> 	showBrand() {
> 		 console.log(this.brand);
> 	}
> };
> 
> car.showBrand(); // "Tesla"
> ```
> 
> `this` позволяет методам работать с данными объекта, даже если имя объекта неизвестно заранее.

> [!WARNING]
> 
> **Важный момент**
> 
> **Стрелочные функции** (`=>`) не имеют своего `this`.
> Они берут `this` из внешней области видимости в момент создания.
> ```js
> let user = {
> 	name: "Alice",
> 	sayHi() {
> 		console.log(this.name); // "Alice"
> 	},
> 	sayBye: () => {
> 		console.log(this.name); // undefined
> 	}
> };
> 
> user.sayHi();  // "Alice"
> user.sayBye(); // undefined, (стрелочная функция не видит 'user')
> ```

## Опциональная цепочка (`?.`)

**Опциональная цепочка** (`?.`) позволяет безопасно получать доступ к вложенным свойствам объекта, избегая ошибок, если какое-то из промежуточных свойств отсутствует.

Обычно при попытке доступа к отсутствующему свойству возникнет ошибка:

```js
let user = {};
console.log(user.address.street); // Ошибка: Cannot read properties of undefined
```

С `?.` код не выдаст ошибку, а просто вернёт `undefined`:

```js
console.log(user.address?.street); // undefined (без ошибки)
```

> [!NOTE]
> 
> `?.` останавливает вычисление, если встречает `null` или `undefined`.
> Если после `?.` есть какие-то вызовы функций или операции, они не произойдут.
> 
> ```js
> let user = null;
> let count = 0;
> 
> user?.sayHi(count++); // 'sayHi' не вызывается, 'count' не увеличивается
> 
> console.log(count); // 0
> ```

> [!NOTE]
> 
> `?.()` используется если метод объекта может и не существовать:
> ```js
> let user = {};
> user.sayHi?.(); // ничего не произойдёт, но и ошибки не будет
> ```
> 
> `?.[]` используется если ключ или индекс у массива могут отсутствовать:
> ```js
> let users = [{ name: "Анна" }];
> console.log(users[1]?.name); // undefined (нет ошибки)
> ```

> [!TIP]
> 
> **Когда использовать?**
> 
> Используйте `?.`, если объект или его свойство могут отсутствовать, например, при работе с API, пользовательскими данными или динамическими объектами.

## Встроенные объекты

### `Date`

Объект Date в JavaScript предоставляет возможность работать с датами и временем, включая создание, получение и изменение различных компонентов.

```js
const now = new Date();
console.log(now); // текущие дата и время
```

> [!NOTE]
> 
> **Указание конкретной даты**
> 
> Месяцы в JavaScript начинаются с 0, то есть январь — это 0:
> ```js
> const specificDate = new Date(2025, 1, 6); // 6 февраля 2025 года
> console.log(specificDate);
> ```
> Можно передать строку в стандарте ISO 8601 для создания даты.
> ```js
> const dateString = new Date("2025-02-06T00:00:00Z");
> console.log(dateString);
> ```

> [!NOTE]
> 
> **Получение компонентов даты**
> 
> Для получения различных компонентов даты применяется ряд методов:
> - `getDate()`: возвращает день месяца
> - `getDay()`: возвращает день недели (0 - воскресенье, 6 - суббота)
> - `getMonth()`: возвращает номер месяца (0 - январь)
> - `getFullYear()`: возвращает год
> - `toDateString()`: возвращает полную дату в виде строки
> - `getHours()`: возвращает час (от 0 до 23)
> - `getMinutes()`: возвращает минуты (от 0 до 59)
> - `getSeconds()`: возвращает секунды (от 0 до 59)
> - `getMilliseconds()`: возвращает миллисекунды (от 0 до 999)
> - `toTimeString()`: возвращает полное время в виде строки
> ```js
> const today = new Date(); 
> console.log(today.getDate()); // 8
> console.log(today.getDay()); // 6
> console.log(today.getMonth()); // 1
> console.log(today.getFullYear()); // 2025
> ```

> [!NOTE]
> 
> **Установка компонентов**
> 
> ```js
> let date = new Date();
> date.setFullYear(2023);
> date.setMonth(11);  // Декабрь
> date.setDate(25);
> console.log(date);  // 25 декабря 2023 года
> ```

> [!NOTE]
> 
> **Сравнение и разница между датами**
> 
> ```js
> const date1 = new Date(2025, 1, 6);
> const date2 = new Date(2025, 1, 7);
> console.log(date1 < date2);  // true
> 
> const differenceInMillis = date2 - date1;
> console.log(differenceInMillis);  // 86400000 (миллисекунды)
> ```

> [!NOTE]
> 
> **Форматирование даты**
> 
> Метод `toLocaleDateString()` позволяет вывести дату в локализованном формате:
> ```js
> console.log(now.toLocaleDateString("ru-RU"));  // "06.02.2025"
> ```
> Метод `toISOString()` возвращает строку в формате ISO 8601:
> ```js
> console.log(now.toISOString());  // "2025-02-06T00:00:00.000Z"
> ```
> 

### `Math`

Объект `Math` предоставляет различные математические функции и константы, которые можно использовать для выполнения математических операций.

> [!NOTE]
> 
> **Основные методы**
> 
> - `Math.abs(x)` - возвращает абсолютное значение числа `x`:
> ```js
> console.log(Math.abs(-5)); // 5
> console.log(Math.abs(5));  // 5
> ```
> - `Math.max(a, b, ..., n)` - возвращает наибольшее значение из набора:
> ```js
> console.log(Math.max(1, 2, 3)); // 3
> console.log(Math.max(-1, -2, -3)); // -1
> ```
> - `Math.min(a, b, ..., n)` - возвращает наименьшее значение:
> ```js
> console.log(Math.min(1, 2, 3)); // 1
> console.log(Math.min(-1, -2, -3)); // -3
> ```
> - `Math.ceil(x)` - округляет число x вверх до ближайшего целого:
> ```js
> console.log(Math.ceil(4.2)); // 5
> console.log(Math.ceil(4.8)); // 5
> ```
> - `Math.floor(x)` - округляет число x вниз до ближайшего целого:
> ```js
> console.log(Math.floor(4.8)); // 4
> console.log(Math.floor(4.2)); // 4
> ```
> - `Math.round(x)` - округляет число x до ближайшего целого:
> ```js
> console.log(Math.round(4.2)); // 4
> console.log(Math.round(4.5)); // 5
> console.log(Math.round(4.7)); // 5
> ```
> - `Math.random()` - возвращает случайное число от 0 (включительно) до 1 (не включая 1):
> ```js
> console.log(Math.random()); // случайное число между 0 и 1
> ```

> [!NOTE]
> 
> **Константы**
> 
> - `Math.PI` - приближённое значение числа π (~3.14159):
> ```js
> console.log(Math.PI); // 3.141592653589793
> ```
> - `Math.E` - приближённое значение числа Эйлера (~2.718):
> ```js
> console.log(Math.E); // 2.718281828459045
> ```

> [!NOTE]
> 
> **Дополнительные методы**
> 
> - `Math.pow(base, exponent)` - возведение числа в степень:
> ```js
> console.log(Math.pow(2, 3)); // 8 (2 в степени 3)
> ```
> - `Math.sqrt(x)` - извлечение квадратного корня:
> ```js
> console.log(Math.sqrt(16)); // 4
> console.log(Math.sqrt(2));  // 1.4142135623730951
> ```
> - `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)` - синус, косинус и тангенс угла x (в радианах):
> ```js
> console.log(Math.sin(Math.PI / 2)); // 1
> console.log(Math.cos(Math.PI)); // -1
> console.log(Math.tan(Math.PI / 4)); // 1
> ```
> - `Math.log(x)` - возвращает натуральный логарифм числа x:
> ```js
> console.log(Math.log(Math.E)); // 1
> ```
> - `Math.log10(x)` - возвращает логарифм по основанию 10 числа x:
> ```js
> console.log(Math.log10(100)); // 2
> ```
> - `Math.exp(x)` - возвращает экспоненту (число Эйлера в степени x):
> ```js
> console.log(Math.exp(1)); // 2.718281828459045
> ```

### `Number`

Объект `Number` предоставляет различные свойства и методы для работы с числовыми значениями.

> [!NOTE]
> 
> **Свойства**
> 
> - `Number.MAX_VALUE` - максимальное представимое число:
> ```js
> console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
> ```
> - `Number.MIN_VALUE` - минимальное представимое число (самое маленькое положительное число):
> ```js
> console.log(Number.MIN_VALUE); // 5e-324
> ```
> - `Number.NaN` - специальное значение, означающее "Не число" (Not-a-Number):
> ```js
> console.log(Number.NaN); // NaN
> console.log(isNaN(Number.NaN)); // true
> ```
> - `Number.POSITIVE_INFINITY` - положительная бесконечность:
> ```js
> console.log(Number.POSITIVE_INFINITY); // Infinity
> console.log(1 / 0); // Infinity
> ```
> - `Number.NEGATIVE_INFINITY` - отрицательная бесконечность:
> ```js
> console.log(Number.NEGATIVE_INFINITY); // -Infinity
> console.log(-1 / 0); // -Infinity
> ```

> [!NOTE]
> 
> **Методы**
> 
> - `Number.isNaN(value)` — проверяет, является ли значение `NaN`:
> ```js
> console.log(Number.isNaN(NaN)); // true
> console.log(Number.isNaN(100)); // false
> console.log(Number.isNaN("hello")); // false
> ```
> - `Number.isFinite(value)` — проверяет, является ли значение конечным числом (не бесконечность и не NaN):
> ```js
> console.log(Number.isFinite(100)); // true
> console.log(Number.isFinite(Infinity)); // false
> console.log(Number.isFinite(-Infinity)); // false
> console.log(Number.isFinite(NaN)); // false
> ```
> - `Number.isInteger(value)` — проверяет, является ли значение целым числом:
> ```js
> console.log(Number.isInteger(4)); // true
> console.log(Number.isInteger(4.5)); // false
> ```
> - `Number.parseFloat(value)` — преобразует строку в число с плавающей точкой:
> ```js
> console.log(Number.parseFloat("3.14")); // 3.14
> console.log(Number.parseFloat("3.14abc")); // 3.14
> ```
> - `Number.parseInt(value, radix)` — преобразует строку в целое число с заданной системой счисления:
> ```js
> console.log(Number.parseInt("101", 2)); // 5 (из бинарной строки)
> console.log(Number.parseInt("255", 16)); // 591 (из шестнадцатиричной строки)
> ```
> - `Number.toFixed(digits)` — форматирует число с заданным количеством знаков после запятой:
> ```js
> let num = 3.14159;
> console.log(num.toFixed(2)); // "3.14"
> ```
> - `Number.toPrecision(precision)` — форматирует число с заданным количеством значащих цифр:
> ```js
> let num = 12345.6789;
> console.log(num.toPrecision(5)); // "12346"
> ```

### `Symbol`

`Symbol` это примитивный тип данных, который представляет собой уникальные и неизменяемые идентификаторы. Символы обычно используются для создания уникальных ключей в объектах, предотвращая возможные конфликты с другими свойствами.

> [!NOTE]
> 
> **Создание символа**
> 
> Символ создается с помощью функции `Symbol()`, опционально с описанием для отладки:
> 
> ```js
> const sym1 = Symbol(); // символ без описания
> const sym2 = Symbol('описание'); // символ с описанием
> ```

> [!NOTE]
> 
> **Уникальность символов**
> 
> Каждый символ уникален, даже если два символа имеют одинаковое описание:
> 
> ```js
> const sym1 = Symbol('id');
> const sym2 = Symbol('id');
> console.log(sym1 === sym2); // false
> ```

> [!NOTE]
> 
> **Использование символов в объектах**
> 
> Символы часто используются в качестве уникальных ключей для свойств объектов. Это особенно полезно, когда нужно избежать переопределения свойств.
> 
> ```js
> const id = Symbol('id');
> const user = {
>   name: 'Alice',
>   [id]: 1
> };
> console.log(user[id]); // 1
> ```

> [!NOTE]
> 
> **Символы и перечисление свойств**
> 
> Символы не перечисляются в стандартных циклах, таких как `for...in` или методах `Object.keys()`, `Object.values()`, что позволяет использовать их для создания приватных свойств.
> 
> ```js
> const sym = Symbol('hidden');
> const obj = {
>   [sym]: 'This is hidden',
>   name: 'Alice'
> };
> 
> for (let key in obj) {
>   console.log(key); // Выведет только "name"
> }
> 
> console.log(Object.keys(obj)); // Выведет только ["name"]
> console.log(Object.getOwnPropertyNames(obj)); // Выведет только ["name"]
> console.log(Object.getOwnPropertySymbols(obj)); // Выведет [Symbol(hidden)]
> ```

> [!NOTE]
> 
> **Глобальные символы**
> 
> Глобальные символы доступны по всему коду через `Symbol.for()`. Они полезны, если вам нужно создать символы, которые могут быть использованы в разных частях программы.
> 
> ```js
> const globalSym1 = Symbol.for('globalId');
> const globalSym2 = Symbol.for('globalId');
> console.log(globalSym1 === globalSym2); // true
> ```

> [!NOTE]
> 
> **Методы символов**
> 
> - **`Symbol.for(key)`** - создает или находит глобальный символ по ключу.
> - **`Symbol.keyFor(symbol)`** - возвращает строковый ключ для глобального символа.
> 
> ```js
> const sym1 = Symbol.for('shared');
> console.log(Symbol.keyFor(sym1)); // 'shared'
> ```

### `Proxy`

Объект `Proxy` позволяет создавать прокси для других объектов, перехватывая и переопределяя основные операции, такие как чтение, запись свойств, вызовы методов и другие.

> [!NOTE]
> 
> **Создание прокси**
> 
> Прокси создаётся с помощью конструктора `Proxy`, который принимает два аргумента:
> 
> 1. `target` — целевой объект, для которого будет создан прокси.
> 2. `handler` — объект, содержащий функции-ловушки для перехвата операций с целевым объектом.
> 
> ```js
> const target = {
> 	message1: 'hello',
> 	message2: 'world'
> }; // целевой объект
> const handler = {
> 	get: function(obj, prop) {  // ловушка для операции чтения свойства
> 		return prop in obj ? obj[prop] : `Property "${prop}" is not found.`;
> 	}
> };
> const proxy = new Proxy(target, handler);
> 
> console.log(proxy.message1); // hello
> console.log(proxy.message3); // Property "message3" is not found.
> ```

> [!NOTE]
> 
> **Основные ловушки (Handler Methods)**
> 
> Ловушки (методы в объекте `handler`) могут быть использованы для перехвата различных операций. Вот несколько наиболее часто используемых:
> - `get(target, prop)` - перехватывает чтение свойства.
> ```js
> const handler = {
> 	get: function(target, prop) {
> 		return `You tried to access ${prop}`;
> 	}
> };
> ```
> - `set(target, prop, value)` - перехватывает установку значения свойства.
> ```js
> const handler = {
> 	set: function(target, prop, value) {
> 		if (prop === 'age' && value < 18) {
> 			  console.log('Age cannot be less than 18');
> 			  return false;
> 		}
> 		target[prop] = value;
> 		return true;
> 	}
> };
> ```
> - `has(target, prop)` - перехватывает проверку существования свойства через `in`.
> ```js
> const handler = {
> 	has: function(target, prop) {
> 		return prop === 'name'; // только 'name' будет "существовать"
> 	}
> };
> ```
> - `deleteProperty(target, prop)` - перехватывает удаление свойства.
> ```js
> const handler = {
> 	deleteProperty(target, prop) {
> 		if (prop === 'message1') {
> 			console.log('Cannot delete message1');
> 			return false;
> 		}
> 		delete target[prop];
> 		return true;
> 	}
> };
> ```
> - `apply(target, thisArg, argumentsList)` - перехватывает вызов функции.
> ```js
> const handler = {
> 	apply(target, thisArg, args) {
> 		console.log('Function was called with arguments:', args);
> 		return target.apply(thisArg, args);
> 	}
> };
> ```

> [!TIP]
> 
> **Где это может быть полезно?**
> 
> - Создание валидаторов для объектов.
> - Логирование изменений в объектах.
> - Прокси для безопасного доступа к данным (например, ограничение доступа к приватным данным).
> - Создание виртуальных объектов (например, ленивые вычисления).