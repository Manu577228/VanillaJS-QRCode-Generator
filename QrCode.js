const input = document.querySelector("input");
const qrImage = document.querySelector("img");
const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");

generateBtn.addEventListener("click", () => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200*200&data=${input.value}`;
    console.log(qrCode);
    qrImage.src = qrCode;
})

generateBtn.addEventListener("click", async () => {
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
})
