window.addEventListener("DOMContentLoaded", () => {
  const hearts = ["💖", "💕", "💘", "💗"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 800);

  document.addEventListener("mousemove", e => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
  });
});
