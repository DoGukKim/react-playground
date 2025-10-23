export function updateQuantity(newQuantity: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}
