
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#fff]  py-24 text-center '>
      <section className='sm:w-[90%] lg:w-[80%] mx-auto'>
        <h2 className='font-bold text-2xl lg:text-4xl text-[#09080F] text-center'>Gadget Heaven</h2>
        <p className='font-medium mb-8 px-4'>Leading the way in cutting-edge technology and innovation.</p>
        <hr />
        {/* footer link container */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='space-y-4 flex flex-col'>
            <h6 className='text-[#09080F] font-bold text-lg'>Services</h6>
            <Link to='#'>Product Support</Link>
            <Link to='#'>Order Tracking</Link>
            <Link to='#'>Shipping & Delivery</Link>
            <Link to='#'>Returns</Link>
          </div>
          <div className='space-y-4 flex flex-col'>
            <h6 className='text-[#09080F] font-bold text-lg'>Company</h6>
            <Link to='#'>About Us</Link>
            <Link to='#'>Careers</Link>
            <Link to='#'>Contact</Link>
          </div>
          <div className='space-y-4 flex flex-col sm:col-span-full lg:col-span-1'>
            <h6 className='text-[#09080F] font-bold text-lg'>Legal</h6>
            <Link to='#'>Terms of Service</Link>
            <Link to='#'>Privacy Policy</Link>
            <Link to='#'>Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;