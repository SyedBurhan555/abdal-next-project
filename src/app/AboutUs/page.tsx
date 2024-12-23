import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - Hekto</title>
        <meta
          name="description"
          content="Learn about Hekto's ecommerce business, history, and features."
        />
      </Head>
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold text-center mb-4">About Us</h1>
        <p className="text-gray-500 text-center mb-10">Home &gt; Pages &gt; About Us</p>
        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/aboutus1" 
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-10">
            <h2 className="text-2xl font-bold mb-4">Know About Our Ecommerce Business, History</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis aliquet
              efficitur. Proin sed luctus dui. Aenean tincidunt felis non sollicitudin laoreet.
            </p>
            <Link
              href="/contact"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/fd.png" 
                alt="Free Delivery"
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/cb.png" 
                alt="100% Cash Back"
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">100% Cash Back</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/pq.png" 
                alt="Quality Product"
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Quality Product</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/hs.png"
                alt="24/7 Support"
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Our Client Say!</h2>
          <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center mb-4">
              <Image
                src="/images/Group200.png" 
                alt="Client"
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <h3 className="text-lg font-semibold">Selina Gomez</h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor velit at feugiat
              lobortis. Suspendisse potenti.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
