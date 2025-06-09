function errorCaught() {
  try {
    throw new Error("A");
  } catch(e) {
    // caught error
  }
}

function errorUncaught() {
  throw new Error("A");
}

function exCaught() {
  const a = {};
  try {
    a.b.c;
  } catch(e) {
    // caught exception
  }
}

function exUncaught() {
  const a = {};
  a.b.c;
}