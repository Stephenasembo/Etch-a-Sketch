const container = document.querySelector('#container');
let squares = prompt('How many squares do you want ?');

const containerWidth = 400;
const containerHeight = 400;

function createDivs(numberOfDiv)
{
    for (let row = 0; row < numberOfDiv; row++)
    {
        for (let i = 0; i < numberOfDiv; i++)
            {
                const div = document.createElement('div');
                div.setAttribute('class', 'divs');
                container.appendChild(div);
                div.style.width = (containerWidth / numberOfDiv) + 'px';
                div.style.height = (containerHeight / numberOfDiv) + 'px';
                div.addEventListener('mouseenter', () => hoverEffect(div));
            }        
    }
}

createDivs(squares);

function hoverEffect(div)
{
    div.style.backgroundColor = 'black';
}

