import { useEffect } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = ({ gadgets, filteredGadgets, setGadgets, setFilteredGadgets }) => {
  useEffect(() => {
    // Fetch gadgets from the server
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data); // Initialize with all gadgets
      })
      .catch((error) => console.error("Error fetching gadgets:", error));
  }, [setGadgets, setFilteredGadgets]);

  const dataToDisplay = filteredGadgets?.products || []; // Fallback to an empty array

  return (
    <div className="px-4 sm:px-6 md:px-8">
      {Array.isArray(dataToDisplay) && dataToDisplay.length > 0 ? (
        dataToDisplay.map((category, idx) => (
          <Gadget key={idx} category={category}></Gadget>
        ))
      ) : (
        <p className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-[30%]">No gadget exists here right now at this moment!</p> // Fallback message
      )}
    </div>
  );
};

export default Gadgets;

