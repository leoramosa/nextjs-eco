"use client";

import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACEHOLDE_IMAGE =
  "data:image/jpeg;base64,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";
export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const contextButton = classNames.bind(styles);

  const buttonStyles = contextButton("Description__button", {
    "Description__button--border": hasBorder,
  });
  console.log(buttonStyles);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDE_IMAGE}
            /*  Priority is para ver la imagen de lazy load */
            /*  priority={false} */
            /*  queality is para ver la calidad de la imagen */
            /*  quality={100} */
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrows Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
