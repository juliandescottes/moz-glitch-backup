window.addEventListener("beforeunload", sendRequest, false);

function sendRequest() {
  fetch("script.js?foo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    keepalive: true,
  });
}
