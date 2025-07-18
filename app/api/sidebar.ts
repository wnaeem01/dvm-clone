export async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subcategories`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch categories. Status:', res.status);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
