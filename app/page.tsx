'use client'
import Mainanimator from "./components/mainanimator";
import Features from "./components/features";
import Hotsellingproducts from "./components/hotsellingproducts";
import Dealsbanner from "./components/dealsbanner";
import Featuredproducts from "./components/featuredproducts";
import Eventdata from "./components/eventdata";
import Vetproducts from "./components/vetproducts";
import Vertinarypractice from "./components/vertinaryprac";
import Vetpetgrid from "./components/vetpetgrid";
import Preferredvendors from "./components/preferredvendors";

export default function HomePage() {
  
  return (
    <>
      <Mainanimator />
      <Features />
      <div className="container mx-auto px-6">
        <Hotsellingproducts />
      </div>
      <div className="px-62 py-20">
        <Dealsbanner />
      </div>
      <div className="container mx-auto px-6 mt-20">
        <Featuredproducts />
      </div>
      <div className="my-40 mx-65">
        <img src="assets/s3.png" alt="" className="w-full h-auto object-cover" />
      </div>
      <Eventdata />
      <Vetproducts />
      <div className="container mx-auto px-6 mt-20">
        <Vertinarypractice />
      </div>
      <Vetpetgrid />
      <div className="container mx-auto px-6 mt-20">
        <Preferredvendors />
      </div>
    </>
  );
}
