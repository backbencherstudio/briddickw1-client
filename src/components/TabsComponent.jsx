import { useState } from "react";
import SellMultipleForm from "./SellMultipleForm";
import BuyMultipleForm from "./BuyMultipleForm";
import SellAndBuyMultipleForm from "./SellAndBuyMultipleForm";

const TabsComponent = () => {
  const [tabIndex, setTabIndex] = useState(0); // Track which tab is active

  const tabs = [
    { id: 0, label: "Sell", component: <SellMultipleForm /> },
    { id: 1, label: "Buy", component: <BuyMultipleForm /> },
    { id: 2, label: "Sell & Buy", component: <SellAndBuyMultipleForm /> },
  ];

  return (
    <div className=" max-w-[1087px] mx-auto rounded-lg">
      {/* Tabs Navigation */}
      <div className="  bg-white  rounded-t-lg py-3 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabIndex(tab.id)}
            className={`pb-3 px-3 text-xl font-semibold ${
              tabIndex === tab.id
                ? "border-b-4 border-[#23298B] text-[#23298B]"
                : "text-gray-500 hover:text-[#1f2249]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-100 rounded-b-lg">{tabs[tabIndex].component}</div>
    </div>
  );
};

export default TabsComponent;
