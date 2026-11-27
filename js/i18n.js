var LANG = (function () {
  try {
    return localStorage.getItem("sxs-lang") === "id" ? "id" : "en";
  } catch (e) {
    return "en";
  }
})();
var EN = {
  Akhir: "End",
  Ulang: "Repeat",
  Berhenti: "Stop",
  "Tingkat CP": "CP tiers",
  Syarat: "Requirement",
  "Teks tips": "Tip text",
  "Nama akun": "Account",
  Tahap: "Stage",
  Mulai: "Start",
  Nilai: "Value",
  Teks: "Text",
  Selesai: "Done",
  Kedaluwarsa: "Expired",
  Aktif: "Active",
  "Progres harian": "Daily progress",
  Data: "Data",
  Jumlah: "Items",
  "Belum ada data.": "No data yet.",
  "Data mentah (JSON)": "Raw data (JSON)",
  "Simpan data sebagai teks": "Save data as text",
  "Muat data dari teks": "Load data from text",
  "+ Tambah baris": "+ Add row",
  "Data tersimpan di browser ini. Simpan sebagai teks atau file untuk backup, atau muat dari teks atau file untuk memulihkan.":
    "Data is stored in this browser. Save it as text or a file to back up, or load from text or a file to restore.",
  "Tabel di bawah bisa diedit langsung. Perubahan tersimpan otomatis dan bisa diurungkan.":
    "The table below can be edited directly. Changes are saved automatically and can be undone.",
  "Pilih sub-kategori jadwal untuk mengedit tabelnya.": "Pick a schedule sub-category to edit its table.",
  "Tabel diperbarui": "Table updated",
  "Baris ditambahkan": "Row added",
  "Baris dihapus": "Row deleted",
  "Nama tidak boleh kosong.": "Name cannot be empty.",
  "Day harus 1 atau lebih.": "Day must be 1 or more.",
  "Tips untuk Day itu sudah ada.": "A tip for that Day already exists.",
  "Tanggal tidak valid.": "Invalid date.",
  "Minimal harus ada satu akun.": "At least one account is required.",
  "Data untuk Day itu sudah ada.": "An entry for that Day already exists.",
  "Akun tidak ditemukan.": "Account not found.",
  "Nilai tidak boleh kosong. Hapus baris untuk menghapus.": "Value cannot be empty. Delete the row to remove it.",
  "Data untuk region itu sudah ada.": "A value for that region already exists.",
  "Data:": "Data:",
  "Simpan sebagai JSON": "Save as JSON",
  Disarankan: "Recommended",
  "File .json berisi data lengkap dan bisa dimuat kembali dengan akurat.":
    "A .json file with complete data that can be loaded back accurately.",
  "Simpan sebagai TXT": "Save as TXT",
  "File .txt berisi data yang sama (format JSON), mudah dibuka di editor teks.":
    "A .txt file with the same data (JSON format), easy to open in a text editor.",
  "Salin sebagai teks": "Copy as text",
  "Salin ke clipboard untuk ditempel di catatan, chat, atau kotak muat.":
    "Copy to the clipboard to paste into notes, chat, or the load box.",
  "Salin sebagai tabel (TSV)": "Copy as table (TSV)",
  "Untuk ditempel ke spreadsheet. Hanya untuk dibaca, tidak bisa dimuat kembali.":
    "To paste into a spreadsheet. Read-only; it cannot be loaded back.",
  "Jika unduhan tidak berjalan di halaman ini, pakai Salin sebagai teks.":
    "If downloads do not work on this page, use Copy as text.",
  "Mengunduh file…": "Downloading file…",
  "Gagal mengunduh. Pakai Salin sebagai teks.": "Download failed. Use Copy as text.",
  "Disalin ke clipboard": "Copied to clipboard",
  "Tempel data backup di sini, atau unggah file (.json / .txt).":
    "Paste backup data here, or upload a file (.json / .txt).",
  "Tempel teks backup di sini": "Paste backup text here",
  "Atau unggah file backup": "Or upload a backup file",
  Pratinjau: "Preview",
  "Teks bukan JSON yang valid.": "The text is not valid JSON.",
  "Format data tidak dikenali atau tidak lengkap.": "The data format is not recognized or is incomplete.",
  "Ringkasan perubahan": "Summary of changes",
  "Yang akan dimuat:": "Will load:",
  Sekarang: "Now",
  Sesudah: "After",
  Ditambah: "Added",
  Dihapus: "Removed",
  Diubah: "Changed",
  "Tidak ada perubahan pada data saat ini.": "No changes to your current data.",
  "Setelah dimuat, Anda masih bisa membatalkannya dengan tombol Undo.":
    "After loading, you can still cancel it with the Undo button.",
  Kembali: "Back",
  "Muat data": "Load data",
  "Jadwal (semua)": "Schedule (all)",
  "Event lainnya": "Other events",
  "Berisi: semua jadwal job change.": "Includes: all job change schedules.",
  "Berisi: tips harian per Day.": "Includes: daily tips per Day.",
  "Berisi: daftar season.": "Includes: the season list.",
  "Berisi: hanya jadwal pada kategori ini. Kategori jadwal lain tidak berubah.":
    "Includes: only the schedule items in this category. Other schedule categories stay unchanged.",
  "Backup keseluruhan": "Full backup",
  "Backup per kategori": "Backup by category",
  "Backup atau pulihkan satu kategori saja. Memuat akan mengganti data kategori itu saja, data lain tidak berubah.":
    "Back up or restore just one category. Loading replaces only that category; all other data stays unchanged.",
  Kategori: "Category",
  "Informasi akun": "Account information",
  "Berisi: jadwal event, region, dan dungeon, job change, serta tips harian.":
    "Includes: event, region, and dungeon schedule, job changes, and daily tips.",
  "Berisi: daftar akun, progres harian, currency region, dan to-do.":
    "Includes: account list, daily progress, region currency, and to-dos.",
  "Berisi: daftar gift code dan status redeem tiap akun.": "Includes: gift code list and each account's redeem status.",
  "Muat kategori": "Load category",
  "Kategori dipulihkan:": "Category restored:",
  "Akan datang": "Upcoming",
  Urungkan: "Undo",
  "Data harian tersimpan": "Daily data saved",
  "Data akun tersimpan": "Account data saved",
  "Akun tersimpan": "Account saved",
  "Akun baru dibuat": "New account created",
  "Akun dihapus": "Account deleted",
  "Jadwal ditambahkan": "Schedule added",
  "Jadwal diperbarui": "Schedule updated",
  "Job change ditambahkan": "Job change added",
  "Job change diperbarui": "Job change updated",
  "To-do ditambahkan": "To-do added",
  "To-do diperbarui": "To-do updated",
  "Tips diimpor": "Tips imported",
  "Impor jadwal selesai": "Schedule import finished",
  "Data dipulihkan": "Data restored",
  "Jadwal dihapus": "Schedule deleted",
  "Job change dihapus": "Job change deleted",
  "To-do dihapus": "To-do deleted",
  "Kode ditambahkan": "Code added",
  "Kode diimpor": "Codes imported",
  "Kode diperbarui": "Code updated",
  "Kode dihapus": "Code deleted",
  "Gagal menyimpan ke browser": "Failed to save to browser",
  "Semua akun": "All accounts",
  Progres: "Progress",
  Kalender: "Calendar",
  Jadwal: "Schedule",
  Akun: "Accounts",
  Pengaturan: "Settings",
  "tanpa CP": "no CP",
  "Butuh Lv": "Needs Lv",
  "Hari server": "Server day",
  "Level terakhir": "Latest level",
  "CP terakhir": "Latest CP",
  "Dawnium terakhir": "Latest Dawnium",
  "Region berikutnya:": "Next region:",
  "di Day": "on Day",
  "lagi).": "left).",
  "Job change tersedia:": "Job change available:",
  "belum ada": "none yet",
  "· berikutnya:": "· next:",
  "Season saat ini:": "Current season:",
  "Ke hari ini": "Go to today",
  "⌂ Hari ini": "⌂ Today",
  "Lompat ke Day": "Jump to Day",
  "Hari ini": "Today",
  "Season bulan ini:": "Seasons this month:",
  "Tidak ada season pada bulan ini.": "No seasons this month.",
  "Job change · Dnn = hari server akun ini": "Job change · Dnn = this account's server day",
  Sen: "Mon",
  Sel: "Tue",
  Rab: "Wed",
  Kam: "Thu",
  Jum: "Fri",
  Sab: "Sat",
  Min: "Sun",
  "· sebelum server dibuka": "· before the server opened",
  "(mulai)": "(starts)",
  "Server belum dibuka pada tanggal ini.": "The server was not open on this date.",
  "Tips hari ini": "Today's tip",
  "Buka di Progres": "Open in Progress",
  "Ketuk ✎ untuk mengubah data akun. Day 1 adalah tanggal server dibuka, sedangkan Mulai dicatat adalah tanggal Anda mulai mengisi data. Level, CP, dan Dawnium yang diubah tersimpan sebagai data hari ini.":
    "Tap ✎ to edit account data. Day 1 is the date the server opened, while Tracking started is the date you began entering data. Level, CP, and Dawnium changes are saved as today's data.",
  Simpan: "Save",
  Batal: "Cancel",
  Hapus: "Delete",
  "Hapus?": "Delete?",
  Nama: "Name",
  "Path job": "Job path",
  "- pilih -": "- select -",
  "Job saat ini": "Current job",
  "Day 1 (server dibuka)": "Day 1 (server opened)",
  "Mulai dicatat": "Tracking started",
  "mis. 180K": "e.g. 180K",
  "· Mulai dicatat:": "· Tracking started:",
  "+ Tambah akun": "+ Add account",
  "Ringkasan hari ini": "Today's summary",
  "Ketuk ✎ untuk memperbarui CP, level, Dawnium, dan currency region. Nilai awal diambil dari data terakhir.":
    "Tap ✎ to update CP, level, Dawnium, and region currency. Initial values are taken from the latest data.",
  "Server belum dibuka": "Server not open yet",
  "sudah diisi": "filled in",
  "belum diisi": "not filled in",
  "hari ini": "today",
  "mulai hari ini ·": "starts today ·",
  "berakhir hari ini": "ends today",
  "ditandai kedaluwarsa": "marked expired",
  "tanpa batas": "no limit",
  berakhir: "ended",
  lagi: "left",
  "s/d": "until",
  "Berlaku sampai": "Valid until",
  Hadiah: "Reward",
  "Salin kode": "Copy code",
  Diredeem: "Redeemed",
  akun: "accounts",
  "· belum:": "· not yet:",
  "Aktifkan lagi": "Reactivate",
  "Tandai kedaluwarsa": "Mark expired",
  "Centang akun yang sudah meredeem tiap kode. Kode otomatis pindah ke Kedaluwarsa setelah tanggal berlaku lewat.":
    "Tick the accounts that have redeemed each code. A code moves to Expired automatically once its valid-until date has passed.",
  "· belum redeem": "· not redeemed",
  Kode: "Code",
  "Hadiah (opsional)": "Reward (optional)",
  "Berlaku sampai (kosongkan jika tanpa batas)": "Valid until (leave empty for no limit)",
  Tambah: "Add",
  "Tutup tambah banyak": "Close bulk add",
  "Tambah banyak": "Bulk add",
  "Satu kode per baris:": "One code per line:",
  "KODE | hadiah | YYYY-MM-DD": "CODE | reward | YYYY-MM-DD",
  "(hadiah dan tanggal opsional).": "(reward and date are optional).",
  Tambahkan: "Add codes",
  "Aktif (": "Active (",
  "Belum ada kode aktif.": "No active codes yet.",
  "Kedaluwarsa (": "Expired (",
  "Belum ada kode kedaluwarsa.": "No expired codes yet.",
  Semua: "All",
  "Pilih path dulu": "Select a path first",
  "Belum ada server yang dibuka.": "No server has opened yet.",
  "Perbandingan semua akun": "All accounts comparison",
  "Satu baris per hari server (Day), hari terbaru di atas. Tanda - berarti belum ada catatan, termasuk hari sebelum akun mulai dicatat. Sel yang diberi latar adalah hari ini untuk akun itu. Tanda \u25b2 dan \u25bc menunjukkan perubahan dari catatan sebelumnya.":
    "One row per server day (Day), newest day on top. A - means no record yet, including days before the account started being tracked. The highlighted cell is today for that account. ▲ and ▼ show the change from the previous record.",
  kurang: "short by",
  Tampilan: "Display",
  "Tampilkan strategi stamina GTH di kartu hari": "Show the GTH stamina strategy on day cards",
  "Data tersimpan di browser ini. Salin teks di bawah untuk backup, atau tempel backup lalu tekan Muat untuk memulihkan.":
    "Data is stored in this browser. Copy the text below to back up, or paste a backup and press Load to restore.",
  "Muat dari teks": "Load from text",
  "Salin backup": "Copy backup",
  "Atau muat dari file backup (.json / .txt)": "Or load from a backup file (.json / .txt)",
  "Misal: buka area X": "e.g. open area X",
  "Semua region": "All regions",
  "Semua tool": "All tools",
  "Tidak ada to-do untuk filter ini.": "No to-dos for this filter.",
  "Belum ada to-do untuk akun ini.": "No to-dos for this account yet.",
  "lainnya di tab To-do": "more in the To-do tab",
  "Tambah to-do": "Add to-do",
  dimulai: "starts",
  "dibanding Day": "vs Day",
  "mis. Grand Treasure Hunt #1": "e.g. Grand Treasure Hunt #1",
  Tipe: "Type",
  "Day mulai": "Start Day",
  "Day selesai (opsional)": "End Day (optional)",
  "kosong = 1 hari": "empty = 1 day",
  "Ulang tiap N hari (opsional)": "Repeat every N days (optional)",
  "mis. 21": "e.g. 21",
  "Berhenti di Day (opsional)": "Stop at Day (optional)",
  "mis. 442": "e.g. 442",
  "Syarat level": "Level requirement",
  "Tingkat CP (khusus dungeon)": "CP tiers (dungeon only)",
  Catatan: "Note",
  "mis. hadiah atau keterangan": "e.g. reward or details",
  "ulang tiap": "repeats every",
  "sampai Day": "until Day",
  "Ubah jadwal": "Edit schedule",
  "Belum ada jadwal.": "No schedule yet.",
  "mis. 3rd Job Change": "e.g. 3rd Job Change",
  "Day buka": "Opens on Day",
  "mis. 12": "e.g. 12",
  "kosong = belum diketahui": "empty = unknown",
  "Syarat class dan job sebelumnya": "Class and previous job requirement",
  "mis. Class Lv. 48 + 2nd Job Lv. 16": "e.g. Class Lv. 48 + 2nd Job Lv. 16",
  "Ubah job change": "Edit job change",
  "syarat belum diketahui": "requirement unknown",
  "Tambah job change": "Add job change",
  "Impor jadwal dari teks": "Import schedule from text",
  "Satu baris per jadwal, kolom dipisah tanda |": "One line per schedule, columns separated by |",
  "day | tipe | nama | catatan | tingkat=CP | level | sampai day | ulang | berhenti":
    "day | type | name | note | tier=CP | level | until day | repeat | stop",
  "Tipe: region, dungeon, event, season, atau job. Baris dengan Day dan nama yang sama memperbarui jadwal lama. Contoh:":
    "Type: region, dungeon, event, season, or job. A line with the same Day and name updates the existing schedule. Example:",
  "8 | event | Grand Treasure Hunt #1 | Hadiah T5 | | | 14": "8 | event | Grand Treasure Hunt #1 | T5 reward | | | 14",
  "Tempel baris jadwal di sini": "Paste schedule lines here",
  "Impor jadwal": "Import schedule",
  "Tips harian": "Daily tips",
  "day | teks tips": "day | tip text",
  ". Teks muncul di kartu hari itu.": ". The text appears on that day's card.",
  "Impor tips": "Import tips",
  "Cari nama atau catatan": "Search name or note",
  "Tutup form": "Close form",
  "+ Tambah": "+ Add",
  "Impor dari teks": "Import from text",
  Tutup: "Close",
  "\u21ea Impor": "⇪ Import",
  "Tambah jadwal": "Add schedule",
  "Berlaku untuk semua akun dan dihitung dari Day 1 tiap akun. Isi Day selesai untuk event berdurasi dan Ulang tiap N hari untuk event yang berputar.":
    "Applies to all accounts and is counted from each account's Day 1. Fill in End Day for events with a duration and Repeat every N days for recurring events.",
  "Sebelum season": "Before season",
  "\u00b7 saat ini": "· current",
  "Tidak ada jadwal yang cocok.": "No matching schedules.",
  "bisa dilakukan mulai hari ini": "available from today",
  "\u00b7 butuh Lv": "· needs Lv",
  "\u00b7 syarat belum dipublikasikan": "· requirement not yet published",
  "CP akhir hari": "End-of-day CP",
  "Catatan untuk hari berikutnya": "Note for the next day",
  "Catatan dari hari sebelumnya": "Note from the previous day",
  "ada catatan": "has note",
  Isi: "Fill in",
  "\u00b7 hari ini": "· today",
  "Season baru": "New season",
  "Rank up, lalu pakai stamina tabungan (sekitar 1100\u20131200). Ini menyelesaikan quest GTH minggu ini; pastikan selesai sebelum pekan GTH berakhir (Day":
    "Rank up, then use the saved stamina (about 1100–1200). This completes this week's GTH quest; make sure it is done before the GTH week ends (Day",
  "Klaim stamina Akane": "Claim Akane stamina",
  "Klaim semua stamina dari Akane hari ini, sebelum reset season, dan simpan di inventaris. Jangan selesaikan quest GTH 600. Cek di game apakah ada batas waktu klaim.":
    "Claim all stamina from Akane today, before the season reset, and keep it in your inventory. Do not complete the 600 GTH quest. Check in game whether there is a claim deadline.",
  "Day 0: habiskan semua stamina": "Day 0: use up all stamina",
  "Pakai semua stamina di luar quest GTH. Mulai menabung dari 0 supaya regen tidak terbuang.":
    "Use all stamina outside the GTH quest. Start saving from 0 so regen is not wasted.",
  "Persiapan GTH 1/4": "GTH prep 1/4",
  "Klaim daily 60, pakai 30.": "Claim daily 60, use 30.",
  "Persiapan GTH 2/4": "GTH prep 2/4",
  "Persiapan GTH 3/4": "GTH prep 3/4",
  "Klaim daily 60, pakai semua 360 (30 daily + 330 quest GTH).":
    "Claim daily 60, use all 360 (30 daily + 330 GTH quest).",
  "Persiapan GTH 4/4": "GTH prep 4/4",
  "Klaim daily 60, pakai 90 (30 daily + 60 quest GTH).": "Claim daily 60, use 90 (30 daily + 60 GTH quest).",
  Menabung: "Saving",
  "Pakai hanya daily 30. Quest GTH minggu ini genap 600.":
    "Use only the 30 daily. This week's GTH quest reaches exactly 600.",
  "Menabung (GTH terakhir)": "Saving (last GTH)",
  "Pakai hanya daily 30. JANGAN selesaikan quest GTH 600 sebelum season baru.":
    "Use only the 30 daily. Do NOT complete the 600 GTH quest before the new season.",
  "· hari": "· day",
  dari: "of",
  "tanpa syarat CP": "no CP requirement",
  minggu: "week",
  ", hari": ", day",
  j: "h",
  "m lagi": "m left",
  "Isi Day mulai dan nama jadwal.": "Fill in the start Day and the schedule name.",
  "Jadwal dengan Day dan nama sama diperbarui": "Schedule with the same Day and name updated",
  Dikembalikan: "Restored",
  "Isi Day dan nama jadwal.": "Fill in the Day and the schedule name.",
  "Isi to-do dulu.": "Enter a to-do first.",
  "To-do tidak boleh kosong.": "To-do cannot be empty.",
  "Isi angka yang valid, misalnya 36K atau 1.8B.": "Enter a valid number, e.g. 36K or 1.8B.",
  "Isi angka yang valid pada currency, misalnya 1.2K.": "Enter a valid number for currency, e.g. 1.2K.",
  "Isi nama job change.": "Enter a job change name.",
  "Kode itu sudah ada.": "That code already exists.",
  "Isi kode dulu.": "Enter a code first.",
  "Semua kode sudah ada.": "All codes already exist.",
  "Tidak ada kode untuk ditambahkan.": "There are no codes to add.",
  ditambahkan: "added",
  "duplikat dilewati)": "duplicates skipped)",
  "Kode tidak boleh kosong.": "Code cannot be empty.",
  "Kode disalin": "Code copied",
  "Gagal menyalin": "Failed to copy",
  "Backup disalin": "Backup copied",
  "Pilih semua lalu salin manual": "Select all, then copy manually",
  "File backup diunduh": "Backup file downloaded",
  "Gagal mengunduh. Pakai Salin backup.": "Download failed. Use Copy backup.",
  "Teks backup tidak valid.": "Invalid backup text.",
  "Data dipulihkan dari file": "Data restored from file",
  "File backup tidak valid.": "Invalid backup file.",
  "Currency tersimpan": "Currency saved",
  "Akun 1": "Account 1",
  "Data disimpan di local storage browser ini, sehingga tidak ikut berpindah antar perangkat atau browser.":
    "Data is stored in this browser's local storage, so it does not sync across devices or browsers.",
};
function TX(s) {
  if (LANG !== "en") return s;
  var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s),
    v = Object.prototype.hasOwnProperty.call(EN, m[2]) ? EN[m[2]] : null;
  return v == null ? s : m[1] + v + m[3];
}
var PLU = { hari: ["day", "days"], jadwal: ["schedule", "schedules"], kode: ["code", "codes"] };
function Nn(n, k) {
  if (LANG !== "en") return n + " " + k;
  var p = PLU[k];
  return n + " " + (n === 1 ? p[0] : p[1]);
}
function Dn(n) {
  return Nn(n, "hari");
}
function AccN(n) {
  return (LANG === "en" ? "Account " : "Akun ") + n;
}
function LOC() {
  return LANG === "en" ? "en-US" : "id-ID";
}
function NT(s) {
  if (LANG !== "en" || !s) return s;
  var m;
  if ((m = /^Region baru Season (\d+)$/.exec(s))) return "New region in Season " + m[1];
  if ((m = /^Hadiah utama T5: (.*)$/.exec(s))) return "T5 main reward: " + m[1];
  if ((m = /^Pilihan hadiah: (.*)$/.exec(s))) return "Reward choice: " + m[1];
  if (s === "Estimasi") return "Estimate";
  if (s === "Seasonal map terbuka") return "Seasonal map opens";
  return s;
}
function langUI() {
  document.documentElement.lang = LANG;
  [].forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
    b.className = b.dataset.lang === LANG ? "on" : "";
  });
  var note = document.getElementById("lsnote");
  if (note)
    note.textContent = TX(
      "Data disimpan di local storage browser ini, sehingga tidak ikut berpindah antar perangkat atau browser.",
    );
}
function setLang(v) {
  LANG = v === "id" ? "id" : "en";
  try {
    localStorage.setItem("sxs-lang", LANG);
  } catch (e) {}
  langUI();
  render();
}
document.addEventListener("click", function (ev) {
  var b = ev.target.closest && ev.target.closest("[data-lang]");
  if (b) setLang(b.dataset.lang);
});
langUI();
