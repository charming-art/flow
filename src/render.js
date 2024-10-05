export function context2d(width = 640, height = 480, dpr = null) {
  if (dpr == null) dpr = devicePixelRatio;
  const canvas = document.createElement("canvas");
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  const context = canvas.getContext("2d");
  context.scale(dpr, dpr);
  return context;
}

export function render({width = 640, height = 480, setup} = {}) {
  const context = context2d(width, height);
  const data = setup();
  const {transform, I, ...value} = data;
  transform(context, I, value);
  return context.canvas;
}
