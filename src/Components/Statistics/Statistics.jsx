import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const [gadgetItems, setGadgetItems] = useState([]);
  const allGadgets = useLoaderData();

  useEffect(() => {
    const allItems = allGadgets.products.flatMap(category => category.items);
    setGadgetItems(allItems);
  }, [allGadgets]);

  const data = gadgetItems.map(({ price, rating }) => ({ price, rating }));

  return (
    <div className="w-full">
      <div className="hero bg-[#9538E2] h-[344px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md justify-center items-center">
            <h1 className="text-4xl font-bold">Statistics</h1>
            <p className="mt-4 font-regular text-lg">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the
              coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 ml-6 md:ml-24 font-bold text-2xl">Statistics</p>

      {/* ComposedChart */}
      <div className="flex justify-center px-4 md:px-0">
        <div className="w-full md:w-[80%]">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="price" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="rating" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="rating" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="rating" stroke="#ff7300" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
