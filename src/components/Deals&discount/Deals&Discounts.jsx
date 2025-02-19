import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaShoppingCart, FaClock } from "react-icons/fa";

const dealsData = [
  {
    id: 1,
    name: "iPhone 14",
    originalPrice: 999,
    discountPrice: 849,
    image: "https://via.placeholder.com/150",
    category: "Phones",
    discount: 15,
    timeLeft: 3600, // 1 hour in seconds
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    originalPrice: 899,
    discountPrice: 749,
    image: "https://via.placeholder.com/150",
    category: "Phones",
    discount: 20,
    timeLeft: 7200, // 2 hours
  },
  {
    id: 3,
    name: "Apple Watch Series 8",
    originalPrice: 499,
    discountPrice: 399,
    image: "https://via.placeholder.com/150",
    category: "Smartwatches",
    discount: 20,
    timeLeft: 1800, // 30 minutes
  },
];

const DealsPage = () => {
  const [deals, setDeals] = useState(dealsData);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const interval = setInterval(() => {
      setDeals((prevDeals) =>
        prevDeals.map((deal) =>
          deal.timeLeft > 0
            ? { ...deal, timeLeft: deal.timeLeft - 1 }
            : { ...deal, expired: true }
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🔥 Latest Deals & Discounts</h1>
      <div className="flex justify-between mb-4">
        <p>Find the best gadget deals before time runs out!</p>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="default">Sort By</option>
          <option value="discount">Highest Discount</option>
          <option value="price">Lowest Price</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedDeals.map((deal) => (
          <Card key={deal.id} className="p-4 relative">
            <img src={deal.image} alt={deal.name} className="w-full mb-2" />
            <CardContent>
              <h2 className="text-xl font-semibold">{deal.name}</h2>
              <p className="text-red-500 font-bold">
                ${deal.discountPrice} <span className="line-through text-gray-500">${deal.originalPrice}</span>
              </p>
              <p className="text-green-600">Save {deal.discount}%</p>
              <p className="flex items-center mt-2 text-gray-600">
                <FaClock className="mr-2" /> Time Left: {deal.expired ? "Expired" : formatTime(deal.timeLeft)}
              </p>
              <div className="mt-4 flex justify-between">
                <Button className="bg-blue-500 text-white flex items-center">
                  <FaShoppingCart className="mr-2" /> Grab This Deal
                </Button>
                <Button className="bg-yellow-500 text-white">Notify Me</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
