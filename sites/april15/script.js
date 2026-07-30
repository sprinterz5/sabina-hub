const pageShell = document.querySelector(".page-shell");
const playMomentButton = document.getElementById("playMoment");
const letterCard = document.getElementById("letterCard");
const counter = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
};

function getNextCelebrationDate(now) {
  const currentYear = now.getFullYear();
  const celebration = new Date(currentYear, 3, 15, 0, 0, 0, 0);

  if (now > celebration) {
    return new Date(currentYear + 1, 3, 15, 0, 0, 0, 0);
  }

  return celebration;
}

function pad(value, length = 2) {
  return String(value).padStart(length, "0");
}

function updateCountdown() {
  const now = new Date();
  const nextCelebration = getNextCelebrationDate(now);
  const diff = nextCelebration - now;

  if (diff <= 0) {
    counter.days.textContent = "000";
    counter.hours.textContent = "00";
    counter.minutes.textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  counter.days.textContent = pad(days, 3);
  counter.hours.textContent = pad(hours);
  counter.minutes.textContent = pad(minutes);
}

function openLetter() {
  letterCard.classList.add("is-open");
  letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

playMomentButton?.addEventListener("click", () => {
  pageShell?.classList.remove("is-celebrating");

  window.requestAnimationFrame(() => {
    pageShell?.classList.add("is-celebrating");
  });

  window.setTimeout(openLetter, 350);
});

letterCard?.addEventListener("click", () => {
  letterCard.classList.toggle("is-open");
});

updateCountdown();
window.setInterval(updateCountdown, 30000);
