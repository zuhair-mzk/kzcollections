"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { useParams, notFound } from "next/navigation";

// Example product data, this would typically come from a database or external API
const products = {
  "emirati-white-thobe": {
    name: "Emirati White Thobe",
    description:
      "This classic Emirati thobe is made from the finest material. Perfect for both formal and casual occasions.",
    price: 50,
    image: "/images/thobe1.jpeg",
    category: "emirati-kandora",
  },
  "emirati-charcoal-gray-kandora": {
    name: "Emirati Charcoal Gray Kandora",
    description:
      "This Emirati Kandora features a sleek, modern design in a deep charcoal gray color. Crafted from high-quality, breathable fabric, it provides comfort and elegance for any occasion.",
    price: 60,
    image: "/images/emirati-darkgray.jpg",
    category: "emirati-kandora",
  },
  "moroccan-blue-thobe": {
    name: "Moroccan Blue Thobe",
    description:
      "A stylish Moroccan thobe in a striking blue color. Made from premium fabric for comfort and elegance.",
    price: 60,
    image: "/images/moroccan-thobe.jpg",
    category: "moroccan-thobes",
  },
  "emirati-blue-kandora": {
    name: "Emirati Blue Kandora",
    description:
      "This Emirati Kandora features a sleek, modern design in a deep blue color. Crafted from high-quality, breathable fabric, it provides comfort and elegance for any occasion.",
    price: 60,
    image: "/images/emirati-blue.jpg",
    category: "Emirati Kandoras",
  },

  "moroccan-grey-thobe": {
    name: "Moroccan Grey Thobe",
    description:
      "This stylish Moroccan thobe combines traditional elegance with modern craftsmanship. Made from lightweight, breathable fabric, it features an intricate, grey embroidered neckline that adds a touch of sophistication to its minimalist design.",
    price: 60,
    image: "/images/m2.jpg",
    category: "moroccan thobes",
  },

  "moroccan-blue-thobe": {
    name: "Moroccan Blue Thobe",
    description:
      "This elegant Moroccan thobe is made from breathable, lightweight fabric and features an intricate embroidered neckline in a rich blue color. Ideal for formal and casual occasions, it blends traditional craftsmanship with modern style.",
    price: 60,
    image: "/images/m3.jpg",
    category: "moroccan thobes",
  },

  "moroccan-light-blue-thobe": {
    name: "Moroccan light blue Thobe",
    description:
      "This sophisticated Moroccan grey thobe is designed with a blend of traditional embroidery and modern elegance. Made from high-quality, lightweight fabric, it offers comfort and durability for any occasion.",
    price: 60,
    image: "/images/m1.jpg",
    category: "moroccan thobes",
  },

  "moroccan-grey---embroidered-design": {
    name: "Moroccan Grey - Embroidered Design",
    description:
      "This Moroccan grey thobe features beautiful intricate embroidery around the neckline, offering both traditional style and modern comfort. Crafted from breathable fabric, it's perfect for any occasion.",
    price: 60,
    image: "/images/m4.jpg",
    category: "moroccan thobes",
  },

  "moroccan-brown---geometric-embroidery": {
    name: "Moroccan Brown - Geometric Embroidery",
    description:
      "This Moroccan brown thobe showcases a unique geometric embroidery pattern on the neckline and chest area. It is made from high-quality fabric that ensures comfort and style.",
    price: 60,
    image: "/images/m5.jpg",
    category: "moroccan thobes",
  },

  "moroccan-light-beige---subtle-embroidery": {
    name: "Moroccan Light Beige - Subtle Embroidery",
    description:
      "This Moroccan light beige thobe combines understated elegance with a soft, breathable fabric. The delicate embroidery adds a refined touch, making it suitable for both casual and formal settings.",
    price: 60,
    image: "/images/m6.jpg",
    category: "moroccan thobes",
  },

  "grey---blue-geometric-embroidery": {
    name: "Grey - Blue Geometric Embroidery",
    description:
      "This Moroccan grey thobe is adorned with blue geometric embroidery along the neckline and chest. Made from a comfortable, breathable fabric, it provides a stylish and elegant look for any occasion.",
    price: 60,
    image: "/images/m7.jpg",
    category: "moroccan thobes",
  },

  "blue---gold-embroidery": {
    name: "Blue - Gold Embroidery",
    description:
      "This Moroccan blue thobe features stunning gold embroidery on the neckline and chest area, offering a unique blend of luxury and comfort. Perfect for both casual and formal settings.",
    price: 60,
    image: "/images/m8.jpg",
    category: "moroccan thobes",
  },

  "dark-purple---yellow-embroidery": {
    name: "Dark Purple - Yellow Embroidery",
    description:
      "This Moroccan dark purple thobe showcases a bright yellow embroidered pattern along the neckline, making a bold fashion statement. Crafted from breathable fabric, it ensures comfort and elegance.",
    price: 60,
    image: "/images/m9.jpg",
    category: "moroccan thobes",
  },

  "burgundy---white-embroidery": {
    name: "Burgundy - White Embroidery",
    description:
      "This Moroccan burgundy thobe features an intricate white embroidery design on the neckline, offering both traditional style and modern craftsmanship. The breathable fabric provides comfort in any setting.",
    price: 60,
    image: "/images/m10.jpg",
    category: "moroccan thobes",
  },

  "light-grey---dark-grey-embroidery": {
    name: "Light grey - Dark Grey Embroidery",
    description:
      "This Moroccan light grey thobe is accented with dark grey embroidery along the neckline and chest. Made from high-quality fabric, it offers a blend of tradition and modern design, suitable for any occasion.",
    price: 60,
    image: "/images/m15.jpg",
    category: "moroccan thobes",
  },

  "light-olive-thobe": {
    name: "Light Olive Thobe",
    description:
      "This Emirati thobe in light olive color provides a minimalist yet elegant look, crafted from lightweight fabric for everyday comfort.",
    price: 60,
    image: "/images/em6.jpg",
    category: "emirati kandora",
  },

  "light-grey-thobe": {
    name: "Light Grey Thobe",
    description:
      "A sleek and elegant light grey Emirati thobe, perfect for both formal and casual settings, designed for comfort and style.",
    price: 60,
    image: "/images/em7.jpg",
    category: "emirati kandora",
  },

  "emirati-white-thobe": {
    name: "Emirati White Thobe",
    description:
      "This classic white Emirati thobe is crafted from premium fabric, making it a versatile choice for formal or casual wear.",
    price: 60,
    image: "/images/thobe1.jpeg",
    category: "emirati kandora",
  },

  "dark-blue": {
    name: "Dark Blue",
    description:
      "This dark blue hooded thobe offers both comfort and style, with intricate embroidery on the front and a practical hood for a modern look.",
    price: 60,
    image: "/images/mh1.jpg",
    category: "hooded thobes",
  },

  grey: {
    name: "Grey",
    description:
      "A sleek grey hooded thobe designed with intricate embroidery and a comfortable fit. Perfect for casual wear with a modern twist.",
    price: 60,
    image: "/images/mh2.jpg",
    category: "hooded thobes",
  },

  "light-blue": {
    name: "Light Blue",
    description:
      "This light blue hooded thobe features a unique pattern, combining comfort with traditional design elements.",
    price: 60,
    image: "/images/mh3.jpg",
    category: "hooded thobes",
  },

  red: {
    name: "Red",
    description:
      "A bold burgundy/red hooded thobe with golden embroidery, offering both elegance and casual comfort.",
    price: 60,
    image: "/images/mh4.jpg",
    category: "hooded thobes",
  },

  blue: {
    name: "Blue",
    description:
      "This stylish blue hooded thobe offers a relaxed and modern look, perfect for casual or formal wear.",
    price: 60,
    image: "/images/mh7.jpg",
    category: "hooded thobes",
  },

  /* Add more products here */
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = products[slug];

  // Always declare hooks at the top level of the component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    length: "",
    shoulderWidth: "",
    discountCode: "",
    productName: product?.name || "",
  });

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!product) {
    return notFound();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.email,
            subject: "Your KZ Collections Order Confirmation",
            text: `
            Dear ${formData.name},
            
            Thank you for your order of ${formData.quantity} ${formData.productName}(s).
            
            Here are your order details:
            - Thobe Length: ${formData.length} inches
            - Shoulder Width: ${formData.shoulderWidth} inches
            
            We will be contacting you closer to September 10th to provide the details of collection and payment.
            
            If you have any questions or need further assistance, please feel free to reply to this email.
            
            Best regards,
            
            KZ Collections
            kzcollections1@gmail.com
            `,
          }),
        });

        alert("Order placed successfully! A confirmation email has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          quantity: 1,
          length: "",
          shoulderWidth: "",
          discountCode: "",
          productName: product.name,
        });
      } else {
        alert("There was an error placing your order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error placing your order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="mb-4 text-sm">
          <a href="/" className="text-primary hover:underline">
            All products
          </a>{" "}
          /{" "}
          <a
            href={`/#${product.category}`}
            className="text-primary hover:underline"
          >
            {product.category.replace("-", " ")}
          </a>{" "}
          / <span className="text-secondary">{product.name}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="flex justify-center mt-12">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-md shadow-lg border-2 border-black"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Note: Thobes will be handed over in person after September 10th,
              where payment can be made via cash or e-transfer. We will be
              contacting you to set up a time and location to give the thobe.
              For any questions regarding payment, please email us.
            </p>
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <h1 className="text-2xl font-bold mb-4 text-black">
              {product.name}
            </h1>
            <p className="text-base text-gray-700 mb-4">
              {product.description}
            </p>
            <p className="text-xl font-bold text-secondary mb-4">
              ${product.price}
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Quantity
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Thobe Length (inches)
                  <span
                    className="text-secondary text-sm cursor-pointer ml-2"
                    onClick={toggleModal}
                  >
                    How to Measure
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.length}
                  onChange={(e) =>
                    setFormData({ ...formData, length: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary">
                  Shoulder Width (inches)
                  <span
                    className="text-secondary text-sm cursor-pointer ml-2"
                    onClick={toggleModal}
                  >
                    How to Measure
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.shoulderWidth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      shoulderWidth: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  Discount Code
                </label>
                <input
                  type="text"
                  value={formData.discountCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      discountCode: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-black"
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-2 text-white rounded-md transition-all"
                  style={{
                    backgroundColor: `rgb(var(--primary-color))`,
                    color: "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      "rgb(var(--secondary-color))")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      "rgb(var(--primary-color))")
                  }
                >
                  Place Order
                </button>

                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                      className="bg-white p-6 rounded-md shadow-lg max-w-md w-full relative overflow-auto"
                      style={{ maxHeight: "90vh" }}
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        onClick={toggleModal}
                      >
                        &times;
                      </button>
                      <h2 className="text-lg font-bold mb-4 text-black">
                        How to Measure
                      </h2>
                      <Image
                        src="/images/thobe_measure.jpg"
                        alt="How to Measure Thobe"
                        width={400}
                        height={300}
                        className="mb-4 max-h-80 object-contain"
                      />
                      <h3 className="font-semibold text-black">
                        Shoulder Width
                      </h3>
                      <p className="text-sm mb-4 text-black">
                        Stand straight and relax your shoulders. Measure using a
                        measuring tape from the edge of one shoulder to the edge
                        of the other shoulder. Make sure the measuring tape is
                        straight across your back and not too tight.
                      </p>
                      <h3 className="font-semibold text-black">
                        Thobe Length (shoulder to ankle)
                      </h3>
                      <p className="text-sm text-black">
                        Stand straight and measure from the top of your shoulder
                        (near the neck) down to the desired length of the thobe.
                        Ensure the measuring tape is straight and runs down the
                        front of your body.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
