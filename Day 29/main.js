//getting all elements 
const main = document.querySelector('main');
const pElement = document.querySelector('p')
const text = pElement.textContent
const html = document.querySelector('html')

//adding functions:

//1. changing background color of main;
function changeColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.random();

    html.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;

}
setInterval(changeColor, 2000)

//2. changing the color of the text
function letterColor(){
    const textArray = text.split('');
    if(text.length > 0){
        pElement.textContent = '';
        for(let i = 0; i < textArray.length; i++){
            const span = document.createElement('span');
            span.textContent = textArray[i];
            span.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            pElement.appendChild(span)
        }
    }
    
}
setInterval(letterColor, 2000)

//changing font-family
function fontFamily(){
    const fontFamily = ['sans-serif', 'cursive', 'monospace', 'fantasy', 'cursive', 'Arial', 'Helvetica', 'Verdana', 'Times New Roman', 'Courier']
    pElement.style.fontFamily = fontFamily[Math.round(Math.random() * fontFamily.length)];
}
setInterval(fontFamily, 2000)

//changing fonst size
function fontSize(){
    pElement.style.fontSize = `${Math.round(Math.random() * 15)}rem`
}
setInterval(fontSize, 2000)
    