'use strict';

// === DASHBOARD TABS ===
const initDashboardTabs = () => {
  const tabButtons = document.querySelectorAll('.dashboard-tab');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById(`tab-${target}`);
      if (panel) {
        panel.classList.add('active');
        if (target === 'progress') drawWeightChart();
      }
    });
  });
};

// === INTERACTIVE CHECKLIST ===
const toggleCheck = (item) => {
  item.classList.toggle('done');
  updateProgressBar();
};
window.toggleCheck = toggleCheck;

const updateProgressBar = () => {
  const items = document.querySelectorAll('#tab-today .check-item');
  const done = document.querySelectorAll('#tab-today .check-item.done');
  if (!items.length) return;

  const pct = Math.round((done.length / items.length) * 100);
  const bar = document.getElementById('heroProgressBar');
  if (bar) bar.style.width = `${pct}%`;

  const label = document.querySelector('#tab-today .progress-label span:last-child');
  if (label) label.textContent = `${done.length} de ${items.length} completados — ${pct}%`;
};

// === SVG WEIGHT CHART ===
const drawWeightChart = () => {
  const svg = document.getElementById('weightChart');
  if (!svg || svg.dataset.drawn) return;
  svg.dataset.drawn = 'true';

  const weights = [68.2, 68.6, 69.1, 69.5, 70.0, 70.4, 70.9, 71.2];
  const target = 75.0;
  const W = 800;
  const H = 200;
  const padX = 20;
  const padY = 20;
  const chartW = W - padX * 2;
  const chartH = H - padY * 2;

  const minW = Math.min(...weights) - 0.5;
  const maxW = Math.max(target, Math.max(...weights)) + 0.5;
  const rangeW = maxW - minW;

  const toX = (i) => padX + (i / (weights.length - 1)) * chartW;
  const toY = (w) => padY + chartH - ((w - minW) / rangeW) * chartH;

  // Build path
  const points = weights.map((w, i) => [toX(i), toY(w)]);

  // Smooth curve using bezier
  const smoothPath = (pts) => {
    let d = `M ${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const cpx = (pts[i - 1][0] + pts[i][0]) / 2;
      d += ` C ${cpx},${pts[i - 1][1]} ${cpx},${pts[i][1]} ${pts[i][0]},${pts[i][1]}`;
    }
    return d;
  };

  const linePath = smoothPath(points);

  // Area fill path (close bottom)
  const areaPath = linePath
    + ` L ${points[points.length - 1][0]},${H - padY}`
    + ` L ${points[0][0]},${H - padY} Z`;

  // Gradient def
  const ns = 'http://www.w3.org/2000/svg';
  const defs = document.createElementNS(ns, 'defs');

  const grad = document.createElementNS(ns, 'linearGradient');
  grad.setAttribute('id', 'chartGrad');
  grad.setAttribute('x1', '0'); grad.setAttribute('y1', '0');
  grad.setAttribute('x2', '0'); grad.setAttribute('y2', '1');

  const stop1 = document.createElementNS(ns, 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#39FF6A');
  stop1.setAttribute('stop-opacity', '0.25');

  const stop2 = document.createElementNS(ns, 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#39FF6A');
  stop2.setAttribute('stop-opacity', '0');

  grad.appendChild(stop1);
  grad.appendChild(stop2);
  defs.appendChild(grad);
  svg.appendChild(defs);

  // Grid lines (horizontal)
  for (let i = 0; i <= 4; i++) {
    const y = padY + (chartH / 4) * i;
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', padX);
    line.setAttribute('x2', W - padX);
    line.setAttribute('y1', y);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'rgba(255,255,255,0.04)');
    line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
  }

  // Target line (dashed)
  const targetY = toY(target);
  const targetLine = document.createElementNS(ns, 'line');
  targetLine.setAttribute('x1', padX);
  targetLine.setAttribute('x2', W - padX);
  targetLine.setAttribute('y1', targetY);
  targetLine.setAttribute('y2', targetY);
  targetLine.setAttribute('stroke', 'rgba(57,255,106,0.3)');
  targetLine.setAttribute('stroke-width', '1');
  targetLine.setAttribute('stroke-dasharray', '6,4');
  svg.appendChild(targetLine);

  // Target label
  const targetText = document.createElementNS(ns, 'text');
  targetText.setAttribute('x', W - padX + 4);
  targetText.setAttribute('y', targetY + 4);
  targetText.setAttribute('fill', 'rgba(57,255,106,0.5)');
  targetText.setAttribute('font-size', '10');
  targetText.setAttribute('font-family', 'JetBrains Mono, monospace');
  targetText.textContent = `${target}`;
  svg.appendChild(targetText);

  // Area fill
  const area = document.createElementNS(ns, 'path');
  area.setAttribute('d', areaPath);
  area.setAttribute('fill', 'url(#chartGrad)');
  svg.appendChild(area);

  // Main line
  const line = document.createElementNS(ns, 'path');
  line.setAttribute('d', linePath);
  line.setAttribute('fill', 'none');
  line.setAttribute('stroke', '#39FF6A');
  line.setAttribute('stroke-width', '2.5');
  line.setAttribute('stroke-linecap', 'round');
  line.setAttribute('stroke-linejoin', 'round');

  // Animate draw
  const length = line.getTotalLength ? line.getTotalLength() : 1000;
  line.setAttribute('stroke-dasharray', length);
  line.setAttribute('stroke-dashoffset', length);
  line.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
  svg.appendChild(line);

  // Points + tooltips
  const tooltip = document.createElement('div');
  tooltip.style.cssText = `
    position: absolute;
    background: #161616;
    border: 1px solid #1E1E1E;
    border-radius: 8px;
    padding: 6px 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: #39FF6A;
    pointer-events: none;
    opacity: 0;
    transition: opacity 150ms ease;
    white-space: nowrap;
    z-index: 10;
  `;
  svg.parentElement.style.position = 'relative';
  svg.parentElement.appendChild(tooltip);

  points.forEach(([x, y], i) => {
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '5');
    circle.setAttribute('fill', '#39FF6A');
    circle.setAttribute('stroke', '#0A0A0A');
    circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'pointer';
    circle.style.opacity = '0';
    circle.style.transition = `opacity 200ms ease ${0.8 + i * 0.08}s`;

    circle.addEventListener('mouseenter', (e) => {
      const rect = svg.getBoundingClientRect();
      const parentRect = svg.parentElement.getBoundingClientRect();
      const svgX = (x / W) * rect.width;
      const svgY = (y / H) * rect.height;
      tooltip.textContent = `S${i + 1}: ${weights[i]} kg`;
      tooltip.style.left = `${rect.left - parentRect.left + svgX - 40}px`;
      tooltip.style.top = `${rect.top - parentRect.top + svgY - 40}px`;
      tooltip.style.opacity = '1';
    });

    circle.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });

    svg.appendChild(circle);

    // Show dots after line animation
    setTimeout(() => { circle.style.opacity = '1'; }, (0.8 + i * 0.08) * 1000);
  });

  // Trigger animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      line.style.strokeDashoffset = '0';
    }, 50);
  });
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  initDashboardTabs();
});
