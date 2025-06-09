const testEl = document.getElementById("test");

// click, mouseup, mousedown are properly hidden from the content page when picking
testEl.addEventListener("click", () => { log("Received click"); });
testEl.addEventListener("mouseup", () => { log("Received mouseup"); });
testEl.addEventListener("mousedown", () => { log("Received mousedown"); });

// But pointerup and pointerdown are still forwarded and can lead to unexpected side-effects
testEl.addEventListener("pointerup", () => { log("Received pointerup"); });
testEl.addEventListener("pointerdown", () => { log("Received pointerdown"); });

const logsEl = document.getElementById("logs");
function log(message) {
  console.log(message);
  const messageEl = document.createElement("div");
  messageEl.textContent = message;
  logsEl.appendChild(messageEl);
}

function clearLogs() {
  while(logsEl.querySelector("div")) {
    logsEl.querySelector("div").remove();
  }
}
const clearLogsEl = document.getElementById("clear-logs");
clearLogsEl.addEventListener("click", clearLogs);