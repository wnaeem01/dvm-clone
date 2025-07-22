export async function getAllProducts(){
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      next: { revalidate: 60 },
      cache: "no-store"
    });

    if (!res.ok) {
      console.error('Failed to fetch products. Status:', res.status);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProduct(slug: string) {
  try {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
      next: { revalidate: 60 },
      cache:"no-store"
    });

    if (!res.ok) {
      console.error('Failed to fetch product. Status:', res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}