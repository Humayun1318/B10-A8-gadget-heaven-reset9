import { useContext } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { DataContext } from "../../Context/context";


const Statistics = () => {
  const { data } = useContext(DataContext)
  const firstTen = data.filter(p => p.price > 1000 ? p : '').map(p => {
    const re = {
      name: p.product_title?.split(' ').shift(),
      price: p.price,
      rating: p.rating,
    }
    return re;
  })
 
  return (
    <div className="mb-24">
      <div className=" w-full bg-[#9538E2] py-8 text-center px-4">
        <h5 className="text-2xl lg:text-3xl font-bold text-white">Statistics</h5>
        <p className="mt-4 mb-8 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <h2 className="mb-8 font-bold text-2xl text-[#0B0B0B] mt-12 sm:w-[90%] lg:w-[80%] mx-auto">Statistics</h2>
      <div className=" h-[500px] bg-white sm:w-[90%] lg:w-[80%] mx-auto 
      pt-20 pr-8 pb-13 pl-8 rounded-2xl">
      <h2 className="text-xl font-bold text-center mb-4">
        Price vs. Product Name Chart
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={firstTen} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Area for Prices */}
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />

          {/* Bar for Prices */}
            <Bar dataKey="price" barSize={15} fill="#9538E2" />

          {/* Scatter for Ratings */}
          <Scatter dataKey="rating" fill="red" />

        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;