---
title: Обработка ошибок
---

## Конструкция `try..catch..finally`

`try..catch..finally` позволяет обрабатывать ошибки в JavaScript, перехватывая исключения, возникшие в блоке `try`.

- `try` — содержит код, в котором может произойти ошибка.
- `catch` — выполняется, если ошибка возникла в блоке `try`, параметр `error` содержит информацию об ошибке.
- `finally` — выполняется в любом случае, независимо от того, была ли ошибка. Это полезно для очистки ресурсов или завершения действий.

```js
try {
	// содержит код, в котором может произойти ошибка
	let result = someUndefinedFunction();
} catch (error) {
	// исполняется, если в блоке "try" возникла ошибка
	// параметр error содержит объект ошибки
	console.log("Произошла ошибка:", error.message);
} finally {
	// опционален
	// выполняется в любом случае после блоков "try" и "catch"
	// выполняется независимо от того, была ли ошибка
	console.log("Блок finally выполнен.");
}
```

> [!WARNING]
> 
> **Важный момент**
> 
> Возвращаемое значение (`return`) из блока `finally` всегда заменяет результат, возвращённый из блоков `try` или `catch`. Это важно учитывать при организации логики обработки ошибок, так как любое значение, возвращённое из `finally`, будет иметь приоритет.
## Генерация ошибок `throw`

В JavaScript можно выбрасывать ошибки вручную с помощью оператора `throw`. Это полезно для проверки условий и создания собственных ошибок, когда стандартные исключения не подходят.

```js
function divide(a, b) {
	if (b === 0) {
		throw new Error("Деление на ноль невозможно.");
	}
	return a / b;
}

try {
	let result = divide(10, 0);
} catch (error) {
	console.log("Ошибка:", error.message);
}
```

## Типы ошибок

JavaScript предоставляет несколько встроенных типов ошибок, каждый из которых соответствует определённой проблеме:
- `Error` - базовый тип для всех ошибок.
- `ReferenceError` - при обращении к несуществующей переменной.
- `SyntaxError` - при синтаксической ошибке.
- `TypeError` - при попытке выполнить операцию с несовместимым типом.
- `RangeError` - при выходе за допустимый диапазон значений.
- `EvalError` - связан с функцией `eval()`.
- `URIError` - при некорректном использовании `encodeURI()` или `decodeURI()`.
- `InternalError` - внутренняя ошибка в движке JavaScript.
- `AggregateError` - при обработке нескольких ошибок, например, в `Promise.all()`.

Пример с `ReferenceError`:

```js
try {
	console.log(nonExistentVariable);
} catch (error) {
	console.log("Ошибка:", error.name); // ReferenceError
	console.log("Сообщение:", error.message);
}
```

## Обработка ошибок и стек вызова функций

Когда в JavaScript возникает ошибка, она "всплывает" по стеку вызовов до тех пор, пока не будет перехвачена в блоке `catch`. Если ошибка не перехвачена, программа завершится.

В этом примере ошибка в функции `thirdFunction()` передаётся через `secondFunction()` и `firstFunction()`, пока не будет поймана в блоке `catch`. Свойство `stack` объекта ошибки содержит стек вызовов, который привёл к ошибке:

```js
function firstFunction() {
	secondFunction();
}

function secondFunction() {
	thirdFunction();
}

function thirdFunction() {
	throw new Error("Ошибка в третьей функции.");
}

try {
	firstFunction();
} catch (error) {
	console.log("Перехвачена ошибка:", error.message);
	console.log("Стек вызовов:", error.stack);
}
```

## Проверка типа ошибки `instanceof`

Для более точной обработки различных типов ошибок можно использовать `instanceof`, чтобы определить тип ошибки и соответственно обработать её. Это полезно, если разные ошибки требуют разных действий:

```js
try {
	let result = someUndefinedFunction();
} catch (error) {
	if (error instanceof ReferenceError) {
		console.log("Ошибка типа ReferenceError");
	} else if (error instanceof TypeError) {
		console.log("Ошибка типа TypeError");
	} else {
		console.log("Другая ошибка");
	}
}
```

## Асинхронная обработка ошибок

Для асинхронных операций, таких как работа с промисами или `async`/`await`, можно использовать конструкцию `try..catch` для обработки ошибок.

```js
async function fetchData() {
	try {
		let response = await fetch("https://example.com/data");
		if (!response.ok) {
			throw new Error("Ошибка загрузки данных");
		}
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Произошла ошибка:", error.message);
	} finally {
		console.log("Завершающий код");
	}
}

fetchData();
```