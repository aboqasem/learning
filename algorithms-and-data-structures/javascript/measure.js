module.exports = (fn, args) => {
  const now = Date.now();
  const output = fn(...args);
  const time = Date.now() - now;
  console.table({
    "Function name": fn.name,
    Arguments: args.join(", "),
    Output: output,
    "Time taken": time,
  });
};
