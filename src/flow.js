export function flow(raw, ...transforms) {
  return (prev) => {
    if (typeof raw === "function") {
      return prev.map((item, i, array) => {
        let data = raw(item, i, array);
        for (const transform of transforms) data = transform(data);
        return data;
      });
    } else {
      let data = raw;
      for (const transform of transforms) data = transform(data);
      return data;
    }
  };
}
