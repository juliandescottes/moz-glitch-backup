"use strict";

const DB_NAME = "db";

async function setup() { // eslint-disable-line no-unused-vars
  await new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onerror = () => reject(Error("Error opening DB"));
    request.onupgradeneeded = event => {
      const db = event.target.result;
      const store = db.createObjectStore("store", { keyPath: "key" });
      store.add({key: "lorem", value: "ipsum"});
      store.transaction.oncomplete = () => resolve(db);
    }
  });
}

async function clear() { // eslint-disable-line no-unused-vars
  await new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(DB_NAME)
    request.onsuccess = resolve;
    request.onerror = () => reject(Error("Error deleting DB"));
  });
}

document.querySelector("button").addEventListener("click", async function () {
  console.log("Setup start");
  await setup();
  console.log("Setup done");
  
  await new Promise(r => setTimeout(r, 2000));
  
  await clear();
  console.log("clear done");
  alert("Done!")
});