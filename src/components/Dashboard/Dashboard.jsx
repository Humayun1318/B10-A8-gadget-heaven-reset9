

const Dashboard = () => {
  return (
    <div className="">
      <div className=" w-full bg-[#9538E2] py-8 text-center px-4">
        <h5 className="text-2xl lg:text-3xl font-bold text-white">Dashboard</h5>
        <p className="mt-4 mb-8 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="py-3.5 px-16 rounded-4xl border border-solid border-white text-white text-lg font-extrabold">cart
          </button>
          <button className="py-3.5 px-16 rounded-4xl border border-solid border-white text-white text-lg font-extrabold">wishlist
          </button>
        </div>
      </div>
      <div className=" mt-12 mb-72 sm:w-[90%] lg:w-[80%] mx-auto">

      </div>
    </div>
  );
};

export default Dashboard;