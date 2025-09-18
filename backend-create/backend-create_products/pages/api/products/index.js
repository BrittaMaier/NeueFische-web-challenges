import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  try {
    //GET method means that we request to read data from the database
    if (request.method === "GET") {
      //here we refer to / copy every data from Product
      const products = await Product.find();
      //Here we define the statusCode property of the response object to have the value 200
      //and add products (as an object) as a value to the body property of the response object
      response.status(200).json(products);

      return;
    }
    //POST method means that I want to add new data to the database
    if (request.method === "POST") {
      console.log("In the POST");
      const productData = request.body;
      await Product.create(productData);

      return response.status(201).json({ status: "Product created" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
