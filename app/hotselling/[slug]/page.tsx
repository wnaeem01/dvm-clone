import { getProduct } from "@/app/api/products";

export interface ProductDetailProps {
  slug: string | null;
}

const Page = async ({ params }: { params: ProductDetailProps }) => {
  if (params.slug === null) {
    // Handle the case where slug is null, e.g., show an error or redirect
    return <div>Invalid product slug.</div>;
  }
  const product = await getProduct(params.slug);

  return (
    <div>
      {product && product.description}
    </div>
  )
}

export default Page
