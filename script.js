const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create a log entry
  const logEntry = `${new Date().toISOString()} - Name: ${name}, Email: ${email}, Message: ${message}\n`;

  // Save log entry to a file
  saveToLog(logEntry, "submissions.log");
});

function saveToLog(data, filename) {
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
