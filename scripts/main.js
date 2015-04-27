window.onload = init;
can = document.getElementById('myCanvas');
ctx = can.getContext('2d');

articulations = [];
selectedArticulation = -1;

function init()
{
    can.style.background = 'Grey';
    test();
}

function clearCanvas()
{
    ctx.save(); // same operation as pushmatrix with opengl

    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, can.width, can.height);

    ctx.restore(); // same operation as popmatrix with opengl
}

function test()
{
    myTest = new Articulation();
    console.log(myTest);
    myTest.drawArticulation(ctx);
}

function update()
{
    clearCanvas();

    for(i in articulations)
    {
        // TODO:ajout du dessin des articulations
        console.log(articulations[i]);
    }
}

function Articulation()
{
    this.id = 0
    this.pos = [200,200];
    this.rotation = 0;
    this.parent = null;
    this.enfants = [];

    var color = 'Cyan';
    var selectedColor = 'Red';
    var radius = 5;

    this.drawArticulation = function(ctx)
    {
        ctx.beginPath();
        ctx.strokeStyle='Black';
        ctx.lineWidth=3;
        ctx.fillStyle=color;

        ctx.arc(this.pos[0], this.pos[1], radius, 0, (2*Math.PI));
        ctx.stroke();
        ctx.fill();
    }
}
