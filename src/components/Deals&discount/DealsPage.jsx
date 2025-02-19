import { useState, useEffect, useContext } from "react";
import {  FaClock } from "react-icons/fa";
import { DataContext } from "../../Context/context";
import { IoCartOutline } from "react-icons/io5";


const DealsPage = () => {
  const [deals, setDeals] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const { data, handleAddToCart } = useContext(DataContext)

  useEffect(() => {
    const dealsData = data
      .filter(p => p.rating == 4.9) 
      .map(p => ({
        id: p.product_id,
        name: p.product_title,
        originalPrice: p.price,
        discountPrice: p.price - (p.price * 0.2),
        image: p.product_image,
        category: p.category,
        discount: Math.floor(Math.random() * (25 - 20 + 1)) + 20,
        timeLeft: Math.floor(Math.random() * (3600 - 1800 + 1)) + 1800
      }));

    setDeals(dealsData); 
  }, [data]); 


  useEffect(() => {
    const interval = setInterval(() => {
      setDeals((prevDeals) => {
        const updatedDeals = prevDeals.map((deal) =>
          deal.timeLeft > 0
            ? { ...deal, timeLeft: deal.timeLeft - 1 }
            : { ...deal, expired: true }
        );
        const allExpired = updatedDeals.every(deal => deal.expired);
        if (allExpired) clearInterval(interval);
        return updatedDeals;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, [deals]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const sortedDeals = [...deals].sort((a, b) => {
    if (sortBy === "discount") return b.discount - a.discount;
    if (sortBy === "price") return a.discountPrice - b.discountPrice;
    return 0;
  });

  return (
    <div className="mb-20">
      <div className=" w-full bg-[#9538E2] py-8 text-center px-4">
        <h5 className="text-2xl lg:text-3xl font-bold text-white">🔥 Latest Deals & Discounts</h5>
        <p className="mt-4 mb-8 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className="sm:w-[90%] lg:w-[80%] mx-auto mt-6 px-4 sm:px-0">
        <div className="flex justify-between mb-4">
          <p className="font-medium">Find the best gadget deals before time runs out!</p>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 rounded text-sm appearance-none"
          >
            <option value="default">Sort By:</option>
            <option value="discount"
            className="w-6">Highest Discount</option>
            <option value="price">Lowest Price</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {sortedDeals.map((deal, idx) => (
            <div key={idx} className="p-8 relative bg-white rounded-2xl flex flex-col justify-between">
              <img src={deal.image} alt={deal.name} className="w-full mb-2" />
              <div>
                <h2 className="text-xl font-semibold">{deal.name}</h2>
                <p className="text-red-500 font-bold">
                  ${deal.discountPrice} <span className="line-through text-gray-500">${deal.originalPrice}</span>
                </p>
                <p className="text-green-600">Save {deal.discount}%</p>
                <p className="flex items-center mt-2 text-gray-600">
                  <FaClock className="mr-2" /> Time Left: {deal.expired ? "Expired" : formatTime(deal.timeLeft)}
                </p>
                <div className="mt-4 ">
                  <button className="mr-4 flex items-center gap-3 px-3 lg:px-5 py-0 lg:py-2.5 bg-[#9538E2] rounded-4xl text-white text-lg font-bold shadow cursor-pointer hover:bg-[#9538e2ef]"
                    onClick={() => handleAddToCart(deal.id, deal?.discountPrice)}
                  >Add To Card
                    <IoCartOutline className='' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
