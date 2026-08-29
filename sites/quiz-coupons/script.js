/* ── состояние между заходами ────────────────────────────────────────
   best — лучший результат: талоны, открытые однажды, назад не забираются.
   used — индексы уже потраченных талонов.
   ─────────────────────────────────────────────────────────────────── */
const KEY_BEST = 'sq-best', KEY_USED = 'sq-used';
const store = {
  get best() { return +(localStorage.getItem(KEY_BEST) || 0); },
  set best(v) { localStorage.setItem(KEY_BEST, Math.max(v, this.best)); },
  get used() { try { return JSON.parse(localStorage.getItem(KEY_USED)) || []; } catch (e) { return []; } },
  use(i) { const u = this.used; if (!u.includes(i)) { u.push(i); localStorage.setItem(KEY_USED, JSON.stringify(u)); } },
};

const $ = id => document.getElementById(id);
function show(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
  $('s-' + name).classList.add('on');
  scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── квиз ── */
let idx = 0, score = 0, order = [];

// варианты тасуются при каждом заходе, чтобы правильный не выдавал себя позицией
function shuffled(n) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  idx = 0; score = 0;
  order = QUESTIONS.map(q => shuffled(q.opts.length));
  show('quiz');
  render();
}

function render() {
  const q = QUESTIONS[idx];
  $('m-num').textContent = `${idx + 1} / ${QUESTIONS.length}`;
  $('m-bar').style.width = `${(idx / QUESTIONS.length) * 100}%`;
  $('m-score').textContent = `${score} ★`;
  $('q-text').textContent = q.q;
  $('q-note').classList.remove('on');
  $('next').classList.remove('on');
  $('next').textContent = idx === QUESTIONS.length - 1 ? 'узнать результат →' : 'дальше →';

  const box = $('q-opts');
  box.innerHTML = '';
  for (const oi of order[idx]) {
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = q.opts[oi];
    b.addEventListener('click', () => answer(oi, b), { once: true });
    box.appendChild(b);
  }
}

function answer(picked, btn) {
  const q = QUESTIONS[idx];
  const right = picked === q.a;
  if (right) score++;

  [...$('q-opts').children].forEach((el, pos) => {
    el.disabled = true;
    if (order[idx][pos] === q.a) el.classList.add('right');
    else if (el === btn) el.classList.add('wrong');
  });

  $('m-score').textContent = `${score} ★`;
  $('m-bar').style.width = `${((idx + 1) / QUESTIONS.length) * 100}%`;
  $('q-note').textContent = (right ? '' : `Правильно — «${q.opts[q.a]}». `) + q.note;
  $('q-note').classList.add('on');
  $('next').classList.add('on');
}

$('next').addEventListener('click', () => {
  if (++idx < QUESTIONS.length) render();
  else finish();
});

function finish() {
  store.best = score;
  const v = VERDICTS.find(v => score >= v.min);
  $('r-num').textContent = score;
  $('r-title').textContent = v.t;
  $('r-sub').textContent = v.s;
  show('result');
}

/* ── книжка талонов ── */
function renderBook() {
  const open = Math.min(store.best, COUPONS.length);
  const used = store.used;
  const left = COUPONS.slice(0, open).filter((_, i) => !used.includes(i)).length;

  $('b-sub').innerHTML = open === 0
    ? 'Пока ни одного талона. Пройди квиз — они открываются за правильные ответы.'
    : `Открыто <b>${open}</b> из ${COUPONS.length}. Не потрачено — <b>${left}</b>.`;

  $('b-list').innerHTML = '';
  COUPONS.forEach((c, i) => {
    const unlocked = i < open, spent = used.includes(i);
    const el = document.createElement('div');
    el.className = 'coupon ' + (!unlocked ? 'locked' : spent ? 'used' : 'open');
    el.innerHTML = `
      <div class="stub">
        <div class="ic">${unlocked ? c.ic : '✦'}</div>
        <div class="n">№ ${String(i + 1).padStart(2, '0')}</div>
      </div>
      <div class="body">
        <div class="t">${unlocked ? c.t : 'закрытый талон'}</div>
        <div class="s">${unlocked ? c.s : 'ответь правильно ещё на один вопрос'}</div>
      </div>`;

    if (unlocked && !spent) {
      const b = document.createElement('button');
      b.className = 'use';
      b.textContent = 'использовать';
      b.addEventListener('click', () => {
        if (!confirm(`Использовать талон «${c.t}»? Он сгорит после этого.`)) return;
        store.use(i);
        renderBook();
      });
      el.querySelector('.body').appendChild(b);
    }
    if (spent) {
      const s = document.createElement('div');
      s.className = 'stamp';
      s.textContent = 'использован';
      el.querySelector('.body').appendChild(s);
    }
    $('b-list').appendChild(el);
  });
}

/* ── навигация ── */
$('start').addEventListener('click', startQuiz);
$('retry').addEventListener('click', startQuiz);
$('to-book').addEventListener('click', () => { renderBook(); show('book'); });
$('skip-to-book').addEventListener('click', () => { renderBook(); show('book'); });
if (store.best > 0) $('skip-to-book').hidden = false; // вернулась — сразу к талонам

/* ── звёзды, как в хабе ── */
const cv = $('stars'), cx = cv.getContext('2d');
let stars = [];
function resize() {
  cv.width = innerWidth * devicePixelRatio;
  cv.height = innerHeight * devicePixelRatio;
  cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  stars = Array.from({ length: Math.min(120, innerWidth / 8) }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.2 + .3,
    p: Math.random() * Math.PI * 2,
    v: .008 + Math.random() * .02,
  }));
}
resize(); addEventListener('resize', resize);
(function loop() {
  cx.clearRect(0, 0, innerWidth, innerHeight);
  for (const s of stars) {
    s.p += s.v;
    const a = .2 + .5 * (Math.sin(s.p) * .5 + .5);
    cx.beginPath();
    cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    cx.fillStyle = `rgba(232,230,240,${a})`;
    cx.fill();
  }
  requestAnimationFrame(loop);
})();
