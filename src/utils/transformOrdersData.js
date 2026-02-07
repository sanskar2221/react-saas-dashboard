export function transformOrdersData(products) {
  if (!products) return [];

  return products.slice(0, 6).map((product, index) => ({
    id: `#ORD-${1000 + index}`,
    product: product.title,
    amount: `$${product.price}`,
    status: getRandomStatus(),
    date: new Date().toLocaleDateString(),
  }));
}

function getRandomStatus() {
  const statuses = ["Completed", "Pending", "Cancelled"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}
