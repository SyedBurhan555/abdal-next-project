import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Head>
        <title>404 Not Found - Hekto</title>
      </Head>

      {/* Main Content */}
      <main className="flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800">404 Not Found</h1>
          <div className="mt-8">
            <Image
              src="/images/404.png" // Make sure the image exists in the 'public/images' folder
              alt="404 Not Found"
              width={913}
              height={526.6}
              className="max-w-full h-auto mx-auto"
            />
            <p className="text-xl text-gray-600 mt-4">Oops! The page you requested was not found!</p>
          </div>

          <Link
            href="/"
            className="mt-6 inline-block bg-blue-500 text-white hover:bg-pink-600 hover:text-white px-6 py-3 rounded-md text-lg "
          >
            Back To Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
