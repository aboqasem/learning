module.exports = (fn, args) => {
  const argsStr = args
    .map((v) => {
      if (Array.isArray(v)) {
        const isLarge = v.length > 3;
        const arr = isLarge ? v.slice(0, 3) : v;
        return `[${arr.join(", ")}${".".repeat(isLarge * 3)}]`;
      }
      return v;
    })
    .join(", ");
  const now = Date.now();
  const output = fn(...args);
  const time = Date.now() - now;
  console.table({
    "Function name": fn.name,
    Arguments: argsStr,
    Output: output,
    "Time taken": `${time}ms`,
  });
};
