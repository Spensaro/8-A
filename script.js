// ============================================================
//  SCRIPT.JS - XII IPA 2 SMAN 00 JKT
// ============================================================

// ── JADWAL DATA ──────────────────────────────────────────────
const jadwalData = {
  Senin: [
    { mapel: "Upacara",                jam: "06.45 – 07.40" },
    { mapel: "IPA",                    jam: "07.40 – 08.20" },
    { mapel: "IPA",                    jam: "08.20 – 09.00" },       
    { mapel: "IPA",                    jam: "09.00 – 09.40" },
    { mapel: "ISTIRAHAT 🎉",           jam: "09.40 – 10.00" },
    { mapel: "Bahasa Indonesia",       jam: "10.00 – 10.40" },
    { mapel: "Bahasa Indonesia",       jam: "10.40 – 11.20" },
    { mapel: "IPS",                    jam: "11.20 – 12.00" },
    { mapel: "IPS",                    jam: "12.00 – 12.40" },
  ],
  Selasa: [
    { mapel: "Literasi",               jam: "07.00 – 07.15" },
    { mapel: "Bahasa Indonesia",       jam: "07.15 – 07.55" },
    { mapel: "Bahasa indonesia",       jam: "07.55 – 08.35" },
    { mapel: "Matematika",             jam: "08.35 – 09.15" },
    { mapel: "Matematika",             jam: "09.15 – 09.55" },
    { mapel: "ISTIRAHAT 🎉",           jam: "09.55 – 10.15" },
    { mapel: "Matematika",             jam: "10.15 – 10.55" },
    { mapel: "PAI",                    jam: "10.55 – 11.35" },
    { mapel: "PAI",                    jam: "11.35 – 12.15" },
    { mapel: "PAI",                    jam: "12.15 – 12.55" },
  ],
  Rabu: [
    { mapel: "Literasi",               jam: "07.00 – 07.15" },
    { mapel: "Matematika",             jam: "07.15 - 07.55" },
    { mapel: "Matematika",              jam: "07.55 – 08.35" },
    { mapel: "Bahasa Indonesia",        jam: "08.35 – 09.15" },
    { mapel: "Bahasa indonesia",        jam: "09.15 – 09.55" },
    { mapel: "ISTIRAHAT 🎉",            jam: "09.55 – 10.15" },
    { mapel: "Bahasa Jawa",             jam: "10.15 – 10.55" },
    { mapel: "Bahasa Jawa",             jam: "10.55 – 11.35" },
    { mapel: "Bahasa Inggris",          jam: "11.35 – 12.15" },
    { mapel: "Bahasa Inggria",          jam: "12.15 – 12.55" },
  ],
  Kamis: [
    { mapel: "Literasi",               jam: "07.00 – 07.15" },
    { mapel: "Prakarya",               jam: "07.15 – 07.55" },
    { mapel: "Prakarya",               jam: "07.55 – 08.35" },
    { mapel: "Prakarya",               jam: "08.35 – 09.15" },
    { mapel: "PPKN",                   jam: "09.15 – 09.55" },
    { mapel: "ISTIRAHAT 🎉",           jam: "09.55 – 10.15" },
    { mapel: "PPKN",                   jam: "10.15 – 10.55" },
    { mapel: "IPS",                    jam: "10.55 – 11.35" },
    { mapel: "IPS",                    jam: "11.35 – 12.15" },
  ],
  Jumat: [
    { mapel: "JUMAT BERSIH",           jam: "07.00 – 07.20" },
    { mapel: "PJOK",                   jam: "07.20 – 08.00" },
    { mapel: "PJOK",                   jam: "08.00 – 08.40" },
    { mapel: "PJOK",                   jam: "08.40 – 09.20" },
    { mapel: "ISTIRAHAT 🎉",           jam: "09.20 – 09.40 " },
    { mapel: "Bahasa Inggris",         jam: "09.40 – 10.20" },
    { mapel: "Bahasa Inggris",         jam: "10.20 – 11.00" },
  ],
  Sabtu: [
    { mapel: "INFORMATIKA",            jam: "07.00 – 07.40" },
    { mapel: "INFORMATIKA",            jam: "07.40 – 08.20" },
    { mapel: "INFORMATIKA",            jam: "08.20 – 09.00" },
    { mapel: "IPA",                    jam: "09.00 – 09.40" },
    { mapel: "ISTIRAHAT 🎉",           jam: "09.40 – 10.00" },
    { mapel: "IPA",                    jam: "10.00 – 10.40" },
    { mapel: "PPKN",                   jam: "10.40 – 11.20" },
    { mapel: "BK",                     jam: "11.20 – 12.00" },
  ],
};

// ── QUIZ DATA ────────────────────────────────────────────────
const quizData = {
  IPA: [
    {
      soal: "Apa simbol kimia untuk air?",
      opsi: ["H₂O", "CO₂", "NaCl", "O₂"],
      jawaban: 0
    },
    {
      soal: "Hukum Newton I menyatakan bahwa benda diam akan tetap diam jika…",
      opsi: ["Tidak ada gaya luar", "Diberi dorongan", "Terkena gravitasi", "Bergerak konstan"],
      jawaban: 0
    },
    {
      soal: "Organel sel yang berfungsi sebagai pusat energi sel adalah…",
      opsi: ["Ribosom", "Nukleus", "Mitokondria", "Lisosom"],
      jawaban: 2
    },
    {
      soal: "Reaksi di mana zat melepas elektron disebut…",
      opsi: ["Reduksi", "Oksidasi", "Hidrolisis", "Netralisasi"],
      jawaban: 1
    },
    {
      soal: "Kecepatan cahaya di ruang hampa adalah sekitar…",
      opsi: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      jawaban: 1
    },
    {
      soal: "Proses fotosintesis menghasilkan…",
      opsi: ["CO₂ dan H₂O", "O₂ dan Glukosa", "N₂ dan ATP", "H₂ dan CH₄"],
      jawaban: 1
    },
    {
      soal: "pH larutan bersifat asam adalah…",
      opsi: ["pH = 7", "pH > 7", "pH < 7", "pH = 14"],
      jawaban: 2
    },
    {
      soal: "Rumus gaya dalam hukum Newton II adalah…",
      opsi: ["F = m/a", "F = m × a", "F = a/m", "F = m + a"],
      jawaban: 1
    },
    {
      soal: "Bagian terkecil dari suatu unsur yang masih memiliki sifat unsur tersebut adalah…",
      opsi: ["Molekul", "Ion", "Atom", "Proton"],
      jawaban: 2
    },
    {
      soal: "Contoh gelombang elektromagnetik adalah…",
      opsi: ["Gelombang laut", "Sinar X", "Gelombang bunyi", "Gelombang air"],
      jawaban: 1
    }
  ],
  PAI: [
    {
      soal: "Rukun Islam yang pertama adalah…",
      opsi: ["Shalat", "Syahadat", "Zakat", "Puasa"],
      jawaban: 1
    },
    {
      soal: "Kitab suci umat Islam adalah…",
      opsi: ["Injil", "Taurat", "Zabur", "Al-Qur'an"],
      jawaban: 3
    },
    {
      soal: "Nabi terakhir dalam Islam adalah…",
      opsi: ["Nabi Isa", "Nabi Musa", "Nabi Muhammad SAW", "Nabi Ibrahim"],
      jawaban: 2
    },
    {
      soal: "Shalat wajib dilakukan berapa kali sehari?",
      opsi: ["3 kali", "4 kali", "5 kali", "6 kali"],
      jawaban: 2
    },
    {
      soal: "Zakat fitrah dikeluarkan pada bulan…",
      opsi: ["Syawal", "Rajab", "Ramadan", "Muharram"],
      jawaban: 2
    },
    {
      soal: "Arti dari kata 'Islam' secara bahasa adalah…",
      opsi: ["Iman", "Damai/Selamat", "Kuat", "Tunduk"],
      jawaban: 1
    },
    {
      soal: "Peristiwa Isra Mi'raj terjadi pada tanggal…",
      opsi: ["1 Muharram", "27 Rajab", "15 Sya'ban", "10 Ramadan"],
      jawaban: 1
    },
    {
      soal: "Hari kiamat termasuk dalam rukun iman ke…",
      opsi: ["Ke-3", "Ke-4", "Ke-5", "Ke-6"],
      jawaban: 2
    },
    {
      soal: "Sifat wajib Allah 'Al-Murid' artinya…",
      opsi: ["Maha Mendengar", "Maha Berkehendak", "Maha Kuasa", "Maha Bijaksana"],
      jawaban: 1
    },
    {
      soal: "Malaikat yang bertugas mencatat amal baik adalah…",
      opsi: ["Malaikat Mikail", "Malaikat Jibril", "Malaikat Raqib", "Malaikat Munkar"],
      jawaban: 2
    }
  ],
  MTK: [
    {
      soal: "Hasil dari 2³ × 2² adalah…",
      opsi: ["2⁵", "2⁶", "4⁵", "2⁴"],
      jawaban: 0
    },
    {
      soal: "Turunan dari f(x) = 3x² + 2x adalah…",
      opsi: ["6x", "6x + 2", "3x + 2", "6x²"],
      jawaban: 1
    },
    {
      soal: "Nilai sin 30° adalah…",
      opsi: ["√3/2", "1/2", "√2/2", "1"],
      jawaban: 1
    },
    {
      soal: "Jika log₂ 8 = x, maka nilai x adalah…",
      opsi: ["2", "3", "4", "8"],
      jawaban: 1
    },
    {
      soal: "Luas lingkaran dengan jari-jari 7 cm adalah…",
      opsi: ["22 cm²", "154 cm²", "44 cm²", "49 cm²"],
      jawaban: 1
    },
    {
      soal: "Akar-akar dari persamaan x² – 5x + 6 = 0 adalah…",
      opsi: ["x = 1 dan x = 6", "x = 2 dan x = 3", "x = -2 dan x = -3", "x = 0 dan x = 5"],
      jawaban: 1
    },
    {
      soal: "Jumlah deret aritmetika 1 + 2 + 3 + … + 100 adalah…",
      opsi: ["5000", "5050", "4950", "10100"],
      jawaban: 1
    },
    {
      soal: "Nilai dari ∫(2x) dx adalah…",
      opsi: ["x² + C", "2x + C", "x + C", "2 + C"],
      jawaban: 0
    },
    {
      soal: "cos 60° = …",
      opsi: ["√3/2", "1", "√2/2", "1/2"],
      jawaban: 3
    },
    {
      soal: "Determinan matriks [[2,1],[3,4]] adalah…",
      opsi: ["5", "8", "11", "14"],
      jawaban: 0
    }
  ],
  TIK: [
    {
      soal: "HTML singkatan dari…",
      opsi: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Method Language",
        "High Text Making Language"
      ],
      jawaban: 0
    },
    {
      soal: "Fungsi utama CPU dalam komputer adalah…",
      opsi: ["Menyimpan data", "Menampilkan gambar", "Memproses instruksi", "Mengirim data"],
      jawaban: 2
    },
    {
      soal: "Ekstensi file gambar yang umum digunakan adalah…",
      opsi: [".mp3", ".xlsx", ".jpg", ".docx"],
      jawaban: 2
    },
    {
      soal: "WWW dalam dunia internet kependekan dari…",
      opsi: ["World Wide Web", "Wide World Web", "Web World Wide", "World Web Wide"],
      jawaban: 0
    },
    {
      soal: "Perangkat lunak (software) yang digunakan untuk menjelajahi internet disebut…",
      opsi: ["Compiler", "Browser", "Operating System", "Driver"],
      jawaban: 1
    },
    {
      soal: "RAM adalah singkatan dari…",
      opsi: [
        "Read Access Memory",
        "Random Access Memory",
        "Rapid Access Memory",
        "Real Access Memory"
      ],
      jawaban: 1
    },
    {
      soal: "Bahasa pemrograman yang digunakan untuk styling web adalah…",
      opsi: ["JavaScript", "Python", "CSS", "SQL"],
      jawaban: 2
    },
    {
      soal: "1 Kilobyte (KB) = … byte",
      opsi: ["100", "512", "1000", "1024"],
      jawaban: 3
    },
    {
      soal: "IP Address terdiri dari berapa oktet?",
      opsi: ["2", "3", "4", "8"],
      jawaban: 2
    },
    {
      soal: "Tag HTML untuk membuat hyperlink adalah…",
      opsi: ["<link>", "<href>", "<a>", "<url>"],
      jawaban: 2
    }
  ]
};

// ── STATE ────────────────────────────────────────────────────
let currentPage   = 'home';
let currentSubject = null;
let currentQ      = 0;
let score         = 0;
let answered      = false;
let activeDay     = 'Senin';

// ── DOM HELPERS ──────────────────────────────────────────────
const $ = id => document.getElementById(id);
const showPage = id => {
  document.querySelectorAll('.page, .inner-page').forEach(p => p.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0, 0);
};

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTeacher();
  renderAnggota();
  renderGallery();
  renderJadwal(activeDay);
  showPage('home');
  setDefaultDay();
});

// ── TEACHER ──────────────────────────────────────────────────
function renderTeacher() {
  const el = $('teacher-section');
  if (!el) return;
  el.innerHTML = `
    <div class="teacher-card">
      <img class="teacher-avatar"
           src="${guru.foto}"
           alt="${guru.nama}"
           onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(guru.nama)}&background=2a3555&color=6c63ff&size=120'">
      <div class="teacher-info">
        <div class="label">🏫 Wali Kelas</div>
        <div class="name">${guru.nama}</div>
        <div class="mapel">${guru.mapel}</div>
      </div>
    </div>`;
}

// ── ANGGOTA ──────────────────────────────────────────────────
function renderAnggota() {
  const grid = $('anggota-grid');
  if (!grid) return;
  grid.innerHTML = anggotaKelas.map(s => `
    <div class="anggota-card">
      <div class="anggota-foto-wrap">
        <img class="anggota-foto"
             src="${s.foto}"
             alt="${s.nama}"
             onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(s.nama)}&background=1a2236&color=6c63ff&size=200'">
        <span class="absen-badge">${s.absen}</span>
      </div>
      <div class="anggota-info">
        <div class="anggota-nama">${s.nama}</div>
      </div>
    </div>
  `).join('');
}

// ── GALLERY ──────────────────────────────────────────────────
function renderGallery() {
  const list = $('gallery-list');
  if (!list) return;
  list.innerHTML = galeriKelas.map((g, i) => `
    <div class="gallery-item">
      <img class="gallery-img"
           src="${g.foto}"
           alt="${g.judul}"
           onerror="this.src='https://placehold.co/600x400/1a2236/6c63ff?text=Foto+${i+1}'">
      <div class="gallery-caption">
        <div class="gallery-judul">${g.judul}</div>
        <div class="gallery-desc">${g.deskripsi}</div>
      </div>
    </div>
  `).join('');
}

// ── JADWAL ───────────────────────────────────────────────────
function renderJadwal(day) {
  const list = $('jadwal-list');
  if (!list) return;
  const items = jadwalData[day] || [];
  list.innerHTML = items.map((item, i) => `
    <div class="jadwal-item">
      <div class="jadwal-num">${i + 1}</div>
      <div class="jadwal-mapel">${item.mapel}</div>
      <div class="jadwal-jam">${item.jam}</div>
    </div>
  `).join('');
}

function setDefaultDay() {
  const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const today = days[new Date().getDay()];
  const validDays = Object.keys(jadwalData);
  activeDay = validDays.includes(today) ? today : 'Senin';
  document.querySelectorAll('.jadwal-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.day === activeDay);
  });
  renderJadwal(activeDay);
}

function switchDay(day) {
  activeDay = day;
  document.querySelectorAll('.jadwal-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.day === day);
  });
  renderJadwal(day);
}

// ── NAVIGATION ───────────────────────────────────────────────
function goAnggota()  { showPage('page-anggota'); }
function goGame()     { showPage('page-game'); resetGame(); }
function goHome()     { showPage('home'); }

// ── MODALS ───────────────────────────────────────────────────
function openModal(id) {
  $(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  $(id).classList.remove('open');
  document.body.style.overflow = '';
}

// close on backdrop click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ── QUIZ ─────────────────────────────────────────────────────
function selectSubject(subject) {
  currentSubject = subject;
  currentQ  = 0;
  score     = 0;
  answered  = false;

  $('subject-select').style.display    = 'none';
  $('quiz-area').classList.add('active');
  $('quiz-result').classList.remove('show');
  $('game-back-btn').style.display     = 'none';

  renderQuestion();
}

function renderQuestion() {
  const questions = quizData[currentSubject];
  if (currentQ >= questions.length) { showResult(); return; }

  const q   = questions[currentQ];
  const pct = Math.round((currentQ / questions.length) * 100);

  $('quiz-progress-fill').style.width = pct + '%';
  $('quiz-progress-cur').textContent  = currentQ + 1;
  $('quiz-progress-tot').textContent  = questions.length;
  $('quiz-score-now').textContent     = score;
  $('quiz-subject-name').textContent  = currentSubject;

  const letters = ['A','B','C','D'];
  $('question-area').innerHTML = `
    <div class="question-card">
      <div class="question-no">Soal ${currentQ + 1} dari ${questions.length}</div>
      <div class="question-text">${q.soal}</div>
    </div>
    <div class="options-list" id="options-list">
      ${q.opsi.map((o, i) => `
        <button class="option-btn" onclick="pilihJawaban(${i})" id="opt-${i}">
          <span class="opt-letter">${letters[i]}</span>
          ${o}
        </button>
      `).join('')}
    </div>
    <div class="feedback-msg" id="feedback-msg"></div>
    <button class="next-btn" id="next-btn" onclick="nextQuestion()">
      ${currentQ + 1 < questions.length ? 'Pertanyaan Selanjutnya →' : 'Lihat Hasil 🎉'}
    </button>
  `;
  answered = false;
}

function pilihJawaban(idx) {
  if (answered) return;
  answered = true;

  const q       = quizData[currentSubject][currentQ];
  const correct = q.jawaban === idx;
  const fb      = $('feedback-msg');
  const nextBtn = $('next-btn');

  // Disable all
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  // Mark correct/wrong
  $(`opt-${idx}`).classList.add(correct ? 'correct' : 'wrong');
  if (!correct) $(`opt-${q.jawaban}`).classList.add('correct');

  fb.style.display  = 'block';
  fb.className      = 'feedback-msg ' + (correct ? 'correct' : 'wrong');
  fb.textContent    = correct ? '✅ Jawaban Benar!' : `❌ Salah! Jawaban: ${q.opsi[q.jawaban]}`;

  if (correct) score++;
  nextBtn.style.display = 'block';
}

function nextQuestion() {
  currentQ++;
  renderQuestion();
}

function showResult() {
  $('quiz-area').classList.remove('active');
  $('game-back-btn').style.display = 'block';

  const total  = quizData[currentSubject].length;
  const pct    = Math.round((score / total) * 100);
  let emoji = '😢', msg = 'Terus semangat belajar!';
  if (pct >= 90) { emoji = '🏆'; msg = 'Luar biasa! Nilai sempurna!'; }
  else if (pct >= 70) { emoji = '🎉'; msg = 'Bagus sekali! Pertahankan!'; }
  else if (pct >= 50) { emoji = '👍'; msg = 'Lumayan! Bisa lebih baik lagi!'; }

  const res = $('quiz-result');
  res.innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-title">${msg}</div>
    <div class="result-score">${pct}<span style="font-size:24px">%</span></div>
    <div class="result-sub">${score} dari ${total} soal benar · Mata pelajaran: ${currentSubject}</div>
    <button class="replay-btn" onclick="resetGame()">🔄 Main Lagi</button>
  `;
  res.classList.add('show');
}

function resetGame() {
  currentSubject = null;
  currentQ = 0;
  score = 0;
  $('subject-select').style.display = 'grid';
  $('quiz-area').classList.remove('active');
  const res = $('quiz-result');
  if (res) { res.classList.remove('show'); res.innerHTML = ''; }
  $('game-back-btn').style.display = 'block';
  $('question-area').innerHTML = '';
}
