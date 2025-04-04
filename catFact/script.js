document.addEventListener("DOMContentLoaded", () => {
  async function fetchCatFact() {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      document.getElementById("fact-container").textContent = data.fact;
    } catch (error) {
      document.getElementById("fact-container").textContent =
        "Oops! Failed to fetch a cat fact. Please try again.";
    }
  }

  // Add click handler to button
  document.querySelector("button").addEventListener("click", fetchCatFact);

  // Fetch initial fact on page load
  fetchCatFact();
});
