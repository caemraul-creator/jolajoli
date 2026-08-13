// ============================================================
// DailyNota - Firebase & Google Apps Script Configuration
// ============================================================
// File ini berisi konfigurasi Firebase dan Google Apps Script
// Pastikan untuk menyimpan file ini di tempat yang aman
// dan jangan share apiKey secara publik di production
// ============================================================

// ====== Firebase Configuration ======
const firebaseConfig = {
    apiKey: "AIzaSyAKmg21WQdhteSHECWTAAYLlKDz2eeSq-c",
    authDomain: "dailynota-f1c53.firebaseapp.com",
    projectId: "dailynota-f1c53",
    storageBucket: "dailynota-f1c53.firebasestorage.app",
    messagingSenderId: "654935680963",
    appId: "1:654935680963:web:20c442d151cdf34f097f76"
};

// ====== Firestore Collection Name ======
const FIRESTORE_COLLECTION = "products";

// ====== Google Apps Script Backend URL ======
// URL ini digunakan untuk menulis data ke Spreadsheet sebagai backup
const GAS_BASE_URL = "https://script.google.com/macros/s/AKfycbzzTlfNiN25nJ6M1xQJAshda523oLJzL0aZjpb5GCpoIfXeNuAIm-WW-SdosVmh_Zga/exec";

// ====== Dual-Write Mode ======
// true  = Tulis ke Firebase DAN Spreadsheet (direkomendasikan)
// false = Tulis ke Firebase saja
const DUAL_WRITE_ENABLED = true;

// ====== Data Source untuk BACA data ======
// "firebase" = Baca dari Firebase Firestore (cepat, realtime)
// "gas"      = Baca dari Google Apps Script (lambat)
const DATA_SOURCE = "gas";

// ====== Gudang List ======
const GUDANG_LIST = [
    "Kalipucang", "Sekarjati", "Troso", "Ngabul",
    "Masterbox", "Innerbox", "Flexo", "Mess",
    "Kontrakan", "Transportasi", "Lainnya"
];

// ====== Satuan List ======
const SATUAN_LIST = [
    "klg", "ml", "ons", "gr", "pcs", "lbr", "btg", "roll",
    "kg", "ltr", "m", "cm", "box", "pack", "unit", "set",
    "rtg", "lsn", "gln", "lainnya"
];
