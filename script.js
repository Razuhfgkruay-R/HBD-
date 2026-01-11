const envelope = document.getElementById("envelope");
const cakeBtn = document.getElementById("cakeBtn");
const cake = document.getElementById("cake");
const music = document.getElementById("birthdayMusic");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // play musik (aman karena klik user)
  music.volume = 0.4;
  music.play();

  startConfetti();
});

cakeBtn.addEventListener("click", () => {
  cake.classList.remove("hidden");
});

// CONFETTI
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    dy: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360},100%,70%)`
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.dy;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(animate);
  }

  animate();
}
