window.onload = init;
can = document.getElementById('myCanvas');
ctx = can.getContext('2d');

articulations = [];
selectedArticulation = -1;
lastArticulationId = 0

function init()
{
    can.style.background = 'Grey';
    can.addEventListener('mousedown', onCanvasClicked, false);
    test();

    window.requestAnimationFrame(update);
}

function clearCanvas()
{
    ctx.save(); // same operation as pushmatrix with opengl

    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, can.width, can.height);

    ctx.restore(); // same operation as popmatrix with opengl
}

function onCanvasClicked(e)
{
    // Mouse position is (e.offsetX, e.offsetY)
    x = e.offsetX;
    y = e.offsetY;

    // find clicked point
    tempArticulation = -1;
    for(i in articulations)
    {
        xfine = false;
        yfine = false;

        c = articulations[i];
        if (c.pos[0] - c.radius < x && c.pos[0] + c.radius > x) {
            xfine = true;
        }
        if (c.pos[1] - c.radius < y && c.pos[1] + c.radius > y) {
            yfine = true;
        }

        if (xfine && yfine){
            tempArticulation = c.id;
            break;
        }
    }

    selectedArticulation = tempArticulation;
}

function update()
{
    clearCanvas();

    for(i in articulations)
    {
        // TODO:ajout du dessin des articulations
        articulations[i].drawArticulation(ctx);
    }

    window.requestAnimationFrame(update);
}

function test()
{
    myTest = new Articulation();
    myTest.pos=[175,175];

    articulations.push(myTest);

    myTest = new Articulation();
    myTest.pos=[200,200];

    articulations.push(myTest);
}

function Articulation()
{
    this.id = lastArticulationId
    lastArticulationId++;
    this.pos = [175,175];
    this.rotation = 0;
    this.parent = null;
    this.enfants = [];

    this.radius = 5;
    var color = 'Cyan';
    var selectedColor = 'Red';

    this.getPosition = function()
    {
        if (parent == null)
        {
            return this.pos;
        }else
        {
            return [parent.pos[0] + this.pos[0], parent.pos[1] + this.pos[1]];
        }
    }
    this.drawArticulation = function(ctx)
    {
        ctx.beginPath();
        ctx.strokeStyle='Black';
        ctx.lineWidth=3;
        if (selectedArticulation == this.id)
        {
            ctx.fillStyle=selectedColor;
        }else
        {
            ctx.fillStyle=color;
        }

        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, (2*Math.PI));
        ctx.stroke();
        ctx.fill();
    }
}
