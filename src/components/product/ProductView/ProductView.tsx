"use client";
//redirect como hooks

import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML";
import styles from "./ProductView.module.sass";
// import { useRouter } from "next/navigation";
interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  //segundo metodo de redirecto usando un hooks
  // const router = useRouter();
  // if (!product) {
  //   router.push("/");
  // }
  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>{product.tags}</p>
        {/* <p className={styles.ProductView__info__description}>
          {product.description}
        </p> */}

        <SanitizeHTML tag="p">{product.description}</SanitizeHTML>

        <span className={styles.ProductView__info__price}>
          $ {product.price}
        </span>
        <ProductViewItemsOrder
          maxQuantity={product.quantity}
          product={product}
        />
      </section>
    </main>
  );
};
