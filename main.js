const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const map = new Image();
map.src = './images/map.png';

const playerDown = new Image();
playerDown.src = './images/playerDown.png';

context.fillStyle = 'white';
context.fillRect (0, 0, canvas.width, canvas.height);

console.log(map)

map.onload = () => {
    context.drawImage(map, -4900, -4600)
    context.drawImage(
        playerDown,
        0,
        0,
        playerDown.width / 4,
        playerDown.height, 
        canvas.width / 2 - playerDown.width / 8, 
        canvas.height / 2 - playerDown.height / 2,
        playerDown.width / 4,
        playerDown.height
    )
}
