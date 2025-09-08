# React JS - Implementation 

## Episode - 1 (Inception)

### Things to remember
- VS Code uses Emmet to generate the simple code
- Order of the files in index.html should be sequential
- Whatever the content present in the html it will be replaced with the data which is in the react app
#### Adding React.js into Project
- CDN Links (Content Delivery Networks) ❌ Not a prefered way
    - react.development.js (Contains the core React Framework)
    - react-dom.development.js (Bridge to connect to the DOM)
#### Code

```JAVASCRIPT
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" },
  ]),
  React.createElement("div", { id: "child2" }, [
]);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
```

## Episode - 2 (Igniting our App)

### Things to remember
- NPM (*Not Fullform*) - Node Package Manager ❌
- ``` <script type = 'module' src="./Apps.js"></script> ```
  - To run the index.html make sure you include ```type = 'module'``` in script tag as above


#### NPM 
- npm init
    - package.json (^ Minor Version, ~ Major Version - Download) ```"parcel": "^2.15.4"``` - ```"parcel": "~2.15.4"```
      - Remove the ```main``` key:value pair
      ```js
      "browserslist": ["last 10 versions"]
    ```
    - package-lock.json
        - It keeps the record of exact version of all dependencies
- node_modules
    - Holds all the dependencies code
- Bundler
  - parcel ```npm install -D parcel```
      - ```npx parcel index.html```
      - ```npx parcel build index.html```
      - HMR = Hot Module Replacement 
      - File Watching Algorithm 
      - Caching - Faster Builds
      - Image Optimization
      - Minification
      - Bundling
      - Compressing the files
      - Code Splitting
      - Differential Bundling - Support Old Browsers
      - Tree Shaking - Removes unused code
    - Vite
    - Webpack
- npm intall react
  - import React from 'react'
- npm install react-dom
  - import ReactDom from 'react-dom'

  ## Episode - 3 (Laying the foundation)

### Things to remember

- package.json
   - script object
```js 
    "start": "parcel index.html",
    "build": "parcel build index.html",
```
```npm run start``` or ```npm start```

#### JSX
- JavaScript Syntax to create React elements
- JSX is HTML like syntax
- Browsers don't understand the JSX syntax, hence Parcel will convert it with the help of Babel to understand for Browsers
- Babel: Javascript compiler
- Attributes in JSX are camel casing (ex: className)


#### React Component
- Class Based
  - Old Way of Writing the code
- Functional Based
  - Should start with Capital letter
  - New way of writing the code
  - Just a Normal function
  - Component Composition (Component inside component)
```js

//Functional Component
const Heading = () => (
    <h1>I am from the Heading Component 🚀</h1>
)

//React Element
const subHeading0 = (
    <h3>I am from SubHeading0 and being called from SubHeading</h3>
)
//React Functional Componenr
const SubHeading = () => (
    <div id='container'>
        <Heading />
        <h2>I am from SubHeading Component and calling the Heading Component</h2>
        {subHeading0}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< SubHeading/>)

```

## Episode - 4 (Talk is cheap, Show me the code)

### Things to remember
  - props are just normal arguments to the Function
  
#### Build a Food Ordering App
  - Fix Design
  ```js
  resList.map(rest =>  <RestaurantCard key={rest.info.id} resData={rest}/>)
  ```  
  


