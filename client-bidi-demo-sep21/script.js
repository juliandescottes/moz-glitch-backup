"use strict";

let socket;

document.querySelector("#connect").addEventListener("click", () => {
  const domain = document.querySelector("#host").value;
  socket = new WebSocket(`ws://${domain}/session`);
  socket.onmessage = onWebSocketMessage;
  socket.onopen = function (event) {
    document.querySelector("#connect").setAttribute("disabled", "true");
    document.querySelector("#host").setAttribute("disabled", "true");
    document.querySelector("#connect").innerText = "connected";
  };
});

let reqId = 1;

document.querySelector("#commands-container").addEventListener("click", async e => {
  const commandEl = e.target.closest(".command");
  if (!commandEl) {
    return;
  }

  switch (commandEl.dataset.command) {
    case "session.new":
      await sendMessage({
        "id" : 1,
        "method": "session.new",
        "params": {}
      });
      break;
    case "session.subscribe":
      await sendMessage({
        "id" : 2,
        "method": "session.subscribe",
        "params": {
          "events": ["log.entryAdded"]
        }
      });
      break;
  }
})

function onWebSocketMessage(event) {
  console.log(event.data);
  const data = JSON.parse(event.data);
  if (data.id) {
    addTraffic("response", data);
  } else {
    addTraffic("event", data);
    addEvent(data);
  }
}

async function sendMessage(msg) {
  const id = reqId++;
  msg.id = id;
  addTraffic("request", msg);
  socket.send(JSON.stringify(msg));
}

function logTemplate(type, id, text) {
  return `<div class="log ${type}">
    <span class=log-id>${id}</span>
    <span class=log-text>${text}</span>
  </div>`;
}

function eventTemplate(type, id, text, time) {
  return `<div class="log ${type}">
    <span class=log-id>${id}</span>
    <span class=log-text>${text}</span>
    <span class=log-time>${time}</span>
  </div>`;
}

const nodeBuilder = document.createElement("div")

function addTraffic(id, msg) {
  document.querySelector("#fake-request")?.remove();
  nodeBuilder.innerHTML = logTemplate("request", id, JSON.stringify(msg));
  document.querySelector("#requests-log").appendChild(nodeBuilder.firstChild);
}

function addEvent(data) {
  document.querySelector("#fake-event")?.remove();
  const evt = data.params;
  const time = new Date(evt.timestamp).toTimeString().substring(0, 8)

  nodeBuilder.innerHTML = eventTemplate("event", evt.method, evt.text, time);
  document.querySelector("#events-log").appendChild(nodeBuilder.firstChild);
}
