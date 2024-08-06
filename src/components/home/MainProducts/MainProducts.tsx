import Image from "next/image";
import styles from "./MainProducts.module.sass";
import { getMainProducts } from "app/services/shopify/products";

export const MainProducts = async () => {
  // const products = await getProducts();
  // console.log(products);

  //al tener una api interna podemos hacer esto
  // const response = await fetch("http://localhost:3000/api");
  // const { products } = await response.json();

  const products = await getMainProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                priority={false}
                src={imageSrc}
                fill
                alt={product.title}
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
