export function group(...flows) {
  return (data) => {
    const transform = (context) => {
      for (const flow of flows) {
        const {I, transform, ...value} = flow(data);
        transform(context, I, value);
      }
    };
    return {transform};
  };
}
