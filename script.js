const scenes = [...document.querySelectorAll('.scene')];
const envelope = document.getElementById('envelope');
const openEnvelope = document.getElementById('openEnvelope');
const koalaButton = document.getElementById('koalaButton');
const againButton = document.getElementById('againButton');
let busy = false;
function showScene(id) {
  scenes.forEach(scene => scene.classList.toggle('active', scene.id === id));
  window.scrollTo({top: 0, behavior: 'smooth'});
}
openEnvelope.addEventListener('click', () => {
  if (busy) return;
  busy = true;
  envelope.classList.add('opened');
  openEnvelope.animate([{transform:'scale(1)'},{transform:'scale(1.035) rotate(-1deg)'},{transform:'scale(1)'}],{duration:650,easing:'ease-out'});
  setTimeout(() => { showScene('scene-reveal'); busy = false; }, 650);
});
function openFullLetter() {
  const koala = koalaButton.querySelector('.koala-img');
  koala.animate([{transform:'scale(1)'},{transform:'scale(1.15) rotate(5deg)'},{transform:'scale(.8) translateY(-25px)',opacity:0}],{duration:450,easing:'ease-in'});
  setTimeout(() => showScene('scene-letter'), 280);
}
koalaButton.addEventListener('click', openFullLetter);
againButton.addEventListener('click', () => {
  envelope.classList.remove('opened');
  showScene('scene-envelope');
});
// Floating petals and little stars, created locally with JavaScript (no external library).
const petalField = document.getElementById('petalField');
const sparkleField = document.getElementById('sparkles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('i'); p.className = 'petal';
  p.style.left = `${Math.random()*100}%`;
  p.style.animationDuration = `${9 + Math.random()*12}s`;
  p.style.animationDelay = `${-Math.random()*18}s`;
  p.style.opacity = `${.25 + Math.random()*.6}`;
  p.style.transform = `scale(${.55 + Math.random()*.8})`;
  petalField.appendChild(p);
}
for (let i = 0; i < 15; i++) {
  const s = document.createElement('span'); s.className = 'spark';
  s.textContent = Math.random() > .5 ? '✦' : '✧';
  s.style.left = `${Math.random()*100}%`;
  s.style.animationDuration = `${12 + Math.random()*14}s`;
  s.style.animationDelay = `${-Math.random()*20}s`;
  s.style.fontSize = `${9 + Math.random()*9}px`;
  sparkleField.appendChild(s);
}
