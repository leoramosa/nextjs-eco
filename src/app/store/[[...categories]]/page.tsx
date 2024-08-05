import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";
import {
  getCollectionProducts,
  getCollections,
} from "app/services/shopify/collection";
interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  // console.log(props);
  //data feching de manera paralela
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectCollectionId);
  } else {
    products = await getProducts();
  }

  // throw new Error("Error");
  // console.log(categories);
  // return <h1>Categoria dinámica: {categories}</h1>;

  return <ProductsWrapper products={products} />;
}
