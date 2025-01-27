import AquariumOfInterest from "@/components/AquariumOfInterest/AquariumOfInterest";
import Finology from "@/components/Finology/Finology";
import SwapContainer from "@/components/SwapContainer/SwapContainer";

const Home = () => {
  return (
    <section className="screen-wrapper">
      <div className="container">
        <div className="relative w-full min-h-screen flex items-end justify-center py-5">
          {/* <div className="relative w-full max-w-sm ml-auto">
            <SwapContainer />
          </div> */}
          <div className="grid grid-cols-12 gap-y-8 lg:gap-8">
            <div className="col-span-12 lg:col-span-4">
              <AquariumOfInterest />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Finology />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <SwapContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
