const body = document.querySelector('body');
const container = document.querySelector('#container');
const button = document.createElement('button')

const containerWidth = 500;
const containerHeight = 500;

body.insertBefore(button, container);

button.textContent = 'Create Grid';
button.addEventListener('click', () => {
    container.innerText = '';
    let squares = prompt('How many squares per side do you want ? Maximum squares is 100');
    createDivs(squares);
})

let opacity = 0;
let coloredDiv = 0;

function createDivs(numberOfDiv)
{
    if (numberOfDiv < 0)
    {
        alert('Negative numbers are not supported');
        return;
    }
    if (numberOfDiv > 100)
    {
        alert('You have exceeded the maximum limit on number of squares per side.\n Please try again.');
        return;
    }
    for (let row = 0; row < numberOfDiv; row++)
    {
        for (let i = 0; i < numberOfDiv; i++)
            {
                const div = document.createElement('div');
                div.setAttribute('class', 'divs');
                container.appendChild(div);
                div.style.width = (containerWidth / numberOfDiv) + 'px';
                div.style.height = (containerHeight / numberOfDiv) + 'px';
                div.style.opacity = 0;
                div.addEventListener('mouseenter', () => {
                    if (+div.style.opacity < 1)
                    {
                        div.style.opacity = +div.style.opacity + 0.1;
                    }
                    hoverEffect(div);
                });
                    
            }        
    }
}

function hoverEffect(div)
{
    div.style.backgroundColor = getRandomRGB();
}

function getRandomRGB()
{
    let red = Math.floor((Math.random() * 256));
    let blue = Math.floor((Math.random() * 256));
    let green = Math.floor((Math.random() * 256));

    rgbValues = `rgb(${red}, ${blue}, ${green})`;
    return rgbValues;
}
