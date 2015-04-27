window.onload = init;
can = document.getElementById('myCanvas');
ctx = can.getContext('2d');

function init()
{
    can.style.background = 'Grey';
    console.log('TESTING');
    console.log(can);
    drawTest();
}

function clearCanvas()
{
    ctx.save(); // same operation as pushmatrix with opengl

    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, can.width, can.height);

    ctx.restore(); // same operation as popmatrix with opengl
}

function drawTest()
{
    ctx.strokeStyle='Black';
    ctx.fillStyle='Yellow';

    ctx.beginPath();
    ctx.arc(125, 125, 10, 0, (2 * Math.PI), false);
    ctx.stroke();
    ctx.fill();
}

function update()
{
    clearCanvas();
}

function Articulation()
{
}
