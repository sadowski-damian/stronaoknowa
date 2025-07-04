// Rotacja cytatów
const quotes = [
    {
        text: "Choć doskonałość nie jest osiągalna, dążenie do niej pozwala nam uchwycić esencję rzetelnej pracy. To staranność i zaangażowanie, a nie pieniądze, budują fundamenty prawdziwego sukcesu.",
        author: "-Vince Lombardi"
    },
    {
        text: "Jakość to nie przypadek – to zawsze wynik wysokiego zamiaru, szczerych starań, inteligentnego kierunku i umiejętnej realizacji.",
        author: "-William A. Foster"
    },
    {
        text: "Perfekcja nie jest osiągalna, ale jeśli dążymy do perfekcji, możemy osiągnąć doskonałość. Każde okno zasługuje na najlepszą opiekę i fachową obsługę.",
        author: "-Filozofia Rzemiosła"
    }
];

let currentQuoteIndex = 0;

function rotateQuotes() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    if (quoteText && quoteAuthor) {
        // Efekt fade out
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            // Zmiana cytatu
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quoteText.textContent = quotes[currentQuoteIndex].text;
            quoteAuthor.textContent = quotes[currentQuoteIndex].author;
            
            // Efekt fade in
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 500);
    }
}

// Uruchomienie rotacji co 15 sekund
document.addEventListener('DOMContentLoaded', function() {
    setInterval(rotateQuotes, 15000);
});
