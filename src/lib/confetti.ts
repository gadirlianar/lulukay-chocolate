import confetti from "canvas-confetti";

export function fireLuxuryConfetti() {
  // Fire from left
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { x: 0.3, y: 0.6 },
    colors: ["#E8C9A0", "#3B1F0E", "#F2B5C0"],
    shapes: ["circle", "square"],
    gravity: 0.8,
    scalar: 1.1,
    drift: 0.5,
    ticks: 150,
    disableForReducedMotion: true,
  });

  // Fire from right with slight delay
  setTimeout(() => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x: 0.7, y: 0.6 },
      colors: ["#E8C9A0", "#3B1F0E", "#F2B5C0"],
      shapes: ["circle", "square"],
      gravity: 0.8,
      scalar: 1.1,
      drift: -0.5,
      ticks: 150,
      disableForReducedMotion: true,
    });
  }, 150);
}

export function handleConfettiClick(href: string) {
  fireLuxuryConfetti();
  setTimeout(() => {
    window.open(href, "_blank", "noopener,noreferrer");
  }, 600);
}
