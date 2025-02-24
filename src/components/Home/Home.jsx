import { Link, Outlet } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'
import Sidebar from './Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import Marquee from 'react-fast-marquee';


const Home = () => {
 
  

 
 
  return (
    <div className='-mt-[600px] scroll-smooth'>
      <div className='text-center bg-white mb-6 space-y-6 opacity-70'>
        <Marquee speed={100} gradient={true} pauseOnHover={true}>
          <Link to="/deals" className="font-extrabold text-2xl text-red-500 mx-4">
            ▶️ Click Me!
            <span>🔥 Today's Hot Deals! 🔥"</span>
            <span>Limited Time Offer! Hurry Up! 🚀</span>
            <span>💥 Grab the Best Deals Before Time Runs Out! 💥</span>
            Click Me! ▶️
          </Link>
        </Marquee>
      </div>
      <div className='mb-8'>
        <Banner></Banner>
      </div>
      <div className=''>
        <div >
          <div className='p-6 rounded-4xl border-4 border-white bg-[#FFFFFF4D] w-[69.9%] mx-auto h-[560px] '>
            <img src={bannerImg} alt="" className='rounded-3xl h-full w-full object-cover' />
          </div>
          {/* Dynamic card */}
          <section className='sm:w-[90%] lg:w-[80%] mx-auto  mt-8 mb-40 px-8 sm:px-0' id=''>
            <h2 className='text-center text-2xl lg:text-4xl font-bold text-[#0B0B0B] mb-10'>Explore Cutting-Edge Gadgets</h2>
            {/* card container */}
            <div className='flex gap-6 flex-col lg:flex-row' id='products'>
              <div>
                <Sidebar></Sidebar>
              </div>
              <div >
                <Outlet ></Outlet>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;