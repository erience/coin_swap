import SwapContainer from "@/components/SwapContainer/SwapContainer";

const Home = () => {
  return (
    <section className="screen-wrapper">
      <div className="container">
        <div className="relative w-full min-h-screen flex items-end justify-center py-5">
          <div className="relative w-full max-w-sm ml-auto">
            <SwapContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
