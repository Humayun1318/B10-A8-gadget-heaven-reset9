import bannerImg from '../../assets/banner.jpg'

const Home = () => {
  return (
    <div className='relative -top-65'>
      <div className='p-6 rounded-4xl border-4 border-white bg-[#FFFFFF4D] w-[69.9%] mx-auto h-[560px] '>
        <img src={bannerImg} alt="" className='rounded-3xl h-full w-full'/>
      </div>
        <h1>this is home</h1>
    </div>
  );
};

export default Home;