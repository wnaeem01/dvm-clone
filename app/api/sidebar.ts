export function getCategories() {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/subcategories`, {
    next: { revalidate: 60 },
  }).then(res => res.json());
}
