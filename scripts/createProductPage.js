const fs = require("fs");
const path = require("path");

// Function to create a new product page
function createProductPage(
  productName,
  imageName,
  description,
  price,
  category
) {
  // The dynamic route slug
  const slug = productName.replace(/\s+/g, "-").toLowerCase();
  const productDirectory = path.join(
    __dirname,
    `../src/app/product/[slug]/${slug}`
  );

  if (!fs.existsSync(productDirectory)) {
    fs.mkdirSync(productDirectory, { recursive: true });
  }

  const newFilePath = path.join(productDirectory, "page.js");
  const templatePath = path.join(__dirname, "template.js");

  // Read the template file
  let fileContent = fs.readFileSync(templatePath, "utf8");

  // Replace placeholders with product details
  fileContent = fileContent
    .replace(/PRODUCT_NAME/g, productName)
    .replace(/PRODUCT_IMAGE/g, imageName)
    .replace(/PRODUCT_DESCRIPTION/g, description)
    .replace(/PRODUCT_PRICE/g, `$${price}`)
    .replace(/PRODUCT_CATEGORY/g, category.replace("-", " "));

  // Write the new product file
  fs.writeFileSync(newFilePath, fileContent);

  console.log(`Product page created: ${newFilePath}`);

  // Update the main [slug]/page.js file
  updateSlugPage(productName, imageName, description, price, category);

  // Update the main page
  updateMainPage(productName, imageName, price, category);
}

// Function to update the main [slug]/page.js file
function updateSlugPage(productName, imageName, description, price, category) {
  const slugPagePath = path.join(
    __dirname,
    "../src/app/product/[slug]/page.js"
  );
  let slugPageContent = fs.readFileSync(slugPagePath, "utf8");

  // Create the JSON entry to add to the [slug]/page.js file
  const productJson = `
  "${productName.replace(/\s+/g, "-").toLowerCase()}": {
    name: "${productName}",
    description: "${description}",
    price: ${price},
    image: "/images/${imageName}",
    category: "${category.replace("-", " ")}"
  },
  `;

  // Add the new product JSON before the specific comment
  const insertionPoint = "/* Add more products here */";
  if (slugPageContent.includes(insertionPoint)) {
    slugPageContent = slugPageContent.replace(
      insertionPoint,
      `${productJson}\n  ${insertionPoint}`
    );
  } else {
    slugPageContent += `\n${productJson}`;
  }

  // Write the updated content back to the [slug]/page.js file
  fs.writeFileSync(slugPagePath, slugPageContent);

  console.log(`[slug]/page.js updated with new product: ${productName}`);
}

// Function to update the main page with the new product
function updateMainPage(productName, imageName, price, category) {
  const mainPagePath = path.join(__dirname, "../src/app/page.tsx");
  let mainPageContent = fs.readFileSync(mainPagePath, "utf8");

  // Determine which section the product belongs to based on category
  const sectionIdentifier = `{/* Add more ${category} here */}`;

  // Create the HTML to add to the main page
  const productHtml = `
            <div className="card w-full md:w-1/3 px-2">
              <Image
                src="/images/${imageName}"
                alt="${productName}"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">${productName}</h2>
              <p className="card-price text-center mt-2">Price: $${price}</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/${productName
                  .replace(/\s+/g, "-")
                  .toLowerCase()}" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">Order Now</a>
                </Link>
              </div>
            </div>
  `;

  // Insert the new product HTML into the appropriate section
  mainPageContent = mainPageContent.replace(
    sectionIdentifier,
    `${productHtml}\n${sectionIdentifier}`
  );

  // Write the updated main page back to the file
  fs.writeFileSync(mainPagePath, mainPageContent);

  console.log(`Main page updated with new product: ${productName}`);
}

// Example usage:

createProductPage(
  "Emirati Blue Kandora",
  "emirati-blue.jpg",
  "This Emirati Kandora features a sleek, modern design in a deep blue color. Crafted from high-quality, breathable fabric, it provides comfort and elegance for any occasion.",
  55.0,
  "Emirati Kandoras"
);
