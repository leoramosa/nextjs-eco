//este es un achivo de types de manera global
interface ErrorPageProps {
  error: Error;
  reset(): void;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};
