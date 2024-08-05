import { getCollections } from "app/services/shopify/collection";
import Link from "next/link";
import styles from "./StoreLayout.module.sass";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore our products</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection: any) => {
            return (
              <Link
                key={collection.id}
                href={`/store/${collection.handle}`}
                className={styles.StoreLayout__chip}
              >
                {collection.title}
              </Link>
            );
          })}
        </ul>
      </nav>
      {children}
    </main>
  );
}
