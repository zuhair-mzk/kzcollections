import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="container mx-auto px-1 py-24">
        {/* Section: Emirati Kandora */}
        <section id="emirati-kandora" className="py-8">
          <h2 className="text-4xl font-arabic text-center text-primary mb-8">
            Emirati Kandora
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="card w-full sm:w-1/2 lg:w-1/4 p-2">
              <Image
                src="/images/thobe1.jpeg"
                alt="Plain White Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Plain White Thobe</h2>
              <p className="card-price text-center mt-2">Price: $50</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/emirati-white-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="card w-full sm:w-1/2 lg:w-1/4 p-2">
              <Image
                src="/images/emirati-darkgray.jpg"
                alt="Emirati Charcoal Gray Kandora"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">
                Emirati Charcoal Gray Kandora
              </h2>
              <p className="card-price text-center mt-2">Price: $55</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/emirati-charcoal-gray-kandora"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="card w-full sm:w-1/2 lg:w-1/4 p-2">
              <Image
                src="/images/emirati-blue.jpg"
                alt="Emirati Blue Kandora"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">
                Emirati Blue Kandora
              </h2>
              <p className="card-price text-center mt-2">Price: $55</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/emirati-blue-kandora" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            {/* Add more Emirati Kandoras here */}
          </div>
        </section>

        {/* Section: Moroccan Thobes */}
        <section id="moroccan-thobes" className="py-8">
          <h2 className="text-4xl font-arabic text-center text-primary mb-8">
            Moroccan Thobes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="card w-full sm:w-1/2 lg:w-1/4 p-2">
              <Image
                src="/images/thobe2.webp"
                alt="Moroccan Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Moroccan Thobe</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/moroccan-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>
            {/* Add more Moroccan Thobes here */}
          </div>
        </section>

        {/* Section: Abayas */}
        <section id="abayas" className="py-8">
          <h2 className="text-4xl font-arabic text-center text-primary mb-8">
            Abayas
          </h2>
          <div className="flex justify-center">
            <div className="card w-4/5 flex flex-col items-center justify-center">
              <p className="text-xl font-semibold text-primary">Coming Soon</p>
              <p className="text-center mt-2 text-black">
                Our Abayas collection will be available soon.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
