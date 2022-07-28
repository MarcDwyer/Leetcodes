function deferred() {
  let methods;
  const prom = new Promise((res, rej) => {
    console.log("hello world");
    methods = {
      res,
      rej,
    };
  });
  return Object.assign(prom, methods);
}

const signal = deferred();

setTimeout(() => {
  signal.res(123);
}, 5000);

const value = await signal;

console.log({ value });
