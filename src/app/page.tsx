import Image from 'next/image';
import Link from 'next/link';
import ProductGrid from './components/latestproduct';
import Shopes from './shopes';
import lamp from "../assets/images/image32.png";
import sofapic from "../assets/images/hero-chair.png";


export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Image src={lamp} alt='lamp' width="387" height="387" />
            <div className='width="644" height="248"'><h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              New Furniture Collection Trends in 2020
            </h1></div>
            <p className="mb-8 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg">
                Shop Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src={sofapic} alt="hero-section" width="629" height="629" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="border rounded-lg p-4 text-center">
                <Image src="/images/chair1.png" alt="Unique Product" width="300" height="300" />
                <h3 className="text-lg font-medium">Comfort Handy Craft</h3>
                <p className="text-primary text-xl font-bold">$42.00</p>
                <Link href={`/product/${id}`} className="text-primary hover:underline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid />
      <Shopes />
      {/* <Uniquefeature/> */}
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2024 Hekto. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 