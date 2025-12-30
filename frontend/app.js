const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("preview").onclick = () => {
  const t = document.getElementById("template").value;
  const img = new Image();
  img.src = `assets/template${t}.png`;

  img.onload = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.font = "36px Arial";
    ctx.fillText(document.getElementById("participant").value, 400, 420);
    ctx.fillText(document.getElementById("course").value, 400, 500);
    ctx.fillText("Hours: " + document.getElementById("hours").value, 400, 580);
    ctx.fillText(document.getElementById("issuer").value, 400, 660);
  };
};
