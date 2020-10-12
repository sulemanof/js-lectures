Ваша задача - познакомиться ближе с [Webpack](https://webpack.js.org) и другими инструментами для современной разработки во фронт-энде
---
- Пройдите курс в официальной документации - [webpack official guide](https://webpack.js.org/guides/)
- Посмотрите статью о современных стайл-гайдах в JS - [5 JavaScript Style Guides](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa)
- В дальнейшем для работы рекоммендую использовать наиболее популярный стайл-гайд - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Обратите внимание на использование линтеров в проетке, наиболее популярный - [ESLint](https://eslint.org/), интегрируйте линтер к своему редактору кода (или даже к билд-процессу) [ESLint integrations](https://eslint.org/docs/user-guide/integrations).
- Используйте файл конфигурации проекта - [.editorconfig](https://editorconfig.org/). (для интеграции с VSCode используйте [плагин](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig))
---
### Перепишите ваше приложение Weather App с использованием Webpack ❤
- создайте новый репозиторий на гитхабе (назовите его как вам нравится, например `weather-app`). Это будет ваш полноценный проект в копилку для резюме, так что отнеситесь серъёзно
- создайте файл `.gitinore`, добавьте необходимые правила игнора (например можете использовать этот [шаблон](https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc) либо любой другой под ваши нужды)
- подключите и настройте [ESLint](https://eslint.org) к проекту (используйте [airBnB styleguide](https://github.com/airbnb/javascript))
- скопируйте в проект код вашего Weather App приложения из предыдущего д/з
- установите webpack, создайте `common`, `dev` и `prod` webpack конфиги, используйте утилиту [webpack-merge](https://github.com/survivejs/webpack-merge)
- добавьте скрипты быстрого запуска `start` и `build` в файле `package.json`
- для `development` режима используйте `dev-server` и `inline-source-map`, а также `hotModuleReplacement`
- используйте все пройденные плагины и лоадеры для вебпака (CleanWebpackPlugin, HtmlWebpackPlugin, 'style-loader', 'css-loader', 'raw-loader', 'file-loader')
- попробуйте добавить библиотеки сторонних иконок с помощью вебпака (например [fontAwesome](https://fontawesome.com/))
- создайте пул реквест, добавьте своего ментора в качестве ревьювера
---
P.S.: Вы также можете захостить ваше приложение на серверах гитхаба - попробуйте использовать [GitHub Pages](https://pages.github.com/) (для этих целей нужно залить только папку `dist` с собранным в бандл кодом)
