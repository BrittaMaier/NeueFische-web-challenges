import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getAllProducts().find((product) => product.id === id);

  if (!product) {
    return response.status(404).json({ status: "Not found" });
  }
  response.status(200).json(product);
}
