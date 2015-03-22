var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');


// pozioma - płot
context.beginPath();
context.moveTo(0, 450);
context.lineTo(250, 450);
context.lineWidth =	3;
context.strokeStyle="brown";
context.stroke();

// pozioma - płot
context.beginPath();
context.moveTo(0, 500);
context.lineTo(250, 500);
context.lineWidth =	3;
context.strokeStyle="brown";
context.stroke();

// pionowa - sztacheta - 1
context.beginPath();
context.moveTo(50, 400);
context.lineTo(50, 550);
context.lineWidth =	3;
context.strokeStyle="brown";
context.stroke();

// pionowa - sztacheta - 2
context.beginPath();
context.moveTo(100, 400);
context.lineTo(100, 550);
context.lineWidth =	3;
context.strokeStyle="brown";
context.stroke();

// pionowa - sztacheta - 3
context.beginPath();
context.moveTo(150, 400);
context.lineTo(150, 550);
context.lineWidth =	3;
context.strokeStyle="brown";
context.stroke();

// pionowa - sztacheta - 4
context.beginPath();
context.moveTo(200, 400);
context.lineTo(200, 550);
context.lineWidth =	3;
context.strokeStyle="brown";
context.stroke();

// pionowa - ziemia
context.beginPath();
context.moveTo(0, 550);
context.lineTo(1200, 550);
context.lineWidth =	20;
context.strokeStyle="green";
context.stroke();

// dom
context.beginPath();
context.moveTo(251, 540);
context.lineTo(251, 350);
context.lineTo(700, 350);
context.lineTo(700, 540);
context.lineWidth =	5;
context.strokeStyle="black";
context.closePath();
context.stroke();
