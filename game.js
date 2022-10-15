function init() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#F0DB4F';
    ctx.strokeStyle = 'red';
    ctx.fillRect(50, 50, 150, 100);
    var test = new Image();
    test.onload = () => {
        console.log("jgduf");
        ctx.drawImage(test, 0, 0);
    };
    test.src = "devil-bayer.png";
}

document.addEventListener("DOMContentLoaded", init, false);
