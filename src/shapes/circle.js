function attribute(value, i, data) {
  if (typeof value === "function") return value(data[i], i, data);
  return value;
}

export function circle({x, y, fill, r}) {
  return (data = [0]) => {
    const I = Array.from({length: data.length}, (_, i) => i);
    const transform = (context, I, value) => {
      const {x: X = [], y: Y = [], r: R = [], fill: F = []} = value;
      for (const i of I) {
        context.save();
        context.beginPath();
        context.arc(X[i], Y[i], R[i], 0, 2 * Math.PI);
        context.fillStyle = F[i];
        context.fill();
        context.restore();
      }
    };
    return {
      ...(x !== undefined && {x: I.map((i) => attribute(x, i, data))}),
      ...(y !== undefined && {y: I.map((i) => attribute(y, i, data))}),
      ...(r !== undefined && {r: I.map((i) => attribute(r, i, data))}),
      ...(fill !== undefined && {fill: I.map((i) => attribute(fill, i, data))}),
      I,
      transform,
    };
  };
}
