import SwapContainer from "@/components/SwapContainer/SwapContainer";

const Home = () => {
  return (
    <section className="screen-wrapper">
      <div className="container">
        <div className="relative w-full min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-xl">
            <SwapContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
