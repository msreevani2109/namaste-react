const heading =  React.createElement(
    'h1',
    {id:"heading",style:{color:"green"}},
    'Hello World From React'
);
/* In the above code, style: { color: "green" } is an object that specifies the CSS properties. 
In React, the style prop accepts an object where the keys are camelCased CSS property names 
(e.g., backgroundColor for background-color in CSS), and the values are the CSS values (e.g., 'green').
color is a CSS property, so to apply it, it should be inside the style object. 
but the id attribute is not a CSS property; it's an HTML attribute. 
    CSS Property: Defines how an element should be styled (e.g., color, font-size, background-color).
    HTML Attribute: Provides additional information about an element (e.g., id, class, href, src).

In React, you pass attributes like id as part of the second argument to React.createElement, 
but when styling an element, you need to use the style attribute for inline styles, and 
you can use id as a standard HTML attribute for identifying the element.
*/
console.log(heading);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);//this render method is responsible for taking that heading object and converting into h1 tag  adding it into the DOM

/*
 <div id="parent">
    <div id="child">
     <h1>I'm heading </h1>
    </div>
 </div>
*/

// const parent = React.createElement("div",
//     {id:"parent"},
//     React.createElement("div",
//         {id:"children"},
//         React.createElement("h1",
//             {},
//             "I'm heading"
//         )
//     )
// );

/*
what if we have siblings
<div id="parent">
    <div id="child">
       <h1>I'm h1 tag</h1>
       <h2>I'm h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[
     React.createElement("h1",{},"I'm h1 tag"),
     React.createElement("h2",{},"I'm h2 tag") 
    ])
);
root.render(parent);


