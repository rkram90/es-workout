let headerText = "A quick introduction to Tagged Template Literals";
let description = `
Tagged template literals, introduced in ES6, add another layer of functionality to template strings (which are strings enclosed in backticks). They allow you to call a function, known as the tag function, on a template literal. This gives you more control over how the string is processed and what the final output might be.`;
let category = "ES6, JavaScript, TypeScript";


let lines = [headerText, description, category];

function buildHtml(tags, ...expression){
    console.log(tags);
    console.log(expression);
}


export const result = buildHtml`<h2> ${lines[0]}
<p>${lines[1]}
<span> ${lines[2]}`;


function testFunction(){
    return "Hello, from inside test Function"
  }
  
  const templateLiteralCallback = `Rob Jim Bill ${()=>testFunction()}`
  console.log(templateLiteralCallback);
  
  function taggedCallback(strings, func){
    return strings[0]+func();
  }
  
  const taggedLiteralCallback = taggedCallback`Rob Jim Bill ${()=>testFunction()}`
  console.log(taggedLiteralCallback)

