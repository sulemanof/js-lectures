Your task is to become more familiar with [Webpack 4](https://webpack.js.org) and modern tools for FE development
---
- Take a course through the [webpack official guide](https://webpack.js.org/guides/)
- Take a look at the article - [5 JavaScript Style Guides](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa)
- Use one of the most popular javascript styleguide - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Consider using [ESLint](https://eslint.org/), explore [ESLint integrations](https://eslint.org/docs/user-guide/integrations) into other tools like favorite editors, build systems, and more.
- Use an [.editorconfig](https://editorconfig.org/) file
---
### Make your Weather App using the Webpack ❤
- create a new GitHub repo (name it as you want, e.x. `weather-app`)
- clone it on your local machine
- create a `.gitinore`, add necessary ignore rules to ignore (you could use [this](https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc) template for an example)
- install and use the [ESLint](https://eslint.org) (use the [airBnB styleguide](https://github.com/airbnb/javascript))
- copy your previous code of Weather App (using jQuery and modules)
- install webpack, create `common`, `dev` and `prod` webpack configs, use [webpack-merge](https://github.com/survivejs/webpack-merge) tool
- add `start` and `build` script into the `package.json`
- in `development` mode use `dev-server` and `inline-source-map`,
`hotModuleReplacement`
- use all (known from the lecture) type of plugins and loaders (CleanWebpackPlugin, HtmlWebpackPlugin, 'style-loader', 'css-loader', 'raw-loader', 'file-loader'
)
- include any pretty font into your app (e.x. [fontAwesome](https://fontawesome.com/) for icons)
- create a PR, add [me](https://github.com/sulemanof) as a reviewer
---
You can easily host your production code on [GitHub Pages](https://pages.github.com/) (serve only the `dist` folder for this purpose)
