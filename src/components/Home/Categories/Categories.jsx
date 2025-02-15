import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../Context/context";


const Categories = () => {
  const { category } = useParams();
  // console.log("Current Category:", category);

  const { data, loading, error } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    if (category) {
      const selectedCategories = data.filter(item =>
        item.category.toLowerCase() === category.toLowerCase()
      );
      // console.log("Filtered Products:", selectedCategories);
      setProducts(selectedCategories);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((item, idx) => {
          return (
            <div key={idx} className="bg-[#fff] p-5 rounded-2xl flex flex-col justify-between">
              <div className="h-[180px] w-full mb-6">
                <img
                  src={`/${item.product_image}`}
                  alt={item?.product_title || "Product Image"}
                  className="w-full h-full object-cover mix-blend-multiply rounded-xl bg-[#D9D9D9]"
                />
              </div>
              <h4 className="text-[#09080F] font-semibold text-2xl">{item?.product_title}</h4>
              <p className="text-xl font-medium text-[#09080F99] my-3">Price: ${item?.price}</p>
              <div className="mt-2">
                <Link className="py-3 px-5 rounded-4xl border-[1.5px] border-solid border-[#9538E2] 
              shadow-[inset_0px_4px_50px_0px_rgba(11,11,11,0.15)] text-[#9538E2] text-lg font-semibold "
                  to={`/productDetails/${item.product_id}`}>
                  View Details
                </Link>
              </div>
            </div>
          )
        })
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found for this category.</p>
      )}
    </div>
  );
};

export default Categories;
