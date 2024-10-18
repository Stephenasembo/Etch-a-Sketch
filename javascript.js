const container = document.querySelector('#container');
let squares = prompt('How many squares do you want ?');

function createDivs(numberOfDiv)
{
    for (let i = 0; i < numberOfDiv; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('class', 'divs');
        container.appendChild(div);
        div.style.padding = '10px';
        div.addEventListener('mouseenter', () => hoverEffect(div));
    }
}

createDivs(squares);

function hoverEffect(div)
{
    div.style.backgroundColor = 'black';
}

