/* Panduan penggunaan (onboarding).
   - Muncul otomatis pada kunjungan pertama.
   - Bisa dibuka lagi kapan saja lewat tombol "?" di header.
   - Dua bahasa (ID/EN), mengikuti variabel global LANG dari i18n.js.
   - Penanda "sudah dilihat" disimpan di localStorage terpisah (tidak ikut backup). */
(function () {
  var KEY = "sxs-intro-seen";
  var step = 0;
  var prevFocus = null;

  var UI = {
    id: {
      title: "Panduan penggunaan",
      step: "Langkah {n} dari {m}",
      back: "Kembali",
      next: "Lanjut",
      skip: "Lewati",
      done: "Mulai",
      open: "Buka tab",
    },
    en: {
      title: "User guide",
      step: "Step {n} of {m}",
      back: "Back",
      next: "Next",
      skip: "Skip",
      done: "Get started",
      open: "Open tab",
    },
  };

  var TABN = {
    id: { setup: "Akun", all: "Semua akun", cal: "Kalender", todo: "To-do", set: "Pengaturan" },
    en: { setup: "Accounts", all: "All accounts", cal: "Calendar", todo: "To-do", set: "Settings" },
  };

  var STEPS = {
    id: [
      {
        t: "Selamat datang",
        b:
          "<p>Website ini membantu Anda mencatat progres <b>Sword x Staff</b> untuk satu atau beberapa akun: " +
          "CP, level, Dawnium, jadwal event, gift code, dan to-do.</p>" +
          "<ul>" +
          "<li>Semua dihitung dalam <b>Day server</b>. Day 1 adalah tanggal server dibuka.</li>" +
          "<li>Pergantian hari terjadi pukul <b>06:00 WIB</b>.</li>" +
          "<li>Gunakan tab di bagian atas untuk berpindah fitur.</li>" +
          "</ul>",
      },
      {
        t: "Atur akun Anda",
        tab: "setup",
        b:
          "<p>Mulai dari tab <b>Akun</b>.</p>" +
          "<ul>" +
          "<li>Ketuk <b>✎</b> untuk mengubah nama, server, path job, serta level, CP, dan Dawnium.</li>" +
          "<li>Isi <b>Day 1</b> dengan tanggal server dibuka. Ini penting agar jadwal event cocok dengan hari server.</li>" +
          "<li>Tambah akun lain dengan <b>+ Tambah akun</b>. Pilih akun aktif lewat tombol nama di bawah tab.</li>" +
          "</ul>",
      },
      {
        t: "Catat progres harian",
        tab: "all",
        b:
          "<ul>" +
          "<li><b>Semua akun</b> menampilkan ringkasan hari ini. Ketuk <b>✎</b> untuk memperbarui CP, level, Dawnium, dan currency region.</li>" +
          "<li><b>Progres</b> menampilkan kartu per Day. Ketuk <b>✎</b> pada Day mana pun untuk mengisi data dan catatan untuk hari berikutnya.</li>" +
          "<li>Tanda ▲ dan ▼ menunjukkan perubahan dari catatan sebelumnya. Di Progres, tombol <b>Semua akun</b> menampilkan tabel perbandingan.</li>" +
          "</ul>",
      },
      {
        t: "Pantau jadwal",
        tab: "cal",
        b:
          "<ul>" +
          "<li><b>Kalender</b> menandai Region, Dungeon, Event, dan Job change dengan titik berwarna. Ketuk tanggal untuk melihat detailnya.</li>" +
          "<li><b>Jadwal</b> berisi daftar per season. Anda bisa mencari, memfilter, menambah, mengubah, atau mengimpor jadwal dari teks.</li>" +
          "<li>Kartu dungeon menunjukkan kekurangan CP untuk tingkat berikutnya.</li>" +
          "</ul>",
      },
      {
        t: "To-do dan Gift Code",
        tab: "todo",
        b:
          "<ul>" +
          "<li><b>To-do</b> adalah daftar tugas per akun. Beri region dan tool (Power, Vine, Key, Drill), lalu centang jika selesai.</li>" +
          "<li><b>Gift Code</b> menyimpan daftar kode. Centang akun yang sudah meredeem, salin kode dengan <b>⧉</b>. Kode otomatis pindah ke Kedaluwarsa setelah tanggalnya lewat.</li>" +
          "</ul>",
      },
      {
        t: "Simpan dan cadangkan data",
        tab: "set",
        b:
          "<p>Data hanya disimpan di <b>local storage</b> browser ini. Data hilang jika Anda menghapus data browser, dan tidak ikut berpindah ke perangkat lain.</p>" +
          "<ul>" +
          "<li>Di <b>Pengaturan</b>, pakai <b>Simpan data sebagai teks</b> untuk backup, dan <b>Muat data dari teks</b> untuk memulihkan.</li>" +
          "<li>Setelah menghapus atau memuat data, tombol <b>Urungkan</b> muncul sebentar untuk membatalkannya.</li>" +
          "<li>Ganti bahasa dengan tombol <b>EN / ID</b>. Buka panduan ini lagi kapan saja lewat tombol <b>?</b> di kanan atas.</li>" +
          "</ul>",
      },
    ],
    en: [
      {
        t: "Welcome",
        b:
          "<p>This website helps you track <b>Sword x Staff</b> progress for one or more accounts: " +
          "CP, level, Dawnium, event schedules, gift codes, and to-dos.</p>" +
          "<ul>" +
          "<li>Everything is counted in <b>server days</b>. Day 1 is the date the server opened.</li>" +
          "<li>The day rolls over at <b>06:00 AM WIB</b> (UTC+7).</li>" +
          "<li>Use the tabs at the top to switch between features.</li>" +
          "</ul>",
      },
      {
        t: "Set up your accounts",
        tab: "setup",
        b:
          "<p>Start with the <b>Accounts</b> tab.</p>" +
          "<ul>" +
          "<li>Tap <b>✎</b> to edit the name, server, job path, and level, CP, and Dawnium.</li>" +
          "<li>Set <b>Day 1</b> to the date the server opened. This keeps event schedules aligned with your server day.</li>" +
          "<li>Add more accounts with <b>+ Add account</b>. Pick the active account with the name buttons under the tabs.</li>" +
          "</ul>",
      },
      {
        t: "Log daily progress",
        tab: "all",
        b:
          "<ul>" +
          "<li><b>All accounts</b> shows today's summary. Tap <b>✎</b> to update CP, level, Dawnium, and region currency.</li>" +
          "<li><b>Progress</b> shows one card per day. Tap <b>✎</b> on any day to fill in data and a note for the next day.</li>" +
          "<li>▲ and ▼ show the change from the previous record. In Progress, the <b>All accounts</b> button shows a comparison table.</li>" +
          "</ul>",
      },
      {
        t: "Keep track of the schedule",
        tab: "cal",
        b:
          "<ul>" +
          "<li><b>Calendar</b> marks Regions, Dungeons, Events, and Job changes with colored dots. Tap a date for details.</li>" +
          "<li><b>Schedule</b> lists everything by season. You can search, filter, add, edit, or import schedules from text.</li>" +
          "<li>Dungeon cards show how much CP you are short of the next tier.</li>" +
          "</ul>",
      },
      {
        t: "To-do and Gift Codes",
        tab: "todo",
        b:
          "<ul>" +
          "<li><b>To-do</b> is a per-account task list. Assign a region and a tool (Power, Vine, Key, Drill), then tick it off when done.</li>" +
          "<li><b>Gift Code</b> keeps your code list. Tick the accounts that redeemed each code and copy a code with <b>⧉</b>. Codes move to Expired automatically after their date passes.</li>" +
          "</ul>",
      },
      {
        t: "Save and back up your data",
        tab: "set",
        b:
          "<p>Data is stored only in this browser's <b>local storage</b>. It is lost if you clear browser data, and it does not move to other devices.</p>" +
          "<ul>" +
          "<li>In <b>Settings</b>, use <b>Save data as text</b> to back up and <b>Load data from text</b> to restore.</li>" +
          "<li>After deleting or loading data, an <b>Undo</b> button appears briefly to cancel it.</li>" +
          "<li>Switch language with the <b>EN / ID</b> buttons. Reopen this guide any time with the <b>?</b> button at the top right.</li>" +
          "</ul>",
      },
    ],
  };

  function lang() {
    return LANG === "en" ? "en" : "id";
  }

  function wasSeen() {
    try {
      return localStorage.getItem(KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function markSeen() {
    try {
      localStorage.setItem(KEY, "1");
    } catch (e) {}
  }

  function el() {
    return document.getElementById("intro");
  }

  function dlgHtml() {
    var l = lang(),
      u = UI[l],
      list = STEPS[l],
      c = list[step],
      last = step === list.length - 1,
      dots = "";
    for (var i = 0; i < list.length; i++) dots += '<i class="' + (i === step ? "on" : "") + '"></i>';

    return (
      '<div class="dlgc intro" role="dialog" aria-modal="true" aria-labelledby="introT">' +
      '<div class="mu">' +
      u.title +
      " · " +
      u.step.replace("{n}", step + 1).replace("{m}", list.length) +
      "</div>" +
      '<h2 id="introT">' +
      c.t +
      "</h2>" +
      '<div class="intro-body">' +
      c.b +
      "</div>" +
      (c.tab
        ? '<div class="form"><button type="button" class="btn o" data-introtab="' +
          c.tab +
          '">' +
          u.open +
          " " +
          TABN[l][c.tab] +
          "</button></div>"
        : "") +
      '<div class="idots" aria-hidden="true">' +
      dots +
      "</div>" +
      '<div class="inav">' +
      (last ? "" : '<button type="button" class="btn o" data-intro="close">' + u.skip + "</button>") +
      '<span class="sp"></span>' +
      (step > 0 ? '<button type="button" class="btn o" data-intro="prev">' + u.back + "</button>" : "") +
      '<button type="button" class="btn" id="introNext" data-intro="' +
      (last ? "close" : "next") +
      '">' +
      (last ? u.done : u.next) +
      "</button>" +
      "</div>" +
      "</div>"
    );
  }

  function paint() {
    var d = el();
    if (!d) return;
    d.innerHTML = dlgHtml();
    var n = document.getElementById("introNext");
    if (n && n.focus) n.focus();
  }

  function open() {
    if (el()) return;
    step = 0;
    prevFocus = document.activeElement;
    var d = document.createElement("div");
    d.id = "intro";
    d.className = "dlgb";
    document.body.appendChild(d);
    paint();
  }

  function close() {
    var d = el();
    if (d && d.remove) d.remove();
    markSeen();
    if (prevFocus && prevFocus.focus) {
      try {
        prevFocus.focus();
      } catch (e) {}
    }
    prevFocus = null;
  }

  function labels() {
    var b = document.getElementById("introBtn");
    if (!b) return;
    var t = UI[lang()].title;
    b.title = t;
    b.setAttribute("aria-label", t);
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest("[data-intro],[data-introtab]") : null;
    if (!t) {
      if (ev.target && ev.target.id === "intro") close();
      return;
    }
    var tab = t.dataset.introtab,
      a = t.dataset.intro;
    if (tab) {
      close();
      var b = document.querySelector('[data-tab="' + tab + '"]');
      if (b) b.click();
      return;
    }
    if (a === "open") open();
    else if (a === "close") close();
    else if (a === "next") {
      step = Math.min(step + 1, STEPS[lang()].length - 1);
      paint();
    } else if (a === "prev") {
      step = Math.max(step - 1, 0);
      paint();
    }
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && el()) close();
  });

  /* Muat ulang isi panduan dan label tombol saat bahasa diganti. */
  var baseSetLang = setLang;
  setLang = function (v) {
    baseSetLang(v);
    labels();
    paint();
  };

  window.SxsIntro = { open: open, close: close };

  labels();
  if (!wasSeen()) open();
})();
