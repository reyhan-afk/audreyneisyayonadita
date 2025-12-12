const quotes = [
    "Kamu itu jangan suka bolos ya dek ya.",
    "Tetap semangat dan jaga disiplin.",
    "Satu langkah kecil tiap hari jauh lebih baik daripada absen.",
    "Belajar itu untuk masa depanmu sendiri.",
    "Jangan menyerah, kamu pasti bisa."
];

document.getElementById("btnQuote").addEventListener("click", function () {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[random];
});

