export function group(...flows) {
  return () => {
    const transform = (context) => {
      for (const flow of flows) {
        const data = flow();
        const {I, transform, ...value} = data;
        transform(context, I, value);
      }
    };
    return {transform};
  };
}
