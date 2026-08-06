'use strict';

// ── EXERCISE LIBRARY ────────────────────────────────────────────────────────
const EXERCISE_LIBRARY = [
  { id: 'bil-calf-raise', name: 'Bilateral Standing Calf Raise', category: 'Calf — Strength', defaultSets: '3 × 12–15', desc: 'Stand feet hip-width, rise onto toes both feet together, slow controlled lower.' },
  { id: 'sgl-calf-raise', name: 'Single Leg Calf Raise', category: 'Calf — Strength', defaultSets: '3 × 8–12', desc: 'Same movement, one foot only, hands on wall for balance if needed.' },
  { id: 'seated-calf-raise', name: 'Seated Calf Raise', category: 'Calf — Strength', defaultSets: '3 × 10–15', desc: 'Sitting, feet flat, raise heels off floor keeping toes down. Lower-load entry point.' },
  { id: 'eccentric-calf-raise', name: 'Eccentric Calf Raise (Alfredson Protocol)', category: 'Calf — Strength', defaultSets: '3 × 15 (twice daily)', desc: 'Rise on both feet, shift to affected foot only, lower slowly over 3–4 seconds. Classic Achilles tendinopathy protocol.' },
  { id: 'step-heel-raise', name: 'Step / Box Heel Raise', category: 'Calf — Strength', defaultSets: '3 × 10–12', desc: 'Standing on edge of step, ball of foot on edge, raise up then lower below step level for extra range. More advanced.' },
  { id: 'gastroc-stretch', name: 'Gastrocnemius Stretch (Straight Knee)', category: 'Calf — Stretch', defaultSets: '3 × 30–45s each side', desc: 'Hands on wall, affected leg back straight, heel down, lean forward.' },
  { id: 'soleus-stretch', name: 'Soleus Stretch (Bent Knee)', category: 'Calf — Stretch', defaultSets: '3 × 30–45s each side', desc: 'Same position as gastrocnemius stretch, back knee bent.' },
  { id: 'heel-drop-stretch', name: 'Step / Wall Heel Drop Stretch', category: 'Calf — Stretch', defaultSets: '3 × 30–45s', desc: 'Ball of foot on step edge, lower heel below step level gently.' },
  { id: 'resisted-inversion', name: 'Resisted Inversion (Band)', category: 'PTT', defaultSets: '3 × 10–15', desc: 'Seated, band looped around forefoot, pull foot inward against resistance, slow return.' },
  { id: 'towel-scrunch', name: 'Towel Scrunch', category: 'PTT', defaultSets: '2–3 min', desc: 'Seated, towel on floor, scrunch toward you using toes only. Intrinsic strengthening.' },
  { id: 'short-foot', name: 'Short Foot Exercise', category: 'PTT', defaultSets: '10 × 5s hold', desc: 'Seated, draw ball of foot toward heel without curling toes, "doming" the arch.' },
  { id: 'big-toe-mob', name: 'Passive Big Toe Mobilisation', category: 'Toes & Foot', defaultSets: '10 reps each direction', desc: 'Hand-assisted up/down movement of big toe through range.' },
  { id: 'passive-toe-splay', name: 'Passive Toe Splay', category: 'Toes & Foot', defaultSets: '10 × 10s hold', desc: 'Hand pulls big toe away from second toe, hold 10s.' },
  { id: 'active-toe-splay', name: 'Active Toe Splay', category: 'Toes & Foot', defaultSets: '10 × 5s hold', desc: 'Spread all toes apart actively without hand assistance.' },
  { id: 'toe-yoga', name: 'Toe Yoga', category: 'Toes & Foot', defaultSets: '10 reps each', desc: 'Lift big toe while keeping others down, then reverse. Builds dissociated control.' },
  { id: 'big-toe-press', name: 'Big Toe Press (Abductor Hallucis)', category: 'Toes & Foot', defaultSets: '10 × 5s hold', desc: 'Standing, press big toe into floor without collapsing arch.' },
  { id: 'plantar-stretch', name: 'Plantar Fascia Stretch', category: 'Arch & Plantar Fascia', defaultSets: '3 × 30–45s each side', desc: 'Seated, cross foot over knee, pull toes back toward shin.' },
  { id: 'ball-roll', name: 'Tennis Ball / Frozen Bottle Roll', category: 'Arch & Plantar Fascia', defaultSets: '2–3 min', desc: 'Seated, roll arch over ball with moderate pressure.' },
  { id: 'towel-toe-curls', name: 'Towel Toe Curls', category: 'Arch & Plantar Fascia', defaultSets: '2–3 min', desc: 'Seated, scrunch towel toward you with toes.' },
  { id: 'slb-floor', name: 'Single Leg Balance (Floor)', category: 'Balance', defaultSets: '3 × 30–60s each side', desc: 'Stand on affected leg, hands near support if needed.' },
  { id: 'slb-eyes-closed', name: 'Single Leg Balance (Eyes Closed)', category: 'Balance', defaultSets: '3 × 30s each side', desc: 'Progression once stable with eyes open.' },
  { id: 'balance-board', name: 'Balance Board / Wobble Board', category: 'Balance', defaultSets: '2–3 × 30–45s', desc: 'Stand on board, maintain stability. Start holding support, progress hands-free.' },
  { id: 'slb-ball-toss', name: 'Single Leg Balance with Ball Toss', category: 'Balance', defaultSets: '2–3 × 30s each side', desc: 'Advanced — adds reactive/dynamic challenge once balance is solid.' },
  { id: 'resisted-dorsiflexion', name: 'Resisted Dorsiflexion (Band)', category: 'ATT — Shin', defaultSets: '3 × 10–15', desc: 'Seated, band around forefoot anchored ahead, pull toes up toward shin against resistance. Core ATT strengthening exercise. Avoid if pain is currently irritable.' },
  { id: 'tib-ant-stretch', name: 'Tibialis Anterior Stretch', category: 'ATT — Shin', defaultSets: '3 × 30s', desc: 'Kneeling, top of foot flat behind you, gently sit back. Stretches the tibialis anterior tendon along the front of the shin. Only if tolerable.' },
  { id: 'heel-walking', name: 'Heel Walking', category: 'ATT — Shin', defaultSets: '2–3 × 20 steps', desc: 'Walking short distances on heels only, toes lifted. Builds tibialis anterior endurance and tendon load tolerance.' },
  { id: 'wall-toe-raise', name: 'Wall Toe Raise (Standing)', category: 'ATT — Shin', defaultSets: '3 × 15–20', desc: 'Stand with back flat against a wall, heels 5–10 cm from the baseboard. Lift both forefeet off the floor, hold 1–2 seconds at the top, lower slowly. Directly loads the tibialis anterior tendon in a controlled, supported position. Progress to single leg as strength improves.' },
  { id: 'eccentric-dorsiflexion', name: 'Eccentric Dorsiflexion (Band)', category: 'ATT — Shin', defaultSets: '3 × 15', desc: 'Pull toes up with band resistance, then slowly lower against the band over 3–4 seconds. Eccentric loading is key for tendon remodelling in ATT.' },
  { id: 'isometric-dorsiflexion', name: 'Isometric Dorsiflexion Hold', category: 'ATT — Shin', defaultSets: '5 × 45s', desc: 'Seated, pull toes up hard against a fixed resistance (wall, opposite foot, or band) and hold. Isometrics reduce tendon pain without aggravating load — good during a flare.' },
  { id: 'seated-dorsiflexion-towel', name: 'Seated Dorsiflexion with Towel', category: 'ATT — Shin', defaultSets: '3 × 15', desc: 'Seated, loop towel around forefoot, pull foot toward shin against light resistance. Gentle ATT activation for early-stage recovery.' },
  { id: 'tib-ant-massage', name: 'Tibialis Anterior Self-Massage / Foam Roll', category: 'ATT — Shin', defaultSets: '2–3 min each side', desc: 'Kneel or sit, apply pressure along the muscle belly on the outer shin with a foam roller or thumbs. Reduces tightness contributing to tendon overload. Avoid rolling directly over the sore tendon area near the ankle.' },
  { id: 'tib-ant-ice', name: 'Ice / Contrast Therapy (Anterior Shin)', category: 'ATT — Shin', defaultSets: '10–15 min post-activity', desc: 'Apply ice pack wrapped in cloth to the front of the ankle and shin after activity. Helps manage post-exercise soreness. Contrast (alternating ice/warm) can improve circulation during recovery phases.' },
  { id: 'quad-sets', name: 'Quad Sets', category: 'Knee', defaultSets: '10 × 5s hold', desc: 'Seated/lying, leg straight, tighten thigh muscle pressing knee down. Gentle, knee-protective.' },
  { id: 'straight-leg-raise', name: 'Straight Leg Raise', category: 'Knee', defaultSets: '3 × 10–12', desc: 'Lying, leg straight, lift to hip height. Builds quad without knee flexion load.' },
  { id: 'ankle-circles', name: 'Ankle Circles', category: 'Recovery', defaultSets: '10 each direction', desc: 'Seated or lying, rotate foot at ankle.' },
  { id: 'calf-pumps', name: 'Calf Pumps', category: 'Recovery', defaultSets: '15–20 reps', desc: 'Lying, point and flex foot repeatedly. Good for circulation during rest/elevation.' },
  { id: 'seated-marching', name: 'Seated Marching', category: 'Recovery', defaultSets: '2–3 min', desc: 'Gentle alternating knee lifts seated, low-level activation without ankle load.' }
];

// ── STATE ──────────────────────────────────────────────────────────────────
const DATA_KEY = 'ptt-data-v1';
const SETTINGS_KEY = 'ptt-settings-v1';

let state = {
  screen: 'home',
  data: JSON.parse(localStorage.getItem(DATA_KEY) || '{}'),
  settings: (() => {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return {
      reminders: saved.reminders || ['08:00', '18:00'],
      journalReminders: saved.journalReminders || ['21:00'],
      notificationsEnabled: saved.notificationsEnabled || false,
      programStartDate: saved.programStartDate || null,
      plans: saved.plans || [],
      activePlanId: saved.activePlanId || null,
      darkMode: saved.darkMode || false
    };
  })()
};

// Exercise view state
let exView = 'active'; // 'active' | 'plans' | 'builder'
let builderPlan = null;
let builderTab = 'library'; // 'library' | 'plan'
let expandedCats = {};
let configuringExId = null;

function todayKey() { return new Date().toISOString().slice(0, 10); }

function getDay(key) {
  const d = key || todayKey();
  if (!state.data[d]) state.data[d] = { painScoreMorning: null, painScoreEvening: null, exercises: {}, journal: '' };
  return state.data[d];
}

function getEffectivePainScore(day) {
  if (!day) return null;
  const m = day.painScoreMorning ?? null;
  const e = day.painScoreEvening ?? null;
  // backward compat with old single painScore
  if (m === null && e === null) return day.painScore ?? null;
  if (m !== null && e !== null) return parseFloat(((m + e) / 2).toFixed(1));
  return m !== null ? m : e;
}

function getDaysRemaining(plan) {
  if (!plan || !plan.startDate) return null;
  const start = new Date(plan.startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + plan.durationWeeks * 7);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((end - today) / 86400000);
  return diff > 0 ? diff : 0;
}

function getWeekBounds() {
  const now = new Date();
  const dayOfWeek = (now.getDay() + 6) % 7; // Mon=0
  const mon = new Date(now);
  mon.setDate(now.getDate() - dayOfWeek);
  mon.setHours(0, 0, 0, 0);
  return mon;
}

function getWeeklyStats() {
  const mon = getWeekBounds();
  let workouts = 0, totalExercises = 0, painScores = [], stepsList = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const day = state.data[key];
    if (!day) continue;
    const exDone = Object.values(day.exercises || {}).filter(Boolean).length;
    if (exDone > 0) workouts++;
    totalExercises += exDone;
    const score = getEffectivePainScore(day);
    if (score !== null) painScores.push(score);
    if (day.steps != null && day.steps > 0) stepsList.push(day.steps);
  }
  const avgPain = painScores.length > 0
    ? (painScores.reduce((a, b) => a + b, 0) / painScores.length).toFixed(1)
    : null;
  const avgSteps = stepsList.length > 0
    ? Math.round(stepsList.reduce((a, b) => a + b, 0) / stepsList.length)
    : null;
  return { workouts, totalExercises, avgPain, avgSteps };
}

function calcWeeklyStreak() {
  let streak = 0;
  let weekStart = getWeekBounds();
  while (true) {
    let hasWorkout = false;
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      const key = d.toISOString().slice(0, 10);
      const day = state.data[key];
      if (day && Object.values(day.exercises || {}).some(Boolean)) { hasWorkout = true; break; }
    }
    if (!hasWorkout) break;
    streak++;
    weekStart = new Date(weekStart);
    weekStart.setDate(weekStart.getDate() - 7);
  }
  return streak;
}

function calcPainStreak() {
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let prev = null;
  // Walk backwards from yesterday
  for (let i = 1; i <= 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const day = state.data[key];
    const score = day ? (day.painScoreMorning ?? null) : null;
    if (score === null) break;
    if (prev !== null && score > prev) break;
    prev = score;
    streak++;
  }
  return streak;
}

function save() { localStorage.setItem(DATA_KEY, JSON.stringify(state.data)); }
function saveSettings() { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); }

// ── PLAN HELPERS ───────────────────────────────────────────────────────────
function getActivePlan() {
  if (!state.settings.activePlanId) return null;
  return state.settings.plans.find(p => p.id === state.settings.activePlanId) || null;
}

function weekNumber() {
  if (!state.settings.programStartDate) return null;
  return Math.min(Math.floor((Date.now() - new Date(state.settings.programStartDate)) / 604800000) + 1, 52);
}

// ── PAIN HELPERS ───────────────────────────────────────────────────────────
function painColor(n) {
  if (n === null || n === undefined) return '#aab4c0';
  if (n <= 3) return '#2ecc71';
  if (n <= 6) return '#f39c12';
  return '#e74c3c';
}

function painLabel(n) {
  if (n === null || n === undefined) return 'Not set yet';
  if (n === 0) return 'No pain';
  if (n <= 2) return 'Very mild';
  if (n <= 4) return 'Mild';
  if (n <= 6) return 'Moderate';
  if (n <= 8) return 'Significant';
  return 'Severe';
}

// ── TOAST ──────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ── FORMAT DATE ────────────────────────────────────────────────────────────
function formatDate(key) {
  const d = new Date(key + 'T00:00:00');
  const today = todayKey();
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  const yKey = yesterday.toISOString().slice(0, 10);
  if (key === today) return 'Today';
  if (key === yKey) return 'Yesterday';
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

// ── NAVIGATION ─────────────────────────────────────────────────────────────
function navigate(screen) {
  state.screen = screen;
  if (screen === 'exercises') exView = 'active';
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  document.getElementById('nav-' + screen).classList.add('active');
  if (screen === 'home') renderHome();
  if (screen === 'exercises') renderExercises();
  if (screen === 'journal') renderJournal();
  if (screen === 'history') renderHistory();
  if (screen === 'settings') renderSettings();
  if (screen === 'faq') renderFaq();
}

// ── HOME SCREEN ────────────────────────────────────────────────────────────
function renderHome() {
  const today = getDay();
  const scoreMorning = today.painScoreMorning ?? null;
  const scoreEvening = today.painScoreEvening ?? null;
  const plan = getActivePlan();
  const exList = plan ? plan.exercises : [];
  const doneCount = exList.filter(e => today.exercises[e.id]).length;
  const streak = calcWeeklyStreak();
  const painStreak = calcPainStreak();
  const mPct = (scoreMorning !== null ? scoreMorning : 5) / 10 * 100;
  const ePct = (scoreEvening !== null ? scoreEvening : 5) / 10 * 100;

  document.getElementById('screen-home').innerHTML = `
    <div style="display:flex;gap:var(--gap);margin-bottom:var(--gap);align-items:stretch">
      <div class="stat-card" style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px">
        <div class="card-title" style="margin-bottom:4px;width:100%;text-align:center;white-space:nowrap;letter-spacing:0">Week Streak</div>
        <div class="stat-value">${streak}</div>
      </div>
      <div class="stat-card" style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px">
        <div class="card-title" style="margin-bottom:4px;width:100%;text-align:center;white-space:nowrap;letter-spacing:0">Pain Streak</div>
        <div class="stat-value">${painStreak}</div>
      </div>
      ${plan ? `
      <div class="card phase-banner" style="flex:2;margin-bottom:0;padding:10px 12px">
        <div class="card-title" style="margin-bottom:6px">Active Plan</div>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
          <div>
            <div class="phase-banner-name">${plan.name}</div>
            <div class="phase-banner-sub">${plan.durationWeeks} week${plan.durationWeeks !== 1 ? 's' : ''} · ${plan.exercises.length} exercises</div>
          </div>
          ${(() => { const d = getDaysRemaining(plan); return d !== null ? `<div style="text-align:right;flex-shrink:0"><div style="font-size:20px;font-weight:800;color:var(--black);line-height:1">${d}</div><div class="phase-banner-sub">days left</div></div>` : ''; })()}
        </div>
      </div>
      ` : `
      <div class="card" style="flex:2;margin-bottom:0;padding:10px 12px">
        <div class="card-title" style="margin-bottom:6px">Active Plan</div>
        <div class="phase-banner-sub" style="margin-bottom:10px">No active plan</div>
        <button class="save-btn" onclick="navigate('exercises')">Set Up</button>
      </div>
      `}
    </div>

    <div class="card">
      <div class="card-title" style="margin-bottom:8px">Today's Pain Scores</div>
      <div style="margin-bottom:10px">
        <div style="position:relative;height:18px;margin-bottom:2px">
          <span id="home-pain-morning-num" style="position:absolute;font-size:12px;font-weight:700;color:var(--black);transform:translateX(-50%);left:calc(${mPct}% + ${9 - mPct * 0.18}px)">${scoreMorning !== null ? scoreMorning : ''}</span>
        </div>
        <div class="pain-slider-wrap">
          <input type="range" id="home-pain-morning" min="0" max="10" step="1" value="${scoreMorning !== null ? scoreMorning : 5}">
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:3px">
          <span class="pain-scale-labels" style="display:block">0 No pain</span>
          <span style="font-weight:700;color:var(--black)">AM</span>
          <span class="pain-scale-labels" style="display:block">10 Severe</span>
        </div>
      </div>
      <div style="margin-bottom:8px">
        <div style="position:relative;height:18px;margin-bottom:2px">
          <span id="home-pain-evening-num" style="position:absolute;font-size:12px;font-weight:700;color:var(--black);transform:translateX(-50%);left:calc(${ePct}% + ${9 - ePct * 0.18}px)">${scoreEvening !== null ? scoreEvening : ''}</span>
        </div>
        <div class="pain-slider-wrap">
          <input type="range" id="home-pain-evening" min="0" max="10" step="1" value="${scoreEvening !== null ? scoreEvening : 5}">
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:3px">
          <span class="pain-scale-labels" style="display:block">0 No pain</span>
          <span style="font-weight:700;color:var(--black)">PM</span>
          <span class="pain-scale-labels" style="display:block">10 Severe</span>
        </div>
      </div>
      <button class="save-btn" id="pain-submit-btn" style="padding:10px" onclick="submitPainScores()">Submit Pain Scores</button>
    </div>

    ${plan ? `
    <div class="card" style="padding:8px 12px;margin-bottom:var(--gap)">
      <div class="card-title" style="margin-bottom:8px">Exercise Progress</div>
      <div class="progress-bar-wrap" style="margin-bottom:8px">
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width:${exList.length > 0 ? Math.round(doneCount/exList.length*100) : 0}%"></div>
        </div>
        <div class="progress-label">${doneCount} of ${exList.length} exercises completed</div>
      </div>
      <button class="save-btn" style="padding:10px" onclick="navigate('exercises')">
        ${doneCount === 0 ? 'Start Exercises' : doneCount === exList.length ? '✓ All Done!' : 'Continue Exercises'}
      </button>
    </div>
    ` : ''}

    <div class="card">
      <div class="card-title" style="margin-bottom:8px">Daily Steps</div>
      <div class="step-picker-wrap">
        <div class="step-picker" id="step-picker">
          ${[0,1,2,3,4].map(col => {
            const digit = parseInt(String(today.steps || 0).padStart(5,'0')[col]);
            return `<div class="step-col" id="step-col-${col}">
              <div class="step-col-inner" id="step-inner-${col}">
                ${[0,1,2,3,4,5,6,7,8,9].map(d => `<div class="step-digit">${d}</div>`).join('')}
              </div>
            </div>`;
          }).join('')}
        </div>
        <div class="step-picker-mask-top"></div>
        <div class="step-picker-mask-bottom"></div>
        <div class="step-picker-highlight"></div>
      </div>
      <button class="save-btn" style="margin-top:8px;padding:10px" onclick="submitSteps()">Save Steps</button>
    </div>

    <div class="card">
      <div class="card-title" style="margin-bottom:6px">Today's Journal</div>
      <textarea class="journal-textarea" id="home-journal-input" style="min-height:110px" placeholder="How did today's session feel? Any pain flare-ups, improvements, or things to note for next time...">${today.journal || ''}</textarea>
      <button class="save-btn" style="margin-top:8px;padding:10px" onclick="saveHomeJournal()">Save Note</button>
    </div>
  `;

  function updateThumbLabel(sliderId, labelId) {
    const slider = document.getElementById(sliderId);
    const label = document.getElementById(labelId);
    slider.addEventListener('input', function() {
      const pct = parseInt(this.value) / 10 * 100;
      label.textContent = this.value;
      label.style.left = `calc(${pct}% + ${9 - pct * 0.18}px)`;
    });
  }
  updateThumbLabel('home-pain-morning', 'home-pain-morning-num');
  updateThumbLabel('home-pain-evening', 'home-pain-evening-num');
  setTimeout(initStepPicker, 0);
}

const STEP_H = 36;

function setStepPos(inner, digit, animate) {
  inner.style.transition = animate ? 'transform 0.15s ease' : 'none';
  inner.style.transform = `translateY(${-digit * STEP_H}px)`;
}

function initStepPicker() {
  const steps = getDay().steps || 0;
  const s = String(steps).padStart(5, '0');
  for (let i = 0; i < 5; i++) {
    const col = document.getElementById('step-col-' + i);
    const inner = document.getElementById('step-inner-' + i);
    if (!col || !inner) return;
    col._digit = parseInt(s[i]);
    setStepPos(inner, col._digit, false);

    let startY = null, startDigit = null;

    col.addEventListener('pointerdown', e => {
      startY = e.clientY;
      startDigit = col._digit;
      col.setPointerCapture(e.pointerId);
      e.preventDefault();
    }, { passive: false });

    col.addEventListener('pointermove', e => {
      if (startY === null) return;
      const delta = e.clientY - startY;
      const raw = startDigit + delta / STEP_H;
      const clamped = Math.min(9, Math.max(0, raw));
      col._digit = Math.round(clamped);
      setStepPos(inner, clamped, false);
    });

    col.addEventListener('pointerup', e => {
      if (startY === null) return;
      setStepPos(inner, col._digit, true);
      startY = null;
    });

    col.addEventListener('pointercancel', () => {
      if (startY === null) return;
      setStepPos(inner, col._digit, true);
      startY = null;
    });
  }
}

function submitSteps() {
  let steps = 0;
  const multipliers = [10000, 1000, 100, 10, 1];
  for (let i = 0; i < 5; i++) {
    const col = document.getElementById('step-col-' + i);
    steps += (col._digit || 0) * multipliers[i];
  }
  getDay().steps = steps;
  save();
  showToast('Steps saved — ' + steps.toLocaleString());
}

function submitPainScores() {
  const m = parseInt(document.getElementById('home-pain-morning').value);
  const e = parseInt(document.getElementById('home-pain-evening').value);
  const day = getDay();
  day.painScoreMorning = m;
  day.painScoreEvening = e;
  save();
  const btn = document.getElementById('pain-submit-btn');
  btn.textContent = '✓ Saved';
  btn.classList.add('saved');
  setTimeout(() => { btn.textContent = 'Submit Pain Scores'; btn.classList.remove('saved'); }, 1800);
  showToast('Pain scores saved');
}

// ── EXERCISES SCREEN ───────────────────────────────────────────────────────
function renderExercises() {
  if (exView === 'plans') renderPlansList();
  else if (exView === 'builder') renderPlanBuilder();
  else renderActiveExercises();
}

function renderActiveExercises() {
  const today = getDay();
  const plan = getActivePlan();

  if (!plan) {
    document.getElementById('screen-exercises').innerHTML = `
      <div class="section-title">Active Plan</div>
      <div class="card" style="text-align:center;padding:24px">
        <div class="phase-banner-sub" style="margin-bottom:16px">You don't have an active plan yet.</div>
        <button class="save-btn" onclick="navigate('exercises');newPlan()">Create a Plan</button>
      </div>
      <div class="section-title">My Plans</div>
      <div class="card" style="text-align:center;padding:14px">
        <button class="save-btn" onclick="exView='plans';renderExercises()">View &amp; Manage Plans</button>
      </div>
    `;
    return;
  }

  const doneCount = plan.exercises.filter(e => today.exercises[e.id]).length;

  const items = plan.exercises.map(ex => {
    const libEx = EXERCISE_LIBRARY.find(l => l.id === ex.id) || {};
    const done = !!today.exercises[ex.id];
    return `
      <div class="exercise-item" id="ex-row-${ex.id}">
        <div class="exercise-check ${done ? 'done' : ''}" id="ex-check-${ex.id}" onclick="toggleExercise('${ex.id}')">
          ${done ? `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
        </div>
        <div class="exercise-info">
          <div class="exercise-name">${libEx.name || ex.id}</div>
          <div class="exercise-meta">${ex.sets}</div>
          ${libEx.desc ? `<div class="exercise-desc" id="ex-desc-${ex.id}">${libEx.desc}</div>
          <button class="expand-btn" onclick="toggleDesc('${ex.id}')">How to do this ▾</button>` : ''}
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('screen-exercises').innerHTML = `
    <div class="section-title">Active Plan</div>
    <div class="card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:4px">
        <div class="phase-banner-name">${plan.name}</div>
        ${(() => { const d = getDaysRemaining(plan); return d !== null ? `<div style="text-align:right;flex-shrink:0"><div style="font-size:20px;font-weight:800;color:var(--black);line-height:1">${d}</div><div class="phase-banner-sub">days left</div></div>` : ''; })()}
      </div>
      <div class="phase-progress-row" style="padding:8px 0 0">
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="ex-progress-fill" style="width:${plan.exercises.length > 0 ? Math.round(doneCount/plan.exercises.length*100) : 0}%"></div>
        </div>
        <div class="progress-label" id="ex-progress-label">${doneCount} / ${plan.exercises.length} completed today</div>
      </div>
      <div class="exercise-list">${items}</div>
      <button class="save-btn" style="margin-top:12px" onclick="submitSession()">Submit Session</button>
    </div>
    <div class="section-title">My Plans</div>
    <div class="card" style="text-align:center;padding:14px">
      <button class="save-btn" onclick="exView='plans';renderExercises()">View &amp; Manage Plans</button>
    </div>
  `;
}

function renderPlansList() {
  const plans = state.settings.plans;

  const planCards = plans.length === 0
    ? `<div style="text-align:center;padding:24px;color:var(--muted);font-size:14px">No plans yet. Create your first one!</div>`
    : plans.map(plan => {
        const isActive = plan.id === state.settings.activePlanId;
        return `
          <div style="padding:14px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
              <div style="flex:1;min-width:0">
                <div style="font-size:16px;font-weight:600;color:var(--text);margin-bottom:2px">${plan.name || 'Untitled Plan'}</div>
                <div style="font-size:13px;color:var(--muted)">${plan.durationWeeks} weeks · ${plan.exercises.length} exercises</div>
              </div>
              ${isActive ? `<span style="font-size:11px;font-weight:700;background:var(--btn);color:#fff;padding:3px 8px;border-radius:20px;white-space:nowrap;flex-shrink:0">Active</span>` : ''}
            </div>
            <div style="display:flex;gap:8px;margin-top:10px">
              ${!isActive ? `<button class="save-btn" style="flex:1;padding:8px" onclick="setActivePlan('${plan.id}')">Set Active</button>` : ''}
              <button class="save-btn" style="flex:1;padding:8px;background:#444" onclick="editPlan('${plan.id}')">Edit</button>
              <button class="save-btn" style="flex:1;padding:8px;background:var(--border);color:var(--text)" onclick="deletePlan('${plan.id}')">Delete</button>
            </div>
          </div>
        `;
      }).join('');

  document.getElementById('screen-exercises').innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <button onclick="exView='active';renderExercises()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--text);padding:0;line-height:1">←</button>
      <div class="section-title" style="margin-bottom:0">My Plans</div>
    </div>
    <div class="card">${planCards}</div>
    <button class="save-btn" style="margin-top:12px;width:100%" onclick="newPlan()">+ Create New Plan</button>
  `;
}

function renderPlanBuilder() {
  const selectedIds = builderPlan.exercises.map(e => e.id);

  // Group library by category
  const cats = {};
  EXERCISE_LIBRARY.forEach(ex => {
    if (!cats[ex.category]) cats[ex.category] = [];
    cats[ex.category].push(ex);
  });

  const topBar = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <button onclick="exView='plans';renderExercises()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--text);padding:0;line-height:1">←</button>
      <div class="section-title" style="margin-bottom:0">${builderPlan._isNew ? 'New Plan' : 'Edit Plan'}</div>
    </div>
    <div class="card" style="margin-bottom:12px">
      <input id="builder-name" type="text" value="${builderPlan.name}" placeholder="Plan name (e.g. Phase 1 Foundation)"
        style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:inherit;background:var(--bg);color:var(--text);outline:none;margin-bottom:10px;box-sizing:border-box"
        oninput="builderPlan.name=this.value">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <label style="font-size:13px;color:var(--muted);white-space:nowrap">Duration (weeks)</label>
        <input id="builder-weeks" type="number" min="1" max="52" value="${builderPlan.durationWeeks}"
          style="width:60px;padding:8px 10px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:inherit;background:var(--bg);color:var(--text);outline:none"
          oninput="builderPlan.durationWeeks=parseInt(this.value)||1">
        <label style="font-size:13px;color:var(--muted);white-space:nowrap">Start date</label>
        <input id="builder-start" type="date" value="${builderPlan.startDate || ''}"
          style="padding:8px 10px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:inherit;background:var(--bg);color:var(--text);outline:none;flex:1;min-width:120px"
          onchange="builderPlan.startDate=this.value">
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <button onclick="builderTab='library';configuringExId=null;renderExercises()"
        style="flex:1;padding:10px;border:none;border-radius:var(--radius-sm);cursor:pointer;font-family:inherit;font-size:14px;font-weight:600;
        background:${builderTab==='library'?'var(--btn)':'var(--border)'};color:${builderTab==='library'?'#fff':'var(--text)'}">
        Library
      </button>
      <button onclick="builderTab='plan';configuringExId=null;renderExercises()"
        style="flex:1;padding:10px;border:none;border-radius:var(--radius-sm);cursor:pointer;font-family:inherit;font-size:14px;font-weight:600;
        background:${builderTab==='plan'?'var(--btn)':'var(--border)'};color:${builderTab==='plan'?'#fff':'var(--text)'}">
        Your Plan (${selectedIds.length})
      </button>
    </div>
  `;

  if (builderTab === 'library') {
    const catHtml = Object.entries(cats).map(([cat, exes]) => {
      const isOpen = expandedCats[cat];
      const rows = isOpen ? exes.map(ex => {
        const added = selectedIds.includes(ex.id);
        const configuring = configuringExId === ex.id;
        const defaultReps = ex.defaultSets.includes('×') ? ex.defaultSets.split('×').slice(1).join('×').trim() : ex.defaultSets;
        return `
          <div style="padding:10px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <div style="flex:1;min-width:0">
                <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:3px">${ex.name}</div>
                <div style="font-size:12px;color:var(--muted);line-height:1.4">${ex.desc}</div>
              </div>
              <button onclick="${added ? `removeBuilderExerciseById('${ex.id}')` : `startConfiguring('${ex.id}')`}"
                style="flex-shrink:0;width:32px;height:32px;border-radius:50%;border:none;cursor:pointer;font-size:${added?'16':'18'}px;font-weight:700;line-height:1;margin-top:2px;
                background:${added?'var(--btn)':'var(--border)'};color:${added?'#fff':'var(--text)'}">
                ${added ? '✓' : '+'}
              </button>
            </div>
            ${configuring ? `
              <div style="margin-top:10px;background:var(--bg);border-radius:var(--radius-sm);padding:12px">
                <div style="display:flex;gap:10px;margin-bottom:10px">
                  <div style="flex:1">
                    <div style="font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:5px">Sets</div>
                    <input type="number" id="cfg-sets-${ex.id}" min="1" max="10" value="3"
                      style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:inherit;background:var(--card);color:var(--text);outline:none">
                  </div>
                  <div style="flex:2">
                    <div style="font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:5px">Reps / Duration</div>
                    <input type="text" id="cfg-reps-${ex.id}" value="${defaultReps}"
                      style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:inherit;background:var(--card);color:var(--text);outline:none">
                  </div>
                </div>
                <div style="display:flex;gap:8px">
                  <button onclick="confirmAddExercise('${ex.id}')" class="save-btn" style="flex:1;padding:8px">Add to Plan</button>
                  <button onclick="cancelConfiguring()" class="save-btn" style="flex:1;padding:8px;background:var(--border);color:var(--text)">Cancel</button>
                </div>
              </div>
            ` : ''}
          </div>
        `;
      }).join('') : '';

      return `
        <div>
          <button onclick="toggleCat(this)" data-cat="${cat.replace(/"/g,'&quot;')}"
            style="width:100%;text-align:left;background:none;border:none;border-bottom:1px solid var(--border);padding:12px 0;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-family:inherit">
            <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--muted)">${cat}</span>
            <span style="color:var(--muted);font-size:13px">${isOpen ? '▴' : '▾'}</span>
          </button>
          ${isOpen ? `<div>${rows}</div>` : ''}
        </div>
      `;
    }).join('');

    document.getElementById('screen-exercises').innerHTML = topBar + `<div class="card">${catHtml}</div>`;
  } else {
    const planItems = builderPlan.exercises.length === 0
      ? `<div style="text-align:center;padding:20px;color:var(--muted);font-size:14px">Switch to Library tab to add exercises.</div>`
      : builderPlan.exercises.map((ex, i) => {
          const libEx = EXERCISE_LIBRARY.find(l => l.id === ex.id) || {};
          return `
            <div style="display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--border)">
              <div style="flex:1;min-width:0">
                <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:5px">${libEx.name || ex.id}</div>
                <input type="text" value="${ex.sets}"
                  style="width:100%;padding:6px 10px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:13px;font-family:inherit;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box"
                  oninput="builderPlan.exercises[${i}].sets=this.value" placeholder="Sets / reps">
              </div>
              <button onclick="removeBuilderExercise(${i})"
                style="flex-shrink:0;width:32px;height:32px;border-radius:50%;border:none;cursor:pointer;background:var(--border);color:var(--text);font-size:18px;font-weight:400;line-height:1">×</button>
            </div>
          `;
        }).join('');

    document.getElementById('screen-exercises').innerHTML = topBar +
      `<div class="card">${planItems}</div>
       <button class="save-btn" style="margin-top:12px;width:100%" onclick="savePlan()">Save Plan</button>`;
  }
}

// ── PLAN CRUD ──────────────────────────────────────────────────────────────
function newPlan() {
  builderPlan = { id: 'plan-' + Date.now(), name: '', durationWeeks: 4, startDate: '', exercises: [], _isNew: true };
  builderTab = 'library';
  expandedCats = {};
  configuringExId = null;
  exView = 'builder';
  renderExercises();
}

function editPlan(id) {
  const plan = state.settings.plans.find(p => p.id === id);
  if (!plan) return;
  builderPlan = JSON.parse(JSON.stringify(plan));
  builderPlan._isNew = false;
  builderTab = 'plan';
  expandedCats = {};
  exView = 'builder';
  renderExercises();
}

function savePlan() {
  if (!builderPlan.name.trim()) { showToast('Please enter a plan name'); return; }
  if (builderPlan.exercises.length === 0) { showToast('Add at least one exercise'); return; }
  delete builderPlan._isNew;
  const idx = state.settings.plans.findIndex(p => p.id === builderPlan.id);
  if (idx >= 0) {
    state.settings.plans[idx] = builderPlan;
  } else {
    state.settings.plans.push(builderPlan);
    if (!state.settings.activePlanId) state.settings.activePlanId = builderPlan.id;
  }
  saveSettings();
  showToast('Plan saved');
  exView = 'plans';
  renderExercises();
}

function deletePlan(id) {
  if (!confirm('Delete this plan?')) return;
  state.settings.plans = state.settings.plans.filter(p => p.id !== id);
  if (state.settings.activePlanId === id) {
    state.settings.activePlanId = state.settings.plans.length > 0 ? state.settings.plans[0].id : null;
  }
  saveSettings();
  showToast('Plan deleted');
  renderExercises();
}

function setActivePlan(id) {
  state.settings.activePlanId = id;
  saveSettings();
  showToast('Plan activated');
  exView = 'active';
  renderExercises();
}

function toggleBuilderExercise(id) {
  const idx = builderPlan.exercises.findIndex(e => e.id === id);
  if (idx >= 0) {
    builderPlan.exercises.splice(idx, 1);
  } else {
    const libEx = EXERCISE_LIBRARY.find(l => l.id === id);
    builderPlan.exercises.push({ id, sets: libEx ? libEx.defaultSets : '' });
  }
  renderExercises();
}

function startConfiguring(id) {
  configuringExId = id;
  renderExercises();
}

function cancelConfiguring() {
  configuringExId = null;
  renderExercises();
}

function confirmAddExercise(id) {
  const sets = document.getElementById('cfg-sets-' + id).value || '3';
  const reps = document.getElementById('cfg-reps-' + id).value.trim();
  const setsStr = reps ? `${sets} × ${reps}` : `${sets} sets`;
  const libEx = EXERCISE_LIBRARY.find(l => l.id === id);
  builderPlan.exercises.push({ id, sets: setsStr });
  configuringExId = null;
  renderExercises();
}

function removeBuilderExerciseById(id) {
  const idx = builderPlan.exercises.findIndex(e => e.id === id);
  if (idx >= 0) builderPlan.exercises.splice(idx, 1);
  renderExercises();
}

function removeBuilderExercise(i) {
  builderPlan.exercises.splice(i, 1);
  renderExercises();
}

function toggleCat(btn) {
  const cat = btn.dataset.cat;
  expandedCats[cat] = !expandedCats[cat];
  renderExercises();
}

// ── EXERCISE TRACKING ──────────────────────────────────────────────────────
function toggleExercise(id) {
  const today = getDay();
  today.exercises[id] = !today.exercises[id];
  save();

  const check = document.getElementById('ex-check-' + id);
  check.classList.toggle('done', !!today.exercises[id]);
  check.innerHTML = today.exercises[id]
    ? `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
    : '';

  const plan = getActivePlan();
  if (!plan) return;
  const doneCount = plan.exercises.filter(e => today.exercises[e.id]).length;
  const pct = Math.round(doneCount / plan.exercises.length * 100);
  const fillEl = document.getElementById('ex-progress-fill');
  const labelEl = document.getElementById('ex-progress-label');
  if (fillEl) fillEl.style.width = pct + '%';
  if (labelEl) labelEl.textContent = `${doneCount} / ${plan.exercises.length} completed today`;
  if (doneCount === plan.exercises.length) showToast('All exercises done! Great work');
}

function toggleDesc(id) {
  const row = document.getElementById('ex-row-' + id);
  const btn = row.querySelector('.expand-btn');
  row.classList.toggle('expanded');
  btn.textContent = row.classList.contains('expanded') ? 'Hide ▴' : 'How to do this ▾';
}

function submitSession() {
  const today = getDay();
  const plan = getActivePlan();
  if (!plan) { showToast('No active plan'); return; }
  const doneCount = plan.exercises.filter(e => today.exercises[e.id]).length;
  if (doneCount === 0) { showToast('Tick at least one exercise first'); return; }
  save();
  showToast(`Session saved — ${doneCount} exercise${doneCount > 1 ? 's' : ''} completed`);
  navigate('home');
}

// ── JOURNAL SCREEN ─────────────────────────────────────────────────────────
function renderJournal() {
  const today = getDay();

  const historyEntries = Object.keys(state.data)
    .filter(k => k !== todayKey())
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 14)
    .filter(k => state.data[k].journal)
    .map(k => {
      const d = state.data[k];
      return `
        <div class="journal-history-item">
          <div class="journal-history-date">
            ${formatDate(k)}
            ${(() => { const s = getEffectivePainScore(d); return s !== null ? `<span class="journal-history-pain" style="background:${painColor(s)}">${s}/10</span>` : ''; })()}
          </div>
          <div class="journal-history-text">${d.journal}</div>
        </div>
      `;
    }).join('');

  document.getElementById('screen-journal').innerHTML = `
    <div class="section-title">Today's Note</div>
    <div class="card">
      <textarea class="journal-textarea" id="journal-input" placeholder="How did today's session feel? Any pain flare-ups, improvements, or things to note for next time...">${today.journal}</textarea>
      <button class="save-btn" id="journal-save-btn" onclick="saveJournal()">Save Note</button>
    </div>
    ${historyEntries ? `
      <div class="section-title" style="margin-top:6px">Past Entries</div>
      <div class="card">${historyEntries}</div>
    ` : `<div class="journal-empty">Past entries will appear here after you start logging</div>`}
  `;
}

function saveJournal() {
  const text = document.getElementById('journal-input').value.trim();
  getDay().journal = text;
  save();
  const btn = document.getElementById('journal-save-btn');
  btn.textContent = '✓ Saved';
  btn.classList.add('saved');
  setTimeout(() => { btn.textContent = 'Save Note'; btn.classList.remove('saved'); }, 1800);
  showToast('Journal entry saved');
}

function saveHomeJournal() {
  const text = document.getElementById('home-journal-input').value.trim();
  getDay().journal = text;
  save();
  const btn = event.target;
  btn.textContent = '✓ Saved';
  btn.classList.add('saved');
  setTimeout(() => { btn.textContent = 'Save Note'; btn.classList.remove('saved'); }, 1800);
  showToast('Journal entry saved');
}

// ── HISTORY SCREEN ─────────────────────────────────────────────────────────
function renderHistory() {
  const keys = Object.keys(state.data).sort((a, b) => b.localeCompare(a));
  const scored = keys.filter(k => getEffectivePainScore(state.data[k]) !== null);

  const ws = getWeeklyStats();
  const weeklyStatsHtml = `
    <div class="section-title">This Week</div>
    <div class="card">
      <div class="stat-row" style="margin-bottom:0">
        <div class="stat-card">
          <div class="stat-value" style="font-size:20px">${ws.workouts}</div>
          <div class="stat-label">Workouts</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="font-size:20px">${ws.totalExercises}</div>
          <div class="stat-label">Exercises</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="font-size:20px">${ws.avgPain !== null ? ws.avgPain : '–'}</div>
          <div class="stat-label">Avg Pain</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="font-size:20px">${ws.avgSteps !== null ? ws.avgSteps.toLocaleString() : '–'}</div>
          <div class="stat-label">Avg Steps</div>
        </div>
      </div>
    </div>
  `;

  // Build this week's daily pain points (Mon → today)
  function getThisWeekDailyPoints() {
    const today = new Date();
    const dayOfWeek = (today.getDay() + 6) % 7; // Mon=0
    const monday = new Date(today);
    monday.setDate(today.getDate() - dayOfWeek);
    monday.setHours(0, 0, 0, 0);
    const points = [];
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i <= dayOfWeek; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const key = d.toISOString().slice(0, 10);
      const score = getEffectivePainScore(state.data[key]);
      points.push({ label: dayNames[i], score });
    }
    return points;
  }

  const thisWeekPoints = getThisWeekDailyPoints();

  function buildLineChart(points, valueKey, maxVal, colorFn) {
    const scored = points.filter(p => p[valueKey] !== null);
    if (scored.length < 2) return `<div class="chart-no-data">Log at least 2 days this week to see your trend</div>`;
    const w = 300, h = 140, pad = { t: 10, b: 24, l: 28, r: 10 };
    const n = points.length;
    const xPos = i => pad.l + i * (w - pad.l - pad.r) / (n > 1 ? n - 1 : 1);
    const ys = v => h - pad.b - (v / maxVal) * (h - pad.t - pad.b);
    const linePoints = points.map((p, i) => p[valueKey] !== null ? `${xPos(i)},${ys(p[valueKey])}` : null).filter(Boolean).join(' ');
    const first = points.findIndex(p => p[valueKey] !== null);
    const last = points.map((p, i) => p[valueKey] !== null ? i : -1).filter(i => i >= 0).pop();
    const areaPoints = `${xPos(first)},${h - pad.b} ` + points.map((p, i) => p[valueKey] !== null ? `${xPos(i)},${ys(p[valueKey])}` : null).filter(Boolean).join(' ') + ` ${xPos(last)},${h - pad.b}`;
    const dots = points.map((p, i) => p[valueKey] !== null
      ? `<circle cx="${xPos(i)}" cy="${ys(p[valueKey])}" r="5" fill="${colorFn ? colorFn(p[valueKey]) : '#1a1a1a'}" stroke="white" stroke-width="2"/>`
      : '').join('');
    const yStep = maxVal <= 10 ? (maxVal <= 5 ? 1 : 2) : Math.ceil(maxVal / 4 / 1000) * 1000;
    const yTicks = [];
    for (let v = 0; v <= maxVal; v += yStep) yTicks.push(v);
    const yLines = yTicks.map(v =>
      `<line x1="${pad.l}" y1="${ys(v)}" x2="${w - pad.r}" y2="${ys(v)}" stroke="var(--border)" stroke-width="1"/>
       <text x="${pad.l - 4}" y="${ys(v) + 4}" text-anchor="end" font-size="9" fill="var(--muted)">${v >= 1000 ? (v/1000)+'k' : v}</text>`
    ).join('');
    const xLabels = points.map((p, i) =>
      `<text x="${xPos(i)}" y="${h - 4}" text-anchor="middle" font-size="9" fill="var(--muted)">${p.label}</text>`
    ).join('');
    return `<div class="chart-wrap"><svg viewBox="0 0 ${w} ${h}" class="chart-svg" preserveAspectRatio="none">
      ${yLines}
      <polygon points="${areaPoints}" fill="#1a1a1a" opacity="0.07"/>
      <polyline points="${linePoints}" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}${xLabels}
    </svg></div>`;
  }

  // Steps chart data
  function getThisWeekStepPoints() {
    const today = new Date();
    const dow = (today.getDay() + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - dow);
    monday.setHours(0, 0, 0, 0);
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const points = [];
    for (let i = 0; i <= dow; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const key = d.toISOString().slice(0, 10);
      const day = state.data[key];
      const steps = (day && day.steps != null && day.steps > 0) ? day.steps : null;
      points.push({ label: dayNames[i], steps });
    }
    return points;
  }

  const stepPoints = getThisWeekStepPoints();
  const maxSteps = Math.max(10000, ...stepPoints.map(p => p.steps || 0));
  const painChartHtml = buildLineChart(thisWeekPoints, 'score', 10, painColor);
  const stepsChartHtml = buildLineChart(stepPoints, 'steps', maxSteps, null);

  // ── Calendar helpers ──────────────────────────────────────────────────────
  const plan = getActivePlan();
  const planExercises = plan ? plan.exercises || [] : [];
  const today = new Date(); today.setHours(0,0,0,0);

  function buildCalendar(year, month) {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    // Mon-start offset
    const startDow = (first.getDay() + 6) % 7;
    const dayHeaders = ['M','T','W','T','F','S','S'].map(d =>
      `<div style="text-align:center;font-size:11px;font-weight:600;color:var(--muted);padding:4px 0">${d}</div>`
    ).join('');
    const cells = [];
    // empty cells before first
    for (let i = 0; i < startDow; i++) cells.push(`<div></div>`);
    for (let day = 1; day <= last.getDate(); day++) {
      const key = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      const d = state.data[key] || {};
      const ps = getEffectivePainScore(d);
      const isTod = key === todayKey();
      const isSel = key === historySelectedDay;
      const dot = ps !== null
        ? `<div style="width:18px;height:18px;border-radius:50%;background:${painColor(ps)};display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:600;color:#fff;margin:1px auto 0">${ps}</div>`
        : `<div style="height:19px"></div>`;
      cells.push(`
        <div onclick="selectHistoryDay('${key}')" style="
          text-align:center;padding:4px 2px;border-radius:6px;cursor:pointer;
          ${isSel ? 'background:var(--black);' : isTod ? 'background:var(--blue-bg);' : ''}
          ${key > todayKey() ? 'opacity:0.3;pointer-events:none;' : ''}
        ">
          <div style="font-size:12px;font-weight:${isTod ? '700' : '400'};color:${isSel ? 'var(--bg)' : 'var(--black)'}">${day}</div>
          ${dot}
        </div>`);
    }
    const nowDate = new Date();
    const isCurrentMonth = nowDate.getFullYear() === year && nowDate.getMonth() === month;
    const prevDisabled = year < 2024 && month < 1;
    return `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <button onclick="shiftCalMonth(-1)" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--black);padding:0 6px">‹</button>
        <div style="font-weight:600;font-size:15px;color:var(--black)">${monthNames[month]} ${year}</div>
        <button onclick="shiftCalMonth(1)" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--black);padding:0 6px;${isCurrentMonth ? 'opacity:0.3;pointer-events:none' : ''}">›</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px">
        ${dayHeaders}
        ${cells.join('')}
      </div>`;
  }

  const calYear = historyCalYear;
  const calMonth = historyCalMonth;
  const calHtml = buildCalendar(calYear, calMonth);

  // ── Day edit panel ────────────────────────────────────────────────────────
  function buildDayPanel(k) {
    if (!k) return `<div style="color:var(--muted);font-size:13px;text-align:center;padding:16px 0">Tap a day to view or edit it</div>`;
    const d = state.data[k] || {};
    const amVal = d.painScoreMorning !== null && d.painScoreMorning !== undefined ? d.painScoreMorning : (d.painScore !== null && d.painScore !== undefined ? d.painScore : 5);
    const pmVal = d.painScoreEvening !== null && d.painScoreEvening !== undefined ? d.painScoreEvening : 5;
    const exerciseChecks = planExercises.length ? `
      <div style="font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px">Exercises</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        ${planExercises.map(ex => {
          const exLib = EXERCISE_LIBRARY.find(e => e.id === ex.id) || {};
          const checked = !!(d.exercises && d.exercises[ex.id]);
          return `<label style="display:flex;align-items:center;gap:8px;cursor:pointer">
            <input type="checkbox" id="hist-ex-${k}-${ex.id}" ${checked ? 'checked' : ''} style="width:16px;height:16px;accent-color:var(--black)">
            <span style="font-size:13px">${exLib.name || ex.id}${ex.sets ? `<span style="color:var(--muted);font-size:11px"> · ${ex.sets}</span>` : ''}</span>
          </label>`;
        }).join('')}
      </div>` : '';
    return `
      <div style="border-top:1px solid var(--border);margin-top:10px;padding-top:12px">
        <div style="font-weight:600;font-size:14px;color:var(--black);margin-bottom:10px">${k === todayKey() ? 'Today' : formatDate(k)}</div>
        <div style="font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px">AM Pain Score</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <input type="range" min="0" max="10" step="1" value="${amVal}" style="flex:1" oninput="this.nextElementSibling.textContent=this.value" id="hist-pain-morning-${k}">
          <span style="font-size:16px;font-weight:700;min-width:24px;text-align:center">${amVal}</span>
        </div>
        <div style="font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px">PM Pain Score</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <input type="range" min="0" max="10" step="1" value="${pmVal}" style="flex:1" oninput="this.nextElementSibling.textContent=this.value" id="hist-pain-evening-${k}">
          <span style="font-size:16px;font-weight:700;min-width:24px;text-align:center">${pmVal}</span>
        </div>
        ${exerciseChecks}
        <div style="font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px">Journal Note</div>
        <textarea class="journal-textarea" style="min-height:80px" id="hist-journal-${k}" placeholder="How did this session feel?">${d.journal || ''}</textarea>
        <button class="save-btn" style="margin-top:8px" onclick="saveHistoryEdit('${k}')">Save Changes</button>
      </div>`;
  }

  // ── Achievements ────────────────────────────────────────────────────────
  // Longest week streak (already have calcWeekStreak but need to know peak)
  // Walk all weeks to find longest streak, peak step week, peak exercise week
  function calcAllWeekStreaks() {
    // collect all Monday-anchored weeks that have at least 1 pain score
    const allKeys = Object.keys(state.data).sort();
    if (!allKeys.length) return { longestStreak: 0, longestStreakDate: null };
    // build set of week start dates (Mon) that have data
    const weekSet = {};
    allKeys.forEach(k => {
      const d = new Date(k); d.setHours(0,0,0,0);
      const dow = (d.getDay() + 6) % 7;
      const mon = new Date(d); mon.setDate(d.getDate() - dow);
      const wk = mon.toISOString().slice(0,10);
      if (!weekSet[wk]) weekSet[wk] = 0;
      if (getEffectivePainScore(state.data[k]) !== null) weekSet[wk]++;
    });
    const weeks = Object.keys(weekSet).sort();
    let best = 0, cur = 0, bestEndWeek = null;
    for (let i = 0; i < weeks.length; i++) {
      if (weekSet[weeks[i]] > 0) {
        // check consecutive (7 days apart)
        if (i > 0) {
          const prev = new Date(weeks[i-1]); prev.setDate(prev.getDate() + 7);
          const curr = new Date(weeks[i]);
          if (prev.toISOString().slice(0,10) === weeks[i]) { cur++; } else { cur = 1; }
        } else { cur = 1; }
        if (cur > best) { best = cur; bestEndWeek = weeks[i]; }
      } else { cur = 0; }
    }
    return { longestStreak: best, longestStreakDate: bestEndWeek };
  }

  function calcLongestPainStreak() {
    const allKeys = Object.keys(state.data).sort();
    let best = 0, cur = 0, prev = null, bestEndKey = null;
    for (const k of allKeys) {
      const score = state.data[k] ? (state.data[k].painScoreMorning ?? null) : null;
      if (score === null) { cur = 0; prev = null; continue; }
      if (prev === null || score <= prev) { cur++; } else { cur = 1; }
      prev = score;
      if (cur > best) { best = cur; bestEndKey = k; }
    }
    return { longestStreak: best, longestStreakDate: bestEndKey };
  }

  function calcBestStepWeek() {
    const weekTotals = {};
    Object.keys(state.data).forEach(k => {
      const d = new Date(k); d.setHours(0,0,0,0);
      const dow = (d.getDay() + 6) % 7;
      const mon = new Date(d); mon.setDate(d.getDate() - dow);
      const wk = mon.toISOString().slice(0,10);
      const steps = state.data[k].steps || 0;
      weekTotals[wk] = (weekTotals[wk] || 0) + steps;
    });
    let best = 0, bestWeek = null;
    Object.entries(weekTotals).forEach(([wk, total]) => {
      if (total > best) { best = total; bestWeek = wk; }
    });
    return { total: best, weekDate: bestWeek };
  }

  function calcBestExerciseWeek() {
    const weekTotals = {};
    Object.keys(state.data).forEach(k => {
      const d = new Date(k); d.setHours(0,0,0,0);
      const dow = (d.getDay() + 6) % 7;
      const mon = new Date(d); mon.setDate(d.getDate() - dow);
      const wk = mon.toISOString().slice(0,10);
      const count = Object.values(state.data[k].exercises || {}).filter(Boolean).length;
      weekTotals[wk] = (weekTotals[wk] || 0) + count;
    });
    let best = 0, bestWeek = null;
    Object.entries(weekTotals).forEach(([wk, total]) => {
      if (total > best) { best = total; bestWeek = wk; }
    });
    return { total: best, weekDate: bestWeek };
  }

  function fmtWeek(monKey) {
    if (!monKey) return '–';
    const d = new Date(monKey);
    const sun = new Date(d); sun.setDate(d.getDate() + 6);
    const fmt = dt => dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return `w/c ${fmt(d)}`;
  }

  const wsStreak = calcAllWeekStreaks();
  const painStreak = calcLongestPainStreak();
  const bestSteps = calcBestStepWeek();
  const bestEx = calcBestExerciseWeek();

  const achievementsHtml = `
    <div class="section-title">Achievements</div>
    <div class="card">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--gap)">
        <div style="background:var(--blue-bg);border-radius:var(--radius-sm);padding:10px 12px">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--muted);margin-bottom:4px">📅 Longest Week Streak</div>
          <div style="font-size:26px;font-weight:400;color:var(--black);line-height:1">${wsStreak.longestStreak}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px">${wsStreak.longestStreakDate ? fmtWeek(wsStreak.longestStreakDate) : 'No data yet'}</div>
        </div>
        <div style="background:var(--blue-bg);border-radius:var(--radius-sm);padding:10px 12px">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--muted);margin-bottom:4px">📉 Longest Pain Streak</div>
          <div style="font-size:26px;font-weight:400;color:var(--black);line-height:1">${painStreak.longestStreak}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px">${painStreak.longestStreakDate ? formatDate(painStreak.longestStreakDate) : 'No data yet'}</div>
        </div>
        <div style="background:var(--blue-bg);border-radius:var(--radius-sm);padding:10px 12px">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--muted);margin-bottom:4px">👟 Best Step Week</div>
          <div style="font-size:26px;font-weight:400;color:var(--black);line-height:1">${bestSteps.total > 0 ? bestSteps.total.toLocaleString() : '–'}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px">${bestSteps.weekDate ? fmtWeek(bestSteps.weekDate) : 'No data yet'}</div>
        </div>
        <div style="background:var(--blue-bg);border-radius:var(--radius-sm);padding:10px 12px">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--muted);margin-bottom:4px">💪 Best Exercise Week</div>
          <div style="font-size:26px;font-weight:400;color:var(--black);line-height:1">${bestEx.total > 0 ? bestEx.total : '–'}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px">${bestEx.weekDate ? fmtWeek(bestEx.weekDate) : 'No data yet'}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('screen-history').innerHTML = `
    ${weeklyStatsHtml}
    <div class="section-title">This Week's Trends</div>
    <div class="card" style="padding:0;overflow:hidden">
      <div class="chart-tabs">
        <button class="chart-tab active" id="chart-tab-pain" onclick="switchChartTab('pain')">Pain Score</button>
        <button class="chart-tab" id="chart-tab-steps" onclick="switchChartTab('steps')">Steps</button>
      </div>
      <div class="chart-slider" id="chart-slider">
        <div class="chart-slide" id="chart-pain">${painChartHtml}</div>
        <div class="chart-slide" id="chart-steps">${stepsChartHtml}</div>
      </div>
    </div>
    ${achievementsHtml}
    <div class="section-title">Daily Log</div>
    <div class="card" id="cal-card">
      ${calHtml}
      <div id="cal-day-panel">${buildDayPanel(historySelectedDay)}</div>
    </div>
  `;
}

// ── Calendar view state ────────────────────────────────────────────────────
let historyCalYear = new Date().getFullYear();
let historyCalMonth = new Date().getMonth();
let historySelectedDay = null;

function shiftCalMonth(dir) {
  historyCalMonth += dir;
  if (historyCalMonth > 11) { historyCalMonth = 0; historyCalYear++; }
  if (historyCalMonth < 0)  { historyCalMonth = 11; historyCalYear--; }
  historySelectedDay = null;
  renderHistory();
}

function selectHistoryDay(k) {
  historySelectedDay = historySelectedDay === k ? null : k;
  renderHistory();
  if (historySelectedDay) {
    setTimeout(() => document.getElementById('cal-day-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
}

function switchChartTab(tab) {
  document.getElementById('chart-slider').style.transform = tab === 'steps' ? 'translateX(-50%)' : 'translateX(0)';
  document.getElementById('chart-tab-pain').classList.toggle('active', tab === 'pain');
  document.getElementById('chart-tab-steps').classList.toggle('active', tab === 'steps');
}

function saveHistoryEdit(k) {
  const morningVal = parseInt(document.getElementById('hist-pain-morning-' + k).value);
  const eveningVal = parseInt(document.getElementById('hist-pain-evening-' + k).value);
  const journalVal = document.getElementById('hist-journal-' + k).value.trim();
  const day = getDay(k);
  day.painScoreMorning = morningVal;
  day.painScoreEvening = eveningVal;
  day.journal = journalVal;
  // Save exercise checkboxes
  const plan = getActivePlan();
  if (plan && plan.exercises) {
    if (!day.exercises) day.exercises = {};
    plan.exercises.forEach(ex => {
      const cb = document.getElementById(`hist-ex-${k}-${ex.id}`);
      if (cb) day.exercises[ex.id] = cb.checked;
    });
  }
  save();
  showToast('Entry updated');
  renderHistory();
}

// ── SETTINGS SCREEN ────────────────────────────────────────────────────────
function renderSettings() {
  const { reminders, journalReminders, notificationsEnabled } = state.settings;

  const reminderItems = reminders.map((t, i) => `
    <div class="reminder-item">
      <input type="time" value="${t}" onchange="updateReminder(${i}, this.value)">
      <button class="icon-btn" style="background:var(--border);color:var(--text)" onclick="removeReminder(${i})">✕</button>
    </div>
  `).join('');

  const journalReminderItems = journalReminders.map((t, i) => `
    <div class="reminder-item">
      <input type="time" value="${t}" onchange="updateJournalReminder(${i}, this.value)">
      <button class="icon-btn" style="background:var(--border);color:var(--text)" onclick="removeJournalReminder(${i})">✕</button>
    </div>
  `).join('');

  document.getElementById('screen-settings').innerHTML = `
    <div class="section-title">Settings</div>

    <div class="card">
      <div class="card-title" style="margin-bottom:12px">Notifications</div>
      <div class="setting-row" style="padding-top:0">
        <div>
          <div class="setting-label">Enable Notifications</div>
          <div class="setting-sub">Get reminded to exercise and journal</div>
        </div>
        <label class="toggle">
          <input type="checkbox" id="notif-toggle" ${notificationsEnabled ? 'checked' : ''} onchange="toggleNotifications(this.checked)">
          <div class="toggle-track"></div>
        </label>
      </div>

      <div id="reminder-section" style="${notificationsEnabled ? '' : 'opacity:0.4;pointer-events:none'}">
        <div class="card-title" style="margin-top:16px;margin-bottom:8px">Exercise Reminders</div>
        <div class="reminder-list" id="reminder-list">${reminderItems}</div>
        <button class="add-reminder-btn" onclick="addReminder()">+ Add Time</button>

        <div class="card-title" style="margin-top:16px;margin-bottom:8px">Journal Reminders</div>
        <div class="reminder-list" id="journal-reminder-list">${journalReminderItems}</div>
        <button class="add-reminder-btn" onclick="addJournalReminder()">+ Add Time</button>
      </div>

      <div class="notif-info" id="notif-info" style="${notificationsEnabled ? '' : 'display:none'}">
        Open the app from your home screen icon for reliable notifications.
      </div>
    </div>

    <div class="card" style="margin-top:0">
      <div class="card-title" style="margin-bottom:12px">Appearance</div>
      <div class="setting-row" style="padding-top:0">
        <div>
          <div class="setting-label">Dark Mode</div>
          <div class="setting-sub">Switch to a darker colour scheme</div>
        </div>
        <label class="toggle">
          <input type="checkbox" id="dark-mode-toggle" ${state.settings.darkMode ? 'checked' : ''} onchange="toggleDarkMode(this.checked)">
          <div class="toggle-track"></div>
        </label>
      </div>
    </div>
  `;
}

function toggleDarkMode(on) {
  state.settings.darkMode = on;
  saveSettings();
  document.documentElement.setAttribute('data-theme', on ? 'dark' : 'light');
}

function updateStartDate(val) {
  state.settings.programStartDate = val || null;
  saveSettings();
  renderSettings();
  showToast('Start date saved');
}

async function toggleNotifications(enabled) {
  if (enabled) {
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      state.settings.notificationsEnabled = false;
      document.getElementById('notif-toggle').checked = false;
      showToast('Notification permission denied');
      return;
    }
    state.settings.notificationsEnabled = true;
    scheduleNotifications();
    showToast('Reminders enabled');
  } else {
    state.settings.notificationsEnabled = false;
    showToast('Reminders disabled');
  }
  saveSettings();
  document.getElementById('reminder-section').style.opacity = enabled ? '' : '0.4';
  document.getElementById('reminder-section').style.pointerEvents = enabled ? '' : 'none';
  const info = document.getElementById('notif-info');
  if (info) info.style.display = enabled ? '' : 'none';
}

function updateReminder(i, val) {
  state.settings.reminders[i] = val;
  saveSettings();
  if (state.settings.notificationsEnabled) scheduleNotifications();
}

function removeReminder(i) {
  state.settings.reminders.splice(i, 1);
  saveSettings();
  if (state.settings.notificationsEnabled) scheduleNotifications();
  renderSettings();
}

function addReminder() {
  state.settings.reminders.push('12:00');
  saveSettings();
  renderSettings();
  if (state.settings.notificationsEnabled) scheduleNotifications();
}

function updateJournalReminder(i, val) {
  state.settings.journalReminders[i] = val;
  saveSettings();
  if (state.settings.notificationsEnabled) scheduleNotifications();
}

function removeJournalReminder(i) {
  state.settings.journalReminders.splice(i, 1);
  saveSettings();
  if (state.settings.notificationsEnabled) scheduleNotifications();
  renderSettings();
}

function addJournalReminder() {
  state.settings.journalReminders.push('21:00');
  saveSettings();
  renderSettings();
  if (state.settings.notificationsEnabled) scheduleNotifications();
}

function scheduleNotifications() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SCHEDULE_NOTIFICATIONS',
      times: state.settings.reminders,
      journalTimes: state.settings.journalReminders
    });
  }
}

// ── FAQ SCREEN ─────────────────────────────────────────────────────────────
function renderFaq() {
  const faqs = [
    {
      q: 'When should I apply ice to the injury?',
      a: 'Apply ice in the first 48–72 hours after an acute flare-up, after exercise if the tendon feels hot or swollen, or any time there is a noticeable increase in pain or inflammation. Use a cloth-covered ice pack for 15–20 minutes, up to 3–4 times per day. Never apply ice directly to skin.'
    },
    {
      q: 'When should I apply heat to the injury?',
      a: 'Use heat before exercise to warm up the tendon and surrounding muscles, or for chronic stiffness and aching with no active swelling. Apply for 15–20 minutes. Avoid heat if the area feels warm, swollen, or if symptoms have recently worsened — use ice instead.'
    },
    {
      q: 'When should I reduce my rehab plan?',
      a: 'Reduce load or volume if your morning pain score rises above 4/10 on two or more consecutive days, if pain during exercise exceeds 4–5/10, if swelling increases, or if pain continues more than 30 minutes after finishing a session. It is better to step back briefly than to push through and cause a setback.'
    },
    {
      q: 'When should I increase my rehab plan?',
      a: 'Progress your plan when morning pain scores are consistently 2/10 or below for at least 5–7 days, you can complete all exercises with pain staying below 3/10, and there is no increased soreness the morning after a session. Increase load gradually — no more than 10% per week.'
    },
    {
      q: 'What is the difference between morning and evening pain?',
      a: 'Morning pain (start-up pain) that eases within a few minutes of walking is typical for PTT and does not mean you should stop exercising. Persistent or worsening pain throughout the day, or pain that is higher in the evening than the morning, suggests the tendon is being overloaded and the plan should be reviewed.'
    },
    {
      q: 'Should I exercise through pain?',
      a: 'Mild discomfort up to 3–4/10 during exercise is generally acceptable with tendon rehab. Pain above 5/10 during exercise, or any sharp or sudden pain, means you should stop that exercise for the day. The goal is to load the tendon enough to stimulate healing without provoking it.'
    },
    {
      q: 'How long does recovery typically take?',
      a: 'Posterior tibial tendinopathy typically takes 3–6 months of consistent rehab to achieve meaningful improvement. Early-stage (Stage 1) cases can recover sooner; more advanced cases may take longer. Consistency with the programme and avoiding aggravating activities are the biggest factors in recovery speed.'
    },
    {
      q: 'What footwear should I wear?',
      a: 'Wear supportive footwear with a firm heel counter and good arch support at all times — including first thing in the morning. Avoid flat shoes, flip-flops, and going barefoot, especially on hard floors. An orthotic or medial arch support insert is often recommended alongside rehab.'
    },
    {
      q: 'When should I seek medical advice?',
      a: 'See a physiotherapist or doctor if pain scores are not improving after 4–6 weeks of consistent rehab, if there is significant swelling or bruising, if you cannot bear weight normally, or if pain is getting progressively worse. A physiotherapist can assess your stage and adjust the plan accordingly.'
    }
  ];

  document.getElementById('screen-faq').innerHTML = `
    <div class="section-title">FAQ</div>
    <div class="card" style="padding:0;overflow:hidden">
      ${faqs.map((item, i) => `
        <div class="faq-item" onclick="this.classList.toggle('open')" style="${i < faqs.length - 1 ? 'border-bottom:1px solid var(--border)' : ''}">
          <div class="faq-question">
            ${item.q}
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="faq-answer">${item.a}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── INIT ───────────────────────────────────────────────────────────────────
function buildShell() {
  document.getElementById('app').innerHTML = `
    <header class="app-header">
      <div style="display:flex;align-items:center;gap:10px;min-width:0">
        <img src="favicon_io-3/apple-touch-icon.png" alt="" style="width:34px;height:34px;border-radius:8px;flex-shrink:0">
        <h1>Sam's Rehab Tracker</h1>
      </div>
      <div class="date-badge" id="header-date"></div>
    </header>
    <div class="screens">
      <div class="screen active" id="screen-home"></div>
      <div class="screen" id="screen-exercises"></div>
      <div class="screen" id="screen-journal"></div>
      <div class="screen" id="screen-history"></div>
      <div class="screen" id="screen-settings"></div>
      <div class="screen" id="screen-faq"></div>
    </div>
    <nav class="bottom-nav">
      <button class="nav-btn active" id="nav-home" onclick="navigate('home')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Home
      </button>
      <button class="nav-btn" id="nav-exercises" onclick="navigate('exercises')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v16M18 4v16"/><rect x="2" y="7" width="4" height="10" rx="1"/><rect x="18" y="7" width="4" height="10" rx="1"/><line x1="6" y1="12" x2="18" y2="12"/></svg>
        Exercises
      </button>
      <button class="nav-btn" id="nav-journal" onclick="navigate('journal')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Journal
      </button>
      <button class="nav-btn" id="nav-history" onclick="navigate('history')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        History
      </button>
      <button class="nav-btn" id="nav-faq" onclick="navigate('faq')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        FAQ
      </button>
      <button class="nav-btn" id="nav-settings" onclick="navigate('settings')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Settings
      </button>
    </nav>
    <div class="toast" id="toast"></div>
  `;

  const dateEl = document.getElementById('header-date');
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

async function init() {
  if (state.settings.darkMode) document.documentElement.setAttribute('data-theme', 'dark');
  buildShell();
  renderHome();

  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
      await navigator.serviceWorker.ready;
      if (state.settings.notificationsEnabled && Notification.permission === 'granted') {
        scheduleNotifications();
      }
    } catch (e) {
      console.warn('SW registration failed:', e);
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
