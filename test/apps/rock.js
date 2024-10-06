import * as cm from "@charming-art/flow";

export function rock() {
  return cm.render({
    width: 640,
    height: 640,
    setup: cm.flow(
      cm.range(10),
      cm.circle({x: 320, y: (_, i) => i, r: (_, i) => i}),
      cm.mapColumn({
        y: {range: [60, 580]},
        r: {range: [5, 50]},
      }),
    ),
  });
}
