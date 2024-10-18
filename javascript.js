const container = document.querySelector('#container');
const lineBreak = document.createElement('br');

function createDivs(numberOfDiv)
{
    for (let row = 0; row < numberOfDiv; row++)
    {
        for (let col = 0; col < numberOfDiv; col++)
        {
            const div = document.createElement('div');
            div.setAttribute('class', 'divs');
            container.appendChild(div);
        }
    }
}

createDivs(3);
