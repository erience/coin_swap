import SwapContainer from "@/components/SwapContainer/SwapContainer";

const Home = () => {
  return (
    <section className="screen-wrapper">
      <div className="container">
        <div className="relative w-full min-h-screen flex items-center justify-center">
          <div className="relative w-full">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-10 items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative w-full space-y-4">
                  <h1 className="text-4xl lg:text-5xl leading-snug lg:leading-snug font-light">
                    <span className="block font-bold text-purple-500">
                      Swap
                    </span>
                    Built for the people
                  </h1>
                  <p className="text-lg">
                    Light speed swaps. High yield returns. Open API for NFTs.
                  </p>
                  <div className="">
                    <button
                      type="button"
                      className="inline-block py-2 px-6 bg-purple-500 hover:bg-purple-600 rounded-md transition-all duration-300"
                    >
                      Launch App
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <SwapContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
