function attribute(value, datum) {
  if (typeof value === "function") return value(datum);
  return value;
}

export function circle({x, y, fill, r}) {
  return (data) => {
    const I = Array.from({length: data.length}, (_, i) => i);
    const X = I.map((i) => attribute(x, data[i]));
    const Y = I.map((i) => attribute(y, data[i]));
    const R = I.map((i) => attribute(r, data[i]));
    const F = I.map((i) => attribute(fill, data[i]));
    const transform = (I, value, context) => {
      const {x: X, y: Y, r: R, fill: F} = value;
      for (const i of I) {
        context.beginPath();
        context.arc(X[i], Y[i], R[i], 0, 2 * Math.PI);
        context.fillStyle = F[i];
        context.fill();
      }
    };
    return {x: X, y: Y, r: R, fill: F, I, transform};
  };
}
