const BIN_ID = "67ef9c0f8a456b7966824d54";
const API_KEY = "$2a$10$OkzSNe85PNLqJEF3tz0dzOA4eDoZAPDCL5kG5a8JJa5UHWmkgX7Oa";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function updateCounter() {
  console.log("Updating counter...");
  try {
    // Fetch current count
    let response = await fetch(BIN_URL, {
      method: "GET",
      headers: {
        "X-Master-Key": API_KEY,
      },
    });
    let data = await response.json();
    let count = data.record.count || 0;

    // Increment count
    count++;

    // Update JSONBin with new count
    await fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({ count }),
    });
    console.log("Counter updated successfully:", count);
  } catch (error) {
    console.error("Error updating counter:", error);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  updateCounter();
});
