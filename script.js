const red = document.querySelector('#bg-color-1');
const orange = document.querySelector('#bg-color-2');
const pink = document.querySelector('#bg-color-3');
const yellow = document.querySelector('#bg-color-4');
const green = document.querySelector('#bg-color-5');
const blue = document.querySelector('#bg-color-6');
const purple = document.querySelector('#bg-color-7');
const black = document.querySelector('#bg-color-8');

const glider = document.querySelector('#glider');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const pen = document.querySelector('#pen');
const sizePen = document.querySelector('#size-pen');

const canvas = document.querySelector('#board-field');
var ctx = canvas.getContext("2d");
var isDrawing = false;
var mode = "pen";
var oldX = 0;
var oldY = 0;
var margin = 87;
red.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 0) + "px";
    ctx.strokeStyle = "red";
    ctx.beginPath();
});
orange.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 1) + "px";
    ctx.strokeStyle = "orange";
    ctx.beginPath();
});
pink.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 2) + "px";
    ctx.strokeStyle = "pink";
    ctx.beginPath();
});
yellow.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 3) + "px";
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
});
green.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 4) + "px";
    ctx.strokeStyle = "green";
    ctx.beginPath();
});
blue.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 5) + "px";
    ctx.strokeStyle = "blue";
    ctx.beginPath();
});
purple.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 6) + "px";
    ctx.strokeStyle = "purple";
    ctx.beginPath();
});
black.addEventListener("click", () => {
    glider.style.marginLeft = (margin * 7) + "px";
    ctx.strokeStyle = "black";
    ctx.beginPath();
});

//mấu chốt vấn đề là lấy kích cỡ của view window để gọi lại tỉ lệ sao cho nó bằng vs tỉ lệ canvas đã định trong css
canvas.height = window.innerHeight * 70 / 100;
canvas.width = window.innerWidth * 90 / 100;

canvas.addEventListener("mousedown", e => {
    isDrawing = true;
    oldX = e.offsetX;
    oldY = e.offsetY;
});

canvas.addEventListener("mouseout", e => {
    isDrawing = false;
});
canvas.addEventListener("mouseup", e => {
    isDrawing = false;
});

canvas.addEventListener("mousemove", e => {
    if (!isDrawing) {
        return false;
    }
    if (mode == "pen") {
        ctx.globalCompositeOperation = "source-over";
        ctx.lineWidth = sizePen.value;
        ctx.moveTo(oldX, oldY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

    }
    if (mode == "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.arc(oldX, oldY, sizePen.value, 0, Math.PI * 2, false);
        ctx.fill();
    }
    oldX = e.offsetX;
    oldY = e.offsetY;

});
///////////////////////////////////////////////////////////////////////////////////////////////
pen.addEventListener("click", () => {
    mode = "pen";
});
eraser.addEventListener("click", () => {
    mode = "eraser";
});
clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
});

//---------------------------------------------
const darkenCanvas = document.querySelector('#drop-menu-darken');
darkenCanvas.addEventListener("click", () => {
    canvas.style.background = "#A8A8A8";
});

const classicCanvas = document.querySelector('#drop-menu-classic');
classicCanvas.addEventListener("click", () => {
    canvas.style.background = "#3CB371";
});
/////////////////////////////////////////////////////////////////////////////////////