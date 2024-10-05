export function flow(...transforms) {
  return (context) => {
    let data;
    for (const transform of transforms) {
      data = transform(data);
    }
    const {transform, I, ...value} = data;
    transform(I, value, context);
  };
}
