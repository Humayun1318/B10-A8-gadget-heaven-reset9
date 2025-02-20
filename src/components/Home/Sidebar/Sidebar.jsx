import { useContext} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { DataContext } from '../../../Context/context';



const Sidebar = () => {
  
  const { category } = useParams();
  const { data, loading, error, setData } = useContext(DataContext)
  
  const categories = [...new Set(data.map((item) => (item.category).toLowerCase()))]
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // console.log('second', { data, loading, error });
  return (
    <div>
      <div className='grid   p-6 bg-[#fff] border border-solid border-[#09080F1A] rounded-2xl gap-6'>
        <NavLink
          className={({ isActive }) =>
            `py-2 lg:py-4 px-3 lg:px-7 rounded-4xl bg-[#09080F0D] ${isActive ? "bg-[#9538E2] text-white" : ""
            }`
          }
          to={`/`}
        >All Products</NavLink>
        {
          categories.map((category, idx) => <NavLink
            key={idx}
            to={`category/${category}`}
            className={({ isActive }) =>
              `py-2 lg:py-4 px-3 lg:px-7 rounded-4xl bg-[#09080F0D] ${isActive ? "bg-[#9538E2] text-white" : ""
              }`
            }
          >
            {category}
          </NavLink>
          )
        }
      </div>
    </div>
  );
};

export default Sidebar;