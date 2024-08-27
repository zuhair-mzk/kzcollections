import clientPromise from "../../src/app/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Connecting to MongoDB...");
      const client = await clientPromise;
      console.log("Connected to MongoDB");

      const db = client.db("<dbname>"); // Replace <dbname> with your actual database name
      const {
        name,
        email,
        phone,
        quantity,
        length,
        shoulderWidth,
        discountCode,
        productName,
      } = req.body;

      console.log("Inserting document...");
      const collection = db.collection("orders");
      await collection.insertOne({
        productName, // Store the product name or ID to categorize orders
        name,
        email,
        phone,
        quantity,
        length,
        shoulderWidth,
        discountCode,
        createdAt: new Date(),
      });
      console.log("Document inserted");

      res.status(201).json({ message: "Order placed successfully!" });
    } catch (error) {
      console.error("Error inserting document:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
