function generateRandomQuote() {
    fetch("quotes.json")  // Ensure the file is named exactly as "quotes.json"
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load quotes.json, check the file path!");
            }
            return response.json();
        })
        .then(data => {
            let quotes = data.quotes;
            if (!quotes || quotes.length === 0) {
                throw new Error("No quotes found in JSON!");
            }
            let randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("writingDisplay").innerHTML = quotes[randomIndex];  // Use innerHTML to keep formatting
        })
        .catch(error => console.error("Error fetching quotes:", error));
}
window.onload = generateRandomQuote;
document.getElementById("new-qoute-btn").addEventListener("click", generateRandomQuote);