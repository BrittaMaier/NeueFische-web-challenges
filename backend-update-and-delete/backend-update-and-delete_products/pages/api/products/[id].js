import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  try {
    const { id } = request.query;

    if (request.method === "GET") {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        response.status(404).json({ status: "Not Found" });
        return;
      }

      response.status(200).json(product);
      return;
    }
    if (request.method === "PUT") {
      const updateProduct = request.body;
      await Product.findByIdAndUpdate(id, updateProduct);
      response.status(200).json({ message: "Product successfully updated" });
      return;
    }
    if (request.method === "DELETE") {
      const deleteProduct = await Product.findByIdAndDelete(id);
      response.status(200).json({ message: "Product successfully deleted" });
      return;
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
  response.status(405).json({ status: "Method not allowed." });
}
