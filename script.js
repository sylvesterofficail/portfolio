/* Sylvester Edidiong Emmanuel — Portfolio */
const PROJECTS = [
  { f:1, cat:'Business software', icon:'gear', org:'Energy Commission of Nigeria (NYSC)', title:'ECN-SORMS', long:'ECN Smart Operations & Resource Management Software',
    desc:'All-in-one platform I am building for the Energy Commission of Nigeria. It covers HR, asset management, document management, attendance, clinic management, KPI tracking and more in one system.',
    tags:['PHP','MySQL','Enterprise architecture'], bg:'linear-gradient(135deg,#0f5132,#14532d 45%,#0b3d24)' },
  { f:1, cat:'Platforms', icon:'home', org:'GidaHaven, co-founder', title:'GidaHaven', long:'GidaHaven: trusted homes across Africa', link:'https://gidahaven.com',
    desc:'Property platform for Africa, launching in Abuja and then expanding across Nigeria. It has map and area search, verified agents, reviews, photo and video listings, chat matching and free listings for agents.',
    tags:['Web platform','Maps','PropTech'], bg:'linear-gradient(135deg,#1d4ed8,#1e3a8a 55%,#172554)' },
  { f:1, cat:'AI', icon:'bot', org:'Acies Africa', title:'AI Chatbot', long:'AI customer support chatbot',
    desc:'A chatbot that answers customer questions around the clock using a business\'s own information, and hands over to a human when it can\'t help.',
    tags:['Python','NLP','AI'], bg:'linear-gradient(135deg,#0f766e,#115e59 55%,#042f2e)' },
  { f:1, cat:'Business software', icon:'users', org:'Acies Africa', title:'HR Management Software', long:'HR Management Software',
    desc:'Employee records, payroll processing, leave and performance tracking for growing teams, in one place instead of spreadsheets.',
    tags:['PHP','MySQL'], bg:'linear-gradient(135deg,#9a3412,#7c2d12 55%,#431407)' },
  { f:1, cat:'Business software', icon:'receipt', org:'Acies Africa', title:'Cloud POS Software', long:'Cloud Point of Sale (POS) Software',
    desc:'Cloud-based sales and transaction system for retail shops, with stock updates and real-time sales reports from any device.',
    tags:['Python','Django'], bg:'linear-gradient(135deg,#4338ca,#3730a3 55%,#1e1b4b)' },
  { f:1, cat:'Business software', icon:'hospital', org:'Acies Africa', title:'Hospital Management System', long:'Hospital Management System',
    desc:'Patient records, appointments, pharmacy, lab results, multi-role billing and admin reporting dashboards.',
    tags:['CodeIgniter','PHP','MySQL','Bootstrap'], bg:'linear-gradient(135deg,#0e7490,#155e75 55%,#083344)' },
  { f:1, cat:'Platforms', icon:'ticket', org:'Acies Africa', title:'Events Ticketing & Management', long:'Events Ticketing & Management System',
    desc:'QR-code tickets, event dashboards, attendee check-in and payment integration for organisers.',
    tags:['React.js','Node.js','MongoDB'], bg:'linear-gradient(135deg,#7c3aed,#5b21b6 55%,#2e1065)' },
  { f:1, cat:'AI', icon:'face', org:'Final-year project, Topfaith University', title:'Face Recognition Attendance', long:'Face Recognition Attendance System',
    desc:'CNN-based computer vision system that recognises students and staff and logs attendance in real time, with no manual sign-in.',
    tags:['Python','Django','TensorFlow','CNN'], bg:'linear-gradient(135deg,#be123c,#9f1239 55%,#4c0519)' },
  { cat:'Business software', icon:'bed', org:'Swavy Global', title:'Hotel Management System',
    desc:'Room reservations with live availability, check-in and check-out, housekeeping and booking automation.', tags:['CodeIgniter','PHP','MySQL'] },
  { cat:'Business software', icon:'cap', org:'Acies Africa', title:'School Management Software',
    desc:'Student enrolment, timetables, results and staff management for schools.', tags:['React.js','Node.js','MongoDB'] },
  { cat:'Business software', icon:'pill', org:'Acies Africa', title:'Inventory & Pharmacy Management',
    desc:'Stock tracking, sales and reports for retail and pharmacies, with expiry alerts and supplier records.', tags:['CodeIgniter','MySQL'] },
  { cat:'Business software', icon:'utensils', org:'Acies Africa', title:'Restaurant Management Software',
    desc:'Order tracking, billing and kitchen-to-checkout workflow for restaurants.', tags:['PHP','MySQL','JavaScript'] },
  { cat:'Business software', icon:'building', org:'Acies Africa', title:'Real Estate CRM',
    desc:'Listings, agent dashboards and client enquiry tracking for property businesses.', tags:['CodeIgniter','Bootstrap'] },
  { cat:'Business software', icon:'drill', org:'Unitech Drilling Company', title:'Mud Motor Tracking System',
    desc:'Tracks drilling equipment performance and maintenance, and generates weekly and monthly reports automatically.', tags:['PHP','SQL','JavaScript'] },
  { cat:'Infrastructure', icon:'cctv', org:'Acies Africa', title:'CCTV & Camera Installations',
    desc:'Security camera systems for homes, offices and estates, with recording, remote phone viewing and maintenance.', tags:['CCTV','IP cameras','Networking'] },
  { cat:'Websites', icon:'bag', org:'Swavy Global', title:'FoodExpress.ng',
    desc:'Food ordering website. Improved the frontend and built and tested features across releases.', tags:['PHP','CodeIgniter','JavaScript'] },
  { cat:'Websites', icon:'book', org:'Swavy Global', title:'Journal Publishing Website',
    desc:'Website for submitting, reviewing and publishing academic journal articles.', tags:['HTML','CSS','JavaScript'] },
  { cat:'Websites', icon:'globe', org:'Acies Africa', title:'Acies Africa Technologies Website',
    desc:'Company website presenting Acies services, products and contact channels.', tags:['HTML','CSS','JavaScript'] }
];

document.addEventListener('DOMContentLoaded', () => {
  theme(); nav(); album(); projectList(); deck(); parallax(); cheer(); contact(); modal();
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});

function store(k, v){ try{ if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); }catch(e){ return null; } }
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function toast(msg){ const t = document.getElementById('toast'); t.textContent = msg; t.hidden = false; clearTimeout(t._h); t._h = setTimeout(() => t.hidden = true, 1800); }

/* Theme: respects system setting, toggle overrides it */
function theme(){
  const root = document.documentElement, mq = matchMedia('(prefers-color-scheme: dark)');
  const saved = store('theme'); if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  const isDark = () => root.getAttribute('data-theme') ? root.getAttribute('data-theme') === 'dark' : mq.matches;
  const sync = () => root.classList.toggle('dark', isDark());
  sync(); mq.addEventListener && mq.addEventListener('change', sync);
  document.getElementById('themeBtn').addEventListener('click', e => {
    const next = isDark() ? 'light' : 'dark';
    const apply = () => { root.setAttribute('data-theme', next); sync(); };
    store('theme', next);
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply();
    const x = e.clientX || innerWidth - 60, y = e.clientY || 40;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      root.animate({ clipPath:[`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration:550, easing:'cubic-bezier(.2,.8,.2,1)', pseudoElement:'::view-transition-new(root)' });
    }).catch(()=>{});
  });
}

function nav(){
  const links = document.getElementById('navLinks'), btn = document.getElementById('menuBtn');
  btn.addEventListener('click', e => { e.stopPropagation(); const o = links.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  document.addEventListener('click', e => { if (!links.contains(e.target)) links.classList.remove('open'); });
  const items = [...links.querySelectorAll('a')];
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) items.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin:'-45% 0px -50% 0px' });
  items.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
}

function album(){
  const featured = PROJECTS.filter(p => p.f);
  const wrap = document.getElementById('album'), dotsEl = document.getElementById('albumDots');
  const tEl = document.getElementById('workTitle'), dEl = document.getElementById('workDesc'), tagEl = document.getElementById('workTags');
  const n = featured.length; let active = 0;
  const cards = featured.map((p, i) => {
    const c = document.createElement('div');
    c.className = 'album-card'; c.style.background = p.bg; c.setAttribute('role','button'); c.tabIndex = 0;
    c.setAttribute('aria-label', 'Show ' + p.title);
    c.innerHTML = `<div class="mock-bar"><i></i><i></i><i></i></div><div class="mock-body"><div class="mock-lines"><span></span><span></span><span></span></div><div class="mock-emoji"><svg class="ic"><use href="#i-${p.icon}"/></svg></div><div><div class="mock-label">${esc(p.org)}</div><div class="mock-title">${esc(p.long || p.title)}</div></div></div>`;
    const pick = () => { active = i; render(); };
    c.addEventListener('click', pick);
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
    wrap.appendChild(c);
    const d = document.createElement('button'); d.setAttribute('aria-label', p.title); d.addEventListener('click', pick); dotsEl.appendChild(d);
    return c;
  });
  const dots = [...dotsEl.children];
  function render(){
    const w = innerWidth, step = w > 1024 ? 270 : w > 768 ? 200 : 115;
    cards.forEach((c, i) => {
      let diff = i - active; if (diff > n / 2) diff -= n; if (diff < -n / 2) diff += n;
      const a = Math.abs(diff);
      const x = Math.sign(diff) * (a === 0 ? 0 : a === 1 ? step : step * 1.75 + (a - 2) * 60);
      const s = [1, .8, .64, .5][Math.min(a, 3)];
      c.style.transform = `translate(-50%,-50%) translateX(${x}px) scale(${s}) rotateY(${-Math.sign(diff) * Math.min(a * 8, 20)}deg)`;
      c.style.zIndex = 10 - a; c.style.opacity = a > 2 ? 0 : a === 2 ? .4 : 1;
      c.style.pointerEvents = a > 2 ? 'none' : 'auto';
      c.classList.toggle('center', a === 0);
    });
    dots.forEach((d, i) => d.classList.toggle('on', i === active));
    const p = featured[active];
    tEl.style.opacity = dEl.style.opacity = 0;
    setTimeout(() => {
      tEl.textContent = p.long || p.title; dEl.textContent = p.desc;
      tagEl.innerHTML = p.tags.map(t => `<i>${esc(t)}</i>`).join('');
      tEl.style.opacity = dEl.style.opacity = 1;
    }, 150);
  }
  const go = d => { active = (active + d + n) % n; render(); };
  addEventListener('keydown', e => {
    if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
    const r = document.getElementById('work').getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); }
  });
  let sx = 0;
  wrap.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive:true });
  wrap.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); }, { passive:true });
  let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(render, 100); });
  render();
}

function projectList(){
  const list = document.getElementById('projList'), filters = document.getElementById('filters'), count = document.getElementById('projCount');
  const cats = ['All', ...new Set(PROJECTS.map(p => p.cat))];
  let current = 'All';
  cats.forEach(c => {
    const b = document.createElement('button'); b.textContent = c; b.setAttribute('aria-pressed', c === current);
    b.addEventListener('click', () => { current = c; filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b)); draw(); });
    filters.appendChild(b);
  });
  function draw(){
    const items = PROJECTS.filter(p => current === 'All' || p.cat === current);
    count.textContent = items.length;
    list.innerHTML = items.map(p => `<article class="proj">
      <div class="proj-top"><span class="proj-ico" style="background:${p.bg || 'linear-gradient(135deg,#334155,#0f172a)'}"><svg class="ic"><use href="#i-${p.icon}"/></svg></span>
      <div><h4>${esc(p.long || p.title)}</h4><div class="proj-org">${esc(p.org)}</div></div></div>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map(t => `<i>${esc(t)}</i>`).join('')}</div>
      ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener">Visit site <svg class="ic sm"><use href="#i-arrow"/></svg></a>` : ''}</article>`).join('');
  }
  draw();
}

function deck(){
  const el = document.getElementById('deck'); if (!el) return;
  let cards = [...el.children];
  const pos = [['0px','0px','-6deg',1,1],['6px','10px','8deg',.95,.75],['22px','20px','-12deg',.9,.5],['30px','26px','14deg',.86,0]];
  const apply = () => cards.forEach((c, i) => { const [x,y,r,s,o] = pos[i] || pos[3]; c.style.transform = `translate(${x},${y}) rotate(${r}) scale(${s})`; c.style.opacity = o; c.style.zIndex = 10 - i; });
  el.addEventListener('click', () => { const f = cards[0]; f.classList.add('toss'); setTimeout(() => { f.classList.remove('toss'); cards.push(cards.shift()); apply(); }, 300); });
  apply();
}

function parallax(){
  const hero = document.getElementById('hero'), p = hero.querySelector('.portrait');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  hero.addEventListener('mousemove', e => { const x = (e.clientX / innerWidth - .5) * 8, y = (e.clientY / innerHeight - .5) * -8; p.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`; });
  hero.addEventListener('mouseleave', () => p.style.transform = '');
}

function cheer(){
  const btn = document.getElementById('cheer'), out = document.getElementById('cheerCount');
  let c = parseInt(store('cheers') || '128', 10); out.textContent = c;
  btn.addEventListener('click', () => {
    out.textContent = ++c; store('cheers', String(c));
    const r = btn.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
      const s = document.createElement('span'); s.className = 'particle';
      s.textContent = '+1';
      s.style.left = r.left + r.width / 2 + (Math.random() * 30 - 15) + 'px'; s.style.top = r.top + 'px';
      s.style.setProperty('--dx', (Math.random() - .5) * 60 + 'px');
      document.body.appendChild(s); setTimeout(() => s.remove(), 1100);
    }
  });
}

function contact(){
  document.querySelectorAll('.copy').forEach(b => b.addEventListener('click', () => {
    const text = b.dataset.copy;
    const done = () => toast('Copied ' + text);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallback(b));
    else fallback(b);
  }));
  function fallback(b){
    const v = b.parentElement.querySelector('.c-body b'); const r = document.createRange(); r.selectNodeContents(v);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast('Selected. Press Ctrl+C to copy');
  }
  const f = document.getElementById('msgForm'), wa = document.getElementById('sendWa'), mail = document.getElementById('sendMail');
  const name = document.getElementById('fName'), topic = document.getElementById('fTopic'), msg = document.getElementById('fMsg');
  function update(){
    const n = name.value.trim(), m = msg.value.trim();
    const text = `Hi Sylvester${n ? ", I'm " + n : ''}.\nI need: ${topic.value}\n\n${m}`;
    wa.href = 'https://wa.me/2348143972347?text=' + encodeURIComponent(text);
    mail.href = `mailto:sylvesterofficail20@gmail.com?subject=${encodeURIComponent(topic.value + (n ? ' from ' + n : ''))}&body=${encodeURIComponent(text)}`;
  }
  f.addEventListener('input', update); f.addEventListener('change', update);
  f.addEventListener('submit', e => e.preventDefault());
  update();
}

function modal(){
  const m = document.getElementById('modal');
  const open = () => { m.classList.add('open'); setTimeout(() => document.getElementById('fName').focus(), 100); };
  const close = () => m.classList.remove('open');
  document.getElementById('openModal').addEventListener('click', open);
  document.getElementById('closeModal').addEventListener('click', close);
  m.addEventListener('click', e => { if (e.target === m) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  m.querySelectorAll('.modal-actions a').forEach(a => a.addEventListener('click', () => setTimeout(close, 300)));
}
