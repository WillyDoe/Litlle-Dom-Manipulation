const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const div = document.querySelector('div');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');


//Creating Elements and displaying them
const h3 = document.createElement('h3');
const a = document.createElement('a');


a.href = "https://30dayjavascript.js.org/";
a.appendChild(h2);
div.insertBefore(a, ul);
a.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif';




//h1 styling
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id='year'>2020<span>`;
let year = document.querySelector('#year');
year.style.fontSize = '60px';
let color;
const chamaleon = () => {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    color = `rgb(${random1},${random2},${random3})`
    year.style.color = color;
}
setInterval(chamaleon, 1000);
h1.style.textAlign = 'center';
//h3 styling
const time = () => {
    const months = [ "January", "February", 
    "March", "April", "May", 
    "June", "July", "August",
    "September", "October", 
    "November", "December"]
    const date = new Date();
    const dateMonth = months[date.getMonth()];
    const dateDay = date.getDay();
    const dateYear = date.getFullYear();
    const dateTime = date.toLocaleTimeString();
    const fullDate = `${dateMonth} ${dateDay}, ${dateYear} ${dateTime}`;
    h3.innerText = fullDate;

    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    color = `rgb(${random1},${random2},${random3})`
    h3.style.background = color;
}
setInterval(time, 1000)
div.insertBefore(h3, ul);
const div2 = document.createElement('div');
div.insertBefore(div2, ul)
div2.appendChild(h3);
h3.style.display = 'inline-block'
h3.style.padding = '5px';
div2.style.textAlign = 'center'

//ul Styling
ul.style.listStyle = 'none';
let div3 = document.createElement('div');
div.insertBefore(div3, ul)
div3.appendChild(ul);
div3.style.display = 'flex';
div3.style.justifyContent = 'center'

//li styling
li.forEach(li => {
    li.style.fontSize = '20px';
    li.style.padding = '5px';
    li.style.margin = '2px';

    if(li.textContent.includes('Done')){
        li.style.background = 'green';
    }else if(li.textContent.includes('Ongoing')){
        li.style.background = 'yellow';
    }else{
        li.style.background = 'red';
    }
})



