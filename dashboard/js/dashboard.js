'use strict';

// === NAVIGATION ===
const initNav = () => {
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.main-content');
  const pageTitle = document.getElementById('pageTitle');

  const titles = {
    today: 'Hoy',
    progress: 'Progreso',
    training: 'Entrenamiento',
    nutrition: 'Nutrición',
    settings: 'Configuración'
  };

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      if (!view) return;

      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      views.forEach(v => v.classList.remove('active'));
      const target = document.getElementById(`view-${view}`);
      if (target) target.classList.add('active');

      if (pageTitle) pageTitle.textContent = titles[view] || 'Dashboard';

      if (view === 'progress') {
        setTimeout(drawProgressChart, 100);
      }
    });
  });
};

// === INTERACTIVE CHECKLIST ===
window.toggleCheckDash = (item) => {
  item.classList.toggle('done');
  syncProgress();
};

const syncProgress = () => {
  const items = document.querySelectorAll('#checklistToday .check-item');
  const done = document.querySelectorAll('#checklistToday .check-item.done');
  if (!items.length) return;

  const pct = Math.round((done.length / items.length) * 100);
  const bar = document.getElementById('checkBar');
  const label = document.getElementById('checkProgress');
  if (bar) bar.style.width = `${pct}%`;
  if (label) label.textContent = `${done.length} / ${items.length} — ${pct}%`;
};

// === WEIGHT CHART ===
const drawProgressChart = () => {
  const svg = document.getElementById('dashboardWeightChart');
  if (!svg || svg.dataset.drawn) return;
  svg.dataset.drawn = 'true';

  const weights = [68.2, 68.6, 69.1, 69.5, 70.0, 70.4, 70.9, 71.2];
  const target = 75.0;
  const W = 900;
  const H = 220;
  const padX = 24;
  const padY = 24;
  const chartW = W - padX * 2;
  const chartH = H - padY * 2;

  const minW = 67.5;
  const maxW = 76;
  const rangeW = maxW - minW;

  const toX = (i) => padX + (i / (weights.length - 1)) * chartW;
  const toY = (w) => padY + chartH - ((w - minW) / rangeW) * chartH;

  const points = weights.map((w, i) => [toX(i), toY(w)]);

  const smoothPath = (pts) => {
    let d = `M ${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const cpx = (pts[i - 1][0] + pts[i][0]) / 2;
      d += ` C ${cpx},${pts[i - 1][1]} ${cpx},${pts[i][1]} ${pts[i][0]},${pts[i][1]}`;
    }
    return d;
  };

  const linePath = smoothPath(points);
  const areaPath = linePath
    + ` L ${points[points.length - 1][0]},${H - padY}`
    + ` L ${points[0][0]},${H - padY} Z`;

  const ns = 'http://www.w3.org/2000/svg';

  // Defs
  const defs = document.createElementNS(ns, 'defs');
  const grad = document.createElementNS(ns, 'linearGradient');
  grad.setAttribute('id', 'dashChartGrad');
  grad.setAttribute('x1', '0'); grad.setAttribute('y1', '0');
  grad.setAttribute('x2', '0'); grad.setAttribute('y2', '1');
  const s1 = document.createElementNS(ns, 'stop');
  s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#39FF6A'); s1.setAttribute('stop-opacity', '0.3');
  const s2 = document.createElementNS(ns, 'stop');
  s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#39FF6A'); s2.setAttribute('stop-opacity', '0');
  grad.appendChild(s1); grad.appendChild(s2); defs.appendChild(grad); svg.appendChild(defs);

  // Horizontal grid lines
  for (let i = 0; i <= 4; i++) {
    const y = padY + (chartH / 4) * i;
    const gl = document.createElementNS(ns, 'line');
    gl.setAttribute('x1', padX); gl.setAttribute('x2', W - padX);
    gl.setAttribute('y1', y); gl.setAttribute('y2', y);
    gl.setAttribute('stroke', 'rgba(255,255,255,0.04)'); gl.setAttribute('stroke-width', '1');
    svg.appendChild(gl);
  }

  // Target line
  const targetY = toY(target);
  const tl = document.createElementNS(ns, 'line');
  tl.setAttribute('x1', padX); tl.setAttribute('x2', W - padX);
  tl.setAttribute('y1', targetY); tl.setAttribute('y2', targetY);
  tl.setAttribute('stroke', 'rgba(57,255,106,0.25)');
  tl.setAttribute('stroke-width', '1.5');
  tl.setAttribute('stroke-dasharray', '8,5');
  svg.appendChild(tl);

  const tText = document.createElementNS(ns, 'text');
  tText.setAttribute('x', W - padX + 4); tText.setAttribute('y', targetY + 4);
  tText.setAttribute('fill', 'rgba(57,255,106,0.4)');
  tText.setAttribute('font-size', '11'); tText.setAttribute('font-family', 'JetBrains Mono, monospace');
  tText.textContent = `${target} kg`;
  svg.appendChild(tText);

  // Area
  const area = document.createElementNS(ns, 'path');
  area.setAttribute('d', areaPath);
  area.setAttribute('fill', 'url(#dashChartGrad)');
  svg.appendChild(area);

  // Line
  const line = document.createElementNS(ns, 'path');
  line.setAttribute('d', linePath);
  line.setAttribute('fill', 'none');
  line.setAttribute('stroke', '#39FF6A');
  line.setAttribute('stroke-width', '2.5');
  line.setAttribute('stroke-linecap', 'round');

  const len = 1200;
  line.setAttribute('stroke-dasharray', len);
  line.setAttribute('stroke-dashoffset', len);
  line.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.16, 1, 0.3, 1)';
  svg.appendChild(line);

  // Tooltip
  const tooltip = document.createElement('div');
  Object.assign(tooltip.style, {
    position: 'absolute', background: '#161616', border: '1px solid #1E1E1E',
    borderRadius: '8px', padding: '6px 10px', fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px', color: '#39FF6A', pointerEvents: 'none', opacity: '0',
    transition: 'opacity 150ms ease', whiteSpace: 'nowrap', zIndex: '10'
  });
  svg.parentElement.style.position = 'relative';
  svg.parentElement.appendChild(tooltip);

  // Dots
  points.forEach(([x, y], i) => {
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', x); circle.setAttribute('cy', y);
    circle.setAttribute('r', '5');
    circle.setAttribute('fill', '#39FF6A');
    circle.setAttribute('stroke', '#0A0A0A'); circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'pointer';
    circle.style.opacity = '0';
    circle.style.transition = `opacity 200ms ease ${0.8 + i * 0.1}s`;

    circle.addEventListener('mouseenter', () => {
      const rect = svg.getBoundingClientRect();
      const pRect = svg.parentElement.getBoundingClientRect();
      const sx = (x / W) * rect.width;
      const sy = (y / H) * rect.height;
      tooltip.textContent = `S${i + 1}: ${weights[i]} kg`;
      tooltip.style.left = `${rect.left - pRect.left + sx - 40}px`;
      tooltip.style.top = `${rect.top - pRect.top + sy - 40}px`;
      tooltip.style.opacity = '1';
    });

    circle.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });
    svg.appendChild(circle);
    setTimeout(() => { circle.style.opacity = '1'; }, (0.8 + i * 0.1) * 1000);
  });

  requestAnimationFrame(() => {
    setTimeout(() => { line.style.strokeDashoffset = '0'; }, 50);
  });
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  // Animate initial progress bar
  const bar = document.getElementById('checkBar');
  if (bar) {
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 1s cubic-bezier(0.16, 1, 0.3, 1)';
      bar.style.width = '60%';
    }, 200);
  }
});
