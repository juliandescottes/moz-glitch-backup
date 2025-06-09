const fakeAsyncFunction = () => {
  return new Promise((resolve) => setTimeout(() => resolve(Math.random()), 1000));
};

const updatesKeys = [
  "0.children.0.children.0",
  "0.children.0.children.0.children.0",
  "0.children.0.children.0.children.1",
  "0.children.0.children.0.children.2",
  "0.children.0.children.0.children.3",
];

updatesKeys.reduce(
  (acc, key) => acc.then(async () => {
    const value = await fakeAsyncFunction();
    const needToDoSomething = value > 0.5;
    if (needToDoSomething) {
      console.log("Do Something:", value);
    }
  }),
  Promise.resolve()
);
