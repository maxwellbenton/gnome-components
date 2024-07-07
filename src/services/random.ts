export function generateRandomPosition(
  height: number,
  width: number
): { x: number; y: number } {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  };
}