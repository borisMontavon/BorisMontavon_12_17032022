# BorisMontavon_12_17032022

This repository contains all the source code to run the sports analytics dashboard SportSee.

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Starting the API

Clone this [GitHub repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) in a separate folder :
```sh
git clone git@github.com:OpenClassrooms-Student-Center/P9-front-end-dashboard.git

cd P9-front-end-dashboard/
```

Install the yarn dependencies :
```sh
yarn
```

Run the micro API :
```sh
yarn dev
```

**API will run on [`http://localhost:3000/`] by default.**

[`http://localhost:3000/`]: http://localhost:3000/

## Starting the SportSee project

Clone the repository :
```sh
git clone git@github.com:borisMontavon/BorisMontavon_12_17032022.git
```

Go to the `sportsee` folder :
```sh
cd BorisMontavon_12_17032022/sportsee
```

Install all the dependencies :
```sh
npm ci
```

Start the app :
```sh
npm run start
```

**Note: since the API use the 3000 localhost, we set a custom host to avoid conflicts. Feel free to change it if already used !**

```diff
"scripts": {
+  "start": "set PORT=3006 && react-scripts start",
-  "start": "react-scripts start",
   ...
}
```

## Jsdoc

To generate the Jsdoc :
```sh
npm run docs
```
**Jsdoc will create a `docs` folder where you will find the HTML rendering of the doc.** \
**To view the doc, simply open `sportsee/docs/index.html` in your browser.**
