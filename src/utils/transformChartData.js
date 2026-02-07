export function transformRevenueData(products = []) {
  if (!products.length) return [];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return months.map((month, i) => {
    const product = products[i % products.length];

    return {
      name: month,
      value: Math.round(product.price * 1.5),
    };
  });
}


export function transformCategoryData(products = []) {
  if (!products.length) return [];

  const categories = {};

  products.forEach((p) => {
    categories[p.category] =
      (categories[p.category] || 0) + 1;
  });

  return Object.entries(categories).map(([name, value]) => ({
    name,
    value,
  }));
}

