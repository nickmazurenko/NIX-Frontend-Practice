function Triangle(x = 0, y = 0, width = 100, height = 100, color = "red") {
  let canvas = document.createElement("canvas");

  canvas.id = "triangle";
  canvas.width = width * 1.5;
  canvas.height = height * 1.5;

  let body = document.body;
  body.appendChild(canvas);

  let context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + width / 2, y + height);
  context.lineTo(x - width / 2, y + height);
  context.closePath();
  context.fillStyle = color;
  context.fill();
}

function Square(x = 0, y = 0, width = 100, height = 100, color = "red") {
  let canvas = document.createElement("canvas");

  canvas.id = "square";
  canvas.width = width * 1.5;
  canvas.height = height * 1.5;

  let body = document.body;
  body.appendChild(canvas);

  let context = canvas.getContext("2d");
  context.fillStyle = color;
  context.fillRect(x, y, width, height);

};

// Creating and positioning figures

let triangle = new Triangle(200, 0, 200, 200, 'blue');
let square = new Square(0, 0, 200, 200, 'red');




