const BASE_URL = "https://dummyjson.com";

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
