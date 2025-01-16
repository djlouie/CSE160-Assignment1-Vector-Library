// DrawRectangle.js
function main() {
    // retrieve <canvas> element                                  <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // get the rendering context for 2DCG                          <- (2)
    var ctx = canvas.getContext('2d');

    // color canvas black
    ctx.fillstyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // raw Vector function takes in a vector (Vector3) and a color (str)
    function drawvector(v, color){

        // set color of line
        ctx.strokeStyle = color;

        // draw line
        ctx.beginPath();
        // origin is center of canvas
        ctx.moveTo(200, 200);
        // scale by 20 to make it more visible on the canvas
        ctx.lineTo(200 + (v.elements[0] * 20), (200 - v.elements[1] * 20));
        ctx.stroke();
    }

    function handleDrawEvent(){
        // clear canvas
        ctx.fillstyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // get the inputs for x and y
        let x1 = document.getElementById('x1');
        let y1 = document.getElementById('y1');
        let v1 = new Vector3({0: x1.value, 1: y1.value, 2: 0});
        drawvector(v1, 'red');
        
        // get the inputs for x and y
        let x2 = document.getElementById('x2');
        let y2 = document.getElementById('y2');
        let v2 = new Vector3({0: x2.value, 1: y2.value, 2: 0});
        drawvector(v2, 'blue');

    }

    // get draw button by id
    let drawVectorButton = document.getElementById('drawVector');
    
    // call dunction on click
    drawVectorButton.onclick = handleDrawEvent;

    function handleDrawOperationEvent(){
        // clear canvas
        ctx.fillstyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // get the inputs for x and y
        let x1 = document.getElementById('x1');
        let y1 = document.getElementById('y1');
        let v1 = new Vector3({0: x1.value, 1: y1.value, 2: 0});
        drawvector(v1, 'red');
        
        // get the inputs for x and y
        let x2 = document.getElementById('x2');
        let y2 = document.getElementById('y2');
        let v2 = new Vector3({0: x2.value, 1: y2.value, 2: 0});
        drawvector(v2, 'blue');

        let operation = document.getElementById('operations');
        let scalar = document.getElementById('scalar');

        let v3;
        let v4;

        switch(operation.value){
            case 'Add':
                v3 = v1.add(v2)
                drawvector(v3, 'green');
                break;
            case 'Subtract':
                v3 = v1.sub(v2);
                drawvector(v3, 'green');
                break;
            case 'Multiply':
                v3 = v1.mul(scalar.value);
                v4 = v2.mul(scalar.value);
                drawvector(v3, 'green');
                drawvector(v4, 'green');
                break;
            case 'Divide':
                v3 = v1.div(scalar.value);
                v4 = v2.div(scalar.value);
                drawvector(v3, 'green');
                drawvector(v4, 'green');
                break;
            case 'Magnitude':
                let m1 = v1.magnitude();
                let m2 = v2.magnitude();
                console.log('Magnitude v1:', m1)
                console.log('Magnitude v2:', m2)
                break;
            case 'Normalize':
                v3 = v1.normalize(scalar.value);
                v4 = v2.normalize(scalar.value);
                drawvector(v3, 'green');
                drawvector(v4, 'green');
                break;
            case 'Area':
                cross = Vector3.cross(v1, v2)
                areaTriangle = cross.magnitude() / 2
                console.log('Area of the triangle:', areaTriangle)
                break;
            default:
                console.log('Invalid operation:', operation.value, typeof operation.value);
        }
    }

    // get draw button by id
    let drawOperationButton = document.getElementById('drawOperation');
    
    // call dunction on click
    drawOperationButton.onclick = handleDrawOperationEvent;

}