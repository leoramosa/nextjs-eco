import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "😄 Future World",
  description: "Empowering your tomorrow",
  keywords: "products, marketplace",
};
export default function Home() {
  return (
    <main className="">
      <MainProducts />
    </main>
  );
}
