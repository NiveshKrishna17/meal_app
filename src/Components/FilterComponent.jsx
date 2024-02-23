import React, { useState } from "react";
import { Card } from "../Components";
import useStore from "../store";
import { DeleteTwoTone } from "@ant-design/icons";

const FilterComponent = () => {
  const data = useStore((state) => state.data);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = data?.filter((item) =>
    item.strCategory.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search input field */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => setSearchQuery("")}
          className="ml-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          <DeleteTwoTone />
        </button>
      </div>

      {/* Render filtered data using Card component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData?.length > 0 ? (
          filteredData?.map((item, id) => <Card key={id} data={item} />)
        ) : (
          <p className="text-3xl text-white font-Poppins">No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
