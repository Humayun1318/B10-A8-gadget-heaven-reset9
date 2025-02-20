

const Banner = () => {
  return (
    <div className='text-center text-white w-11/12 lg:w-9/12 mx-auto '>
      <h1 className='text-4xl lg:text-6xl font-bold mb-6'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className='mb-8'>Explore the latest gagets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button className='py-3 lg:py-4 px-5 lg:px-8 rounded-4xl shadow-lg bg-white text-[#9538E2] text-xl cursor-pointer font-bold duration-300 
      hover:bg-gray-200'
        id="products"
      ><a href="#products" >Shop Now</a></button>
    </div>
  );
};

export default Banner;