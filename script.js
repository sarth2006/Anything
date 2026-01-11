const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const subtext1 = document.getElementById("subtext1");
const subtext2 = document.getElementById("subtext2");


yesBtn.addEventListener("click", () => {
    message.innerText = "I'm glad you clickeddddd💖";
    subtext1.innerText = "Just wanted to say you’re really speciallll ✨";
    subtext2.style.display = "none";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    createHearts();
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function createHearts(){
    for(let i = 0; i < 15; i++){
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100+ "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "24px";
        heart.style.animation = "float 3s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }

}

