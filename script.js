// ===== PAGE 1 =====
const maafBtn = document.getElementById("maafBtn");
const envelopeContainer = document.querySelector(".envelope-container");
const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const photos = document.querySelectorAll(".photo");
const nextBtn = document.getElementById("nextBtn");

if (maafBtn) {
  maafBtn.onclick = () => {
    maafBtn.classList.add("hidden");
    envelopeContainer.classList.remove("hidden");
  };
}

if (envelope) {
  envelope.onclick = () => {
    envelope.classList.add("open");
    letter.classList.add("show");

    photos.forEach(p => p.classList.add("show"));

    setTimeout(() => {
      nextBtn.classList.remove("hidden");
    }, 1200);
  };
}

if (nextBtn) {
  nextBtn.onclick = () => {
    window.location.href = "second.html";
  };
}

// ===== PAGE 2 CONFETTI =====
const canvas = document.getElementById("confetti");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,70%)`;
      ctx.fill();
      c.y += c.d;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(draw);
  }

  draw();
}
