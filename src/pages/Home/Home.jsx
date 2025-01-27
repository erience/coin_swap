import TabsContainer from "@/components/TabsContainer/TabsContainer";

const Home = () => {
  return (
    <section className="screen-wrapper">
      <div className="container">
        <div className="relative w-full min-h-screen flex items-end justify-center py-5">
          <div className="relative w-full max-w-md ml-auto">
            {/* <SwapContainer /> */}
            <TabsContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
