# Capstone
Is a Project where the someone can search the status of weather in some places only need to type the US city and the postal code and you get weather information, besides you can get different kinds of pics

## Installation

For installation this we need to take in mind this thins 

Clone this repo to your local machine

- Install [NodeJs](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

- Install [webpack](https://www.npmjs.com/package/webpack), we have to get to version the Develop and prod 

```bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

## Dependencies

- Install [Sass] (https://sass-lang.com/install), this will be used with the webpack for the css files

- Install [Babel] (https://www.npmjs.com/package/babel-install)

- Install [Clean-webpack-plugin] (https://www.npmjs.com/package/clean-webpack-plugin)

```bash
npm install --save-dev clean-webpack-plugin
```

- Install [Jest] (https://jestjs.io/docs/en/getting-started)

```bash
npm install --save-dev jest
```

- install [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

```bash
npm install --save-dev mini-css-extract-plugin
```

If you want to run the project there a are different ways to do that develop ('npm run dev') and production ('npm start') 


The unit test will be executed with the tool jest

```bash
running the test only have to type 'npm run test'
```
if you want yo check the list test you can type 

```bash
npm run test:watch
```

## File list 

- There are two Css, where if tchange the view to 414px or 768px the page change
- exist two main folders client where is all the js, html and style that are using, the server folder where is displaying the configuraction.
- at the webpack config is all the configuration environent production and develop

## Usage 

```python
Important once the build has been run, you have to type at the address following:
http://localhost:8080/ (If you want to run the Develop environment) the command npm run dev
http://localhost:5000/ (If you want to run the prod) don't forget the command npm start


For the correct use you have to type the Zipcode and the Code city and you will see list with the information about the search.