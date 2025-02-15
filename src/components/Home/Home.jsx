import { Outlet } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'
import Sidebar from './Sidebar/Sidebar';
import Banner from '../Banner/Banner';


const Home = () => {
 
  

 
 
  return (
    <div className='-mt-[600px] '>
      <div className='mb-8'>
        <Banner></Banner>
      </div>
      <div className=''>
        <div >
          <div className='p-6 rounded-4xl border-4 border-white bg-[#FFFFFF4D] w-[69.9%] mx-auto h-[560px] '>
            <img src={bannerImg} alt="" className='rounded-3xl h-full w-full object-cover' />
          </div>
          {/* Dynamic card */}
          <section className='sm:w-[90%] lg:w-[80%] mx-auto  mt-8 mb-40 px-8 sm:px-0'>
            <h2 className='text-center text-2xl lg:text-4xl font-bold text-[#0B0B0B] mb-10'>Explore Cutting-Edge Gadgets</h2>
            {/* card container */}
            <div className='flex gap-6 flex-col lg:flex-row'>
              <div>
                <Sidebar></Sidebar>
              </div>
              <div>
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