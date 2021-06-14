const button = document.getElementById('btn');
let score =  document.getElementById('sc');
let numberOfClicks = 0;
button.addEventListener('click', async (event) => {
    score.innerHTML = numberOfClicks;
    numberOfClicks++;
})
