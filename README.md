# swagger-autogen-doc

## Установка
Для установки данного модуля используйте
```
npm install swagger-autogen-doc
```

## Подключение 
Подключение к проекту происходит путём импорта модуля и передачи в него объекта созданного через функцию **express()** и путь к директории проекта.
Пример подключения:

```javascript
const express = require('express')
const app = express()
const { OptionsSwagger, Swagger } = require("swagger-autogen-doc");

/*
Подключение API к app
*/

const options = new OptionsSwagger({}, __dirname);
let swagger = new Swagger(app, options);
swagger.Use();
```
_ВАЖНО!_ Вызов функции **Use()** использовать после подключения API к объекту app. Т.к. не все данные могут быть получены

## Использование
Модуль расчитан на шаблон разработки, где каждый API лежит в отдельном файле и структуру файла подобной этой:
```javascript
const { swaggerApi } = require("swagger-autogen-doc");
const Joi = require('joi')

module.exports = () => {
  return swaggerApi({
    method: 'get',
    path: '/api/v1/public/test',
    validationSchema: Joi.object({
      email: Joi.string().email()
    }),
    handler: async function (req, _res) {
      return res.status(200).json({message: "Hello world"});
    }
  });
}

```
Функция **swaggerApi(object)** используется получение информации о данном объекте. Поэтому и рекомендуется использовать **Use()** после подключения API для отработки данных функций

## Использование комментариев
Синтаксис комментариев для описания имеет струкутуру похожую на HTML и XML. Для обозначения, что это именно комментарий для swagger генератора, используются тег **\<swagger\>\</swagger\>**
Список доступных тегов:
* **summary** - тег для описания заголовка API. Например:
```
<summary>
Авторизация пользователя
</summary>
```
* **remarks** - тег для описания API
```
<remarks>
Принимает в теле запроса логин и пароль
</remarks>
```
* **response** - тег для описания возможных ответов API. Имеет атрибуты:
  1. **code** - код ответа 
```
<response code='200'>
Запрос успешен
</response>
```
Пример описания кода:
```javascript
/*
<swagger>
<summary>
Тестовый API
</summary>

<remarks>
Тестовый API, ничего не принимает и всегда возвращает ответ с кодом 200 и текстом "Hello World"
</remarks>

<response code = '200'>Запрос успешен</response>
</swagger>
*/
const { swaggerApi } = require("swagger-autogen-doc");
const Joi = require('joi')

module.exports = () => {
  return swaggerApi({
    method: 'get',
    path: '/api/v1/public/test',
    validationSchema: Joi.object({
      email: Joi.string().email()
    }),
    handler: async function (req, _res) {
      return res.status(200).json({message: "Hello world"});
    }
  });
}
```
Также в комментариях имеется возможность использовать стандартные теги HTML, например, **\<b\>**, **\</br\>**.

## Настройки
Класс **OptionsSwagger** принимает в себя объект в настройками и путь к директории проекта. 
Существуют следующие настройки:
* **folderApi** - путь к папке где лежат API. Для оптимизации парсинга проекта
* **pathDoc** - путь куда будет сохраняться .json файл документа относительно директории проекта. По-умолчанию равен "./swagger.json"
* **endpointSwagger** - endpoint для доступа к документации. По-умолчанию равен "/api-docs"
* **url** - объект настройки путей API который будет использоваться в разработке. Имеет свойства:
  * **templateRout** - шаблон endpoint. По-умолчанию равен "/api/:version/:controller/:resources+". То есть каждый endpoint будет иметь такую схему, например: '/api/v1/public/login'.
Здесь **v1** - version, **public** - controller, **login** - resources.
  * **groupBy** - по какому из частей endpoint будет группировка. По-умолчанию "controller".