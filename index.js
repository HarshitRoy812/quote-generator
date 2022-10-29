const container = document.getElementById('main_content');
const btn = document.querySelector('#btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const url = 'https://api.quotable.io/random';

btn.addEventListener('click',() => {
    
    fetch(url)
    .then(res => res.json())
    .then(data => generateQuote(data))  
})

const generateQuote = (data) => {
    quote.innerText = data.content;
    author.innerText = `~ ${data.author}`;
}