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
            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/em5.jpg"
                alt="Emirati White Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Emirati White Thobe
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
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
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Emirati Charcoal Gray Kandora
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
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
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Emirati Blue Kandora
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/emirati-blue-kandora" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/em6.jpg"
                alt="Light Olive Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">Light Olive Thobe</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/light-olive-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/em7.jpg"
                alt="Light Grey Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">Light Grey Thobe</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/light-grey-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            {/* Add more emirati-kandora here */}
          </div>
        </section>

        {/* Section: Moroccan Thobes */}
        <section id="moroccan-thobes" className="py-8">
          <h2 className="text-4xl font-arabic text-center text-primary mb-8">
            Moroccan Thobes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m1.jpg"
                alt="Moroccan light blue Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Moroccan light blue Thobe
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/moroccan-light-blue-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full sm:w-1/2 lg:w-1/4 p-2">
              <Image
                src="/images/m2.jpg"
                alt="Moroccan Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Grey Moroccan Thobe
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/moroccan-grey-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full sm:w-1/2 lg:w-1/4 p-2">
              <Image
                src="/images/m3.jpg"
                alt="Moroccan Thobe"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Blue Moroccan Thobe
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/moroccan-blue-thobe" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m4.jpg"
                alt="Moroccan Grey - Embroidered Design"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Moroccan Grey - Embroidered Design
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/moroccan-grey---embroidered-design"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m5.jpg"
                alt="Moroccan Brown - Geometric Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Moroccan Brown - Geometric Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/moroccan-brown---geometric-embroidery"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m6.jpg"
                alt="Moroccan Light Beige - Subtle Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Moroccan Light Beige - Subtle Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/moroccan-light-beige---subtle-embroidery"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m7.jpg"
                alt="Grey - Blue Geometric Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Grey - Blue Geometric Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/grey---blue-geometric-embroidery"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m8.jpg"
                alt="Blue - Gold Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Blue - Gold Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/blue---gold-embroidery" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m9.jpg"
                alt="Dark Purple - Yellow Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Dark Purple - Yellow Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/dark-purple---yellow-embroidery"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m10.jpg"
                alt="Burgundy - White Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Burgundy - White Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/burgundy---white-embroidery"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/m15.jpg"
                alt="Light grey - Dark Grey Embroidery"
                width={500}
                height={500}
                className="rounded-md border-2 border-black object-cover w-full h-72"
              />
              <h2 className="card-title text-center mt-4">
                Light grey - Dark Grey Embroidery
              </h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/product/light-grey---dark-grey-embroidery"
                  legacyBehavior
                >
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            {/* Add more moroccan-thobes here */}
          </div>
        </section>

        {/* NEW Section: Hooded Thobes */}
        <section id="hooded-thobes" className="py-8">
          <h2 className="text-4xl font-arabic text-center text-primary mb-8">
            Hooded Thobes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/mh7.jpg"
                alt="Blue"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Blue</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/blue" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/mh1.jpg"
                alt="Dark Blue"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Dark Blue</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/dark-blue" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/mh2.jpg"
                alt="Grey"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Grey</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/grey" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/mh3.jpg"
                alt="Light Blue"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Light Blue</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/light-blue" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            <div className="card w-full md:w-1/4 px-2">
              <Image
                src="/images/mh4.jpg"
                alt="Red"
                width={500}
                height={500}
                className="rounded-md border-2 border-black"
              />
              <h2 className="card-title text-center mt-4">Red</h2>
              <p className="card-price text-center mt-2">Price: $60</p>
              <div className="flex justify-center mt-4">
                <Link href="/product/red" legacyBehavior>
                  <a className="btn-order bg-primary text-white px-4 py-2 rounded-md">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>

            {/* Add more hooded-thobes here */}
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
