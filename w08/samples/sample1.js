
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

function saveDrawing(canva) {

    window.open(canva.toDataURL("image/png"));
}

var canvas = document.getElementById("demo5");
drawCircle(canvas);

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing(canvas), false);