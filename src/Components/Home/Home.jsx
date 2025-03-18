import { useState } from "react";
import bannerImg from "../../assets/assets/banner.jpg";
import Gadgets from "../Gadgets/Gadgets";
import SideBarBtns from "../SideBarBtns/SideBarBtns";

const Home = () => {
  const [gadgets, setGadgets] = useState({ products: [] });
  const [filteredGadgets, setFilteredGadgets] = useState({ products: [] });

  const handleFilteredItem = (categoryName) => {
    console.log("Filtering by Category:", categoryName); // Debug
    console.log("Available Categories:", gadgets.products.map((product) => product.categoryName)); // Debug

    if (!categoryName) {
      setFilteredGadgets(gadgets);
      return;
    }

    const filteredItems = {
      products: gadgets.products.filter(
        (category) =>
          category.categoryName &&
          category.categoryName.toLowerCase() === categoryName.toLowerCase()
      ),
    };

    console.log("Filtered Items:", filteredItems); // Debugging
    setFilteredGadgets(filteredItems);
  };

  return (
    <div>
      {/* Banner Part */}
      <div className="relative hero min-h-screen bg-[#9538E2]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessories with Gadget Heaven Accessories
            </h1>
            <p className="mt-5 font-semibold">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn btn-primary mt-8">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="absolute left-1/2 -translate-x-1/2 -mt-28 z-10 text-center">
        <img
          className="h-[463px] w-[1062px] rounded-lg object-cover mx-auto"
          src={bannerImg}
          alt="Banner"
        />
        <h3 className="text-4xl font-bold mt-8">
          Explore Cutting-Edge Gadgets
        </h3>
      </div>

      {/* Gadget Section with Sidebar */}
      <section className="mt-[500px] mx-12 flex flex-col lg:flex-row justify-between">
        {/* Sidebar */}
        <div className="flex justify-center mb-[2590px] items-center md:w-auto w-full">
          <SideBarBtns handleFilteredItem={handleFilteredItem}></SideBarBtns>
        </div>

        {/* Gadgets Section */}
        <div className="w-full lg:w-[990px] p-4 rounded-lg">
          <Gadgets
            gadgets={gadgets}
            filteredGadgets={filteredGadgets}
            setGadgets={setGadgets}
            setFilteredGadgets={setFilteredGadgets}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;