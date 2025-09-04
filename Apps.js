import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
    <h1>I am from the Heading Component 🚀</h1>
)
const subHeading0 = (
    <h3>I am from SubHeading0 and being called from SubHeading</h3>
)
const SubHeading = () => (
    <div id='container'>
        <Heading />
        <h2>I am from SubHeading Component and calling the Heading Component</h2>
        {subHeading0}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< SubHeading/>)