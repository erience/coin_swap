import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/components/tabs";
import AquariumOfInterest from "../AquariumOfInterest/AquariumOfInterest";
import Finology from "../Finology/Finology";
import SwapContainer from "../SwapContainer/SwapContainer";

const TabsContainer = () => {
  return (
    <div className="relative w-full border border-[#2b5876] rounded-lg overflow-hidden z-[1]">
      <div className="absolute left-0 top-0 w-full h-full bg-sea-blue opacity-95 z-[-1]"></div>
      {/* <div className="p-4 border-b">
        <h2>Swap</h2>
      </div> */}
      <div className="w-full p-4 py-4">
        <Tabs defaultValue="aquariumOfInterest" className="w-full">
          <TabsList>
            <TabsTrigger value="aquariumOfInterest">Aquarium of Interest</TabsTrigger>
            <TabsTrigger value="finlogy">Finlogy</TabsTrigger>
            <TabsTrigger value="swap">Swap</TabsTrigger>
          </TabsList>
          <TabsContent value="aquariumOfInterest">
            <AquariumOfInterest />
          </TabsContent>
          <TabsContent value="finlogy"><Finology /></TabsContent>
          <TabsContent value="swap"><SwapContainer /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsContainer;
