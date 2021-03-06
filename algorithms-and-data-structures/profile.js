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
  let output = fn(...args);
  const time = Date.now() - now;
  if (Array.isArray(output)) {
    const isLarge = output.length > 3;
    output = isLarge ? output.slice(0, 3) : output;
    output = `[${output.join(", ")}${".".repeat(isLarge * 3)}]`;
  }
  console.table({
    "Function name": fn.name,
    Arguments: argsStr,
    Output: output,
    "Time taken": `${time}ms`,
  });
};
