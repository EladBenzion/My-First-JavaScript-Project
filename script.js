const button = document.getElementById('btn');
let score =  document.getElementById('sc');
let numberOfClicks = 0;
button.addEventListener('click', async (event) => {
    score.innerHTML = numberOfClicks;
    numberOfClicks++;
})
// function removeNumber () {
//     const loop = setInterval(() => {
//         score.innerHTML = numberOfClicks;
//         numberOfClicks--;
//     }, 1000);
//     return loop;
// }

if(Number(score.innerHTML) == 20) {
    score.innerHTML = numberOfClicks;
    numberOfClicks += 2;
}