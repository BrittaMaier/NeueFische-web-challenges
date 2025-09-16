import { getAllProducts } from "@/services/productServices";

const allProducts = getAllProducts();
console.log(allProducts);

export default function handler(request, response) {
  response.status(200).json({ data: allProducts });
}
