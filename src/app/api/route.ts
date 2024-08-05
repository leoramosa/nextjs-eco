// probando la api
// export async function GET() {
//   const message = "Hello, Next.js!";
//   return Response.json({ message });
// }

import { getProducts } from "app/services/shopify";

export async function GET() {
  const products = await getProducts();
  return Response.json({ products });
}
