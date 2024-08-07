import { ProductView } from "app/components/product/ProductView/ProductView";
import { getProducts } from "app/services/shopify/products";
import { title } from "process";
// import { redirect } from "next/navigation";
//usaresmos otro metodo con los hooks

// import { useParams, useSearchParams } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

//el componente debe ser del tipo cliente

export default async function ProductPage({ searchParams }: ProductPageProps) {
  //   const params = useParams();
  //o podemo usar useSearchParams
  //   const searchParams = useSearchParams();
  //   const id = searchParams.get("id");
  //   console.log("searchParams", id);

  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];
  //redirect primer metodo
  // if (!id) {
  //   redirect("/store");
  // }

  return <ProductView product={product} />;
}
