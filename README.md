<h1 align="center">
    <a href="https://lectrum.io" target="_blank" rel="noopener noreferrer">
        <img src="./static/favicon/favicon-woodsmoke.svg" alt="Lectrum favicon" width="25" />
    </a>
    Воркшоп по React
</h1>
<br>

<div align="center">
    <!-- Package version -->
    <img src="https://img.shields.io/github/package-json/v/lectrum/react-workshop.svg?longCache=true&style=flat-square"
        alt="Package version" />
    <!-- Last commit -->
    <img src="https://img.shields.io/github/last-commit/lectrum/react-workshop.svg?longCache=true&style=flat-square" alt="Last commit"
    />
    <!-- Dependencies -->
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?longCache=true&style=flat-square" alt="Dependencies"
    />
    <!-- Contributors welcome -->
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?longCache=true&style=flat-square" alt="Last update"
    />
</div>
<div align="center">
    <!-- Наш Facebook -->
    <a href="https://www.facebook.com/lectrum">
        <img src="https://img.shields.io/badge/%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%88-Facebook-blue.svg?longCache=true&style=for-the-badge&link=https://www.facebook.com/lectrum"
            alt="Подписывайся на наш Facebook" />
    </a>
</div>
<br>

<h3 align="center">
    👋🏼 Добро пожаловать!
</h3>
<p>
    📸 Вместе мы построим свой Instagram в живом режиме! Так что пристегни ремни — будет интересно!
</p>
<br>
<p>
    👨🏼‍🔬 В этой инструкции ты узнаешь как настроить и запустить проект.
</p>
<br>

## 📜 Содержание

<img align="right" width="70" src="./static/logos/react.png">

-   [🚀 Для запуска проекта выполни следующие шаги](#-Для-запуска-проекта-выполни-следующие-шаги)
-   [🤖 Краткий обзор команд для проекта](#-Краткий-обзор-команд-для-проекта)
-   [🤔 FAQ](#-faq)
<br>

### 🚀 Для запуска проекта выполни следующие шаги

1. [Скачай и установи](https://nodejs.org/en/) последнюю LTS-версию Node.js;
2. Выполни в консоли `node -v` и убедись, что установленная версия Node.js не ниже `v8.11.4`;
3. Выполни в консоли `npm -v` и убедись, что установленная версия npm не ниже `5.6.0`;
4. Установи [Yeoman](http://yeoman.io/) и [генератор проекта компании Lectrum](https://github.com/Lectrum/generator-ui):

```bash
npm install -g yo @lectrum/generator-ui
```

5. [Скачай и установи Git](https://git-scm.com/downloads), если его нет на компьютере;
6. Выполни в консоли `git --version`, чтобы проверь версию установленного Git, должно быть не ниже `2.18.0`;
7. Склонируй этот проект:

```bash
git clone https://github.com/lectrum/react-workshop.git
```

8. Чтобы перейти в директорию с проектом, после клонирования выполни команду:

```bash
cd react-workshop
```

9. В терминале, находясь в директории с текущим проектом, выполни команду: 

```bash
yo @lectrum/ui
```

10. Генератор подготовит все нужные файлы, установит зависимости, и запустит проект;
11. Перейди в браузер и открой страничку [http://localhost:3000](http://localhost:3000/). Когда страничка загрузится, появится сообщение «Добро пожаловать!»;
12. Открой Chrome Dev Tools и перейди на вкладку console, там не должно быть каких-либо ошибок.
<br>

### 🤖 Краткий обзор команд для проекта

> Заметка: эти команды станут доступны после первого выполнения команды `yo @lectrum/ui`.\
> Запускать через `yarn «имя команды»` или `npm run «имя команды»`.

| Команда           | Описание                                                                        |
| ----------------- | ------------------------------------------------------------------------------- |
| `start`           | запустить проект для разработки                                                 |
| `build:prod`      | запустить сборку проекта                                                        |
| `build:analyze`   | запустить сборку проекта и запустить режим детального анализа результата сборки |
| `lint:javascript` | провести анализ исходного JavaScript-кода на стилистические ошибки              |
| `lint:css`        | провести анализ исходного CSS-кода на стилистические ошибки                     |
| `lint`            | провести анализ всего исходного кода на стилистические ошибки                   |
| `test`            | запустить тесты                                                                 |
| `test:watch`      | запустить тесты в watch-режиме                                                  |
| `test:debug`      | запустить тесты в debug-режиме                                                  |
| `soundcheck`      | запустить все линтеры и тесты                                                   |
| `prettier`        | отформатировать исходный код с помощью prettier                                 |
| `deploy`          | собрать и задеплоить приложение на свой Github Pages                                      |
| `commit`          | сделать [стандартизированный коммит](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)                                      |

> Заметка: после деплоя на Github Pages приложение будет доступно по адресу:\
> https://**`имя-твоего-пользователя-гитхаб`**.github.io/**`имя-твоего-репозитория-с-приложением`**
<br>

### 🤔 FAQ

Ответы на часто задаваемые вопросы можно найти [здесь](https://github.com/Lectrum/FAQ#-faq).
<br>

### Лицензия

MIT © [Lectrum](https://lectrum.io)

<div align="center">
  <!-- Сделано с любовь -->
    <img src="https://img.shields.io/badge/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%20%D1%81-%F0%9F%96%A4-red.svg?longCache=true&style=for-the-badge&colorA=000&colorB=fedcba"
      alt="Сделано с любовь" />
</div>
