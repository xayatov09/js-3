const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
const truckLength = 120;
const halfWay = (canvas.width - truckLength) / 2;

function drawTruck(x) {
    // Yuk mashinasi korpusi
    ctx.fillStyle = '#607d8b';
    ctx.fillRect(x, 110, 120, 40);

    // Kabina
    ctx.fillStyle = '#ffb300';
    ctx.fillRect(x + 80, 90, 40, 40);

    // Yuk mashinasi g'ildiraklari
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(x + 25, 155, 15, 0, Math.PI * 2);
    ctx.arc(x + 95, 155, 15, 0, Math.PI * 2);
    ctx.fill();
}

function drawRobot(x) {
    // Tana
    ctx.fillStyle = '#607d8b';
    ctx.fillRect(x + 40, 100, 40, 60);

    // Bosh
    ctx.fillStyle = '#ffb300';
    ctx.fillRect(x + 50, 80, 20, 20);

    // Qo'llar
    ctx.fillStyle = '#90caf9';
    ctx.fillRect(x + 30, 110, 10, 40);
    ctx.fillRect(x + 80, 110, 10, 40);

    // Oyoqlar
    ctx.fillStyle = '#90caf9';
    ctx.fillRect(x + 48, 160, 8, 20);
    ctx.fillRect(x + 64, 160, 8, 20);

    // Ko'zlar
    ctx.fillStyle = '#222';
    ctx.fillRect(x + 55, 85, 3, 3);
    ctx.fillRect(x + 62, 85, 3, 3);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (x < halfWay) {
        drawTruck(x);
    } else {
        drawRobot(x);
    }

    x += 2;
    if (x > canvas.width) x = -truckLength;
    requestAnimationFrame(animate);
}

animate();