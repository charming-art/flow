export function flow(...transforms) {
  return () => {
    let data;
    for (const transform of transforms) {
      data = transform(data);
    }
    return data;
  };
}
