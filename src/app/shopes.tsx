import React from 'react';

const Shopes = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              What Shopex Offers
            </h1>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {["Alper Kamu", "Holden Caulfield", "Atticus Finch", "Henry Letham"][index]}
                  </h2>
                  {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shopes;