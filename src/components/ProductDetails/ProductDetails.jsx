import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/context";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductDetails = () => {
  const { productId } = useParams()
  const { data, handleAddToCart, handleAddToFavorite } = useContext(DataContext)
  const singleProd = data.find(prod => prod.product_id === productId)

  const fullStars = Math.floor(singleProd?.rating);
  const hasHalfStar = singleProd?.rating % 1 >= 0.5;
  // console.log({fullStars, hasHalfStar});

  return (
    <div className="relative">
      <div className="h-[375px] w-full bg-[#9538E2] absolute "></div>
      <div className="sm:w-[90%] lg:w-[80%] mx-auto  relative pt-8 mb-28">
        <div className="mb-8 text-center">
          <h5 className="font-bold text-3xl text-white">Product Details</h5>
          <p className="text-[#fff] mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
        <div className="p-4 lg:p-8 bg-white rounded-3xl flex flex-col lg:flex-row gap-8 m-4 lg:m-0">
          <div className="w-full lg:w-[424px] h-auto bg-[#ECECEC]">
            <img src={`/${singleProd.product_image}`} alt={`${singleProd?.product_title}`}
              className="h-full w-full object-cover rounded-2xl" />
          </div>
          <div className=" text-black">
            <div className="space-y-4">
              <h3 className="font-semibold text-2xl lg:text-3xl text-[#09080F]">{singleProd?.product_title}</h3>
              <p className="text-xl font-semibold text-[#09080FCC]"> ${singleProd?.price}</p>
              <button className="px-3.5 py-2 rounded-4xl border border-solid border-[#309C08] bg-[#309C0819]">{singleProd ? 'In Stock' : 'Out Of Stock'}</button>
              <p className="text-lg text-[#09080F99]">{singleProd?.description}</p>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-bold text-[#09080F] my-3">Specification:</h5>
              <ul className="list-decimal ml-4 text-[#09080F99]">
                {
                  singleProd?.Specification?.map((specification, idx) => <li
                    key={idx}
                    className=""
                  >{specification}</li>)
                }
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold text-[#09080F] ">Rating ⭐</h5>
              <p className="my-3 flex items-center">
                {
                  [...Array(5)].map((_, idx) => {
                    return (
                      <span key={idx}>
                        {
                          fullStars >= idx + 1 ? <FaStar className="text-[#f9c004] lg:text-2xl" />
                            : hasHalfStar ? <FaRegStarHalfStroke className="text-[#f9c004] lg:text-2xl" />
                              : <FaRegStar className="lg:text-2xl" />
                        }
                      </span>
                    )
                  })
                }
                <span className="px-3.5 py-1.5 rounded-4xl bg-[#09080F0D] ml-3">{singleProd?.rating}</span></p>
              <div className="flex">
                <button className="mr-4 flex items-center gap-3 px-3 lg:px-5 py-0 lg:py-2.5 bg-[#9538E2] rounded-4xl text-white text-lg font-bold shadow cursor-pointer"
                  onClick={() => handleAddToCart(singleProd?.product_id, singleProd?.price)}
                >Add To Card
                  <IoCartOutline className='' />
                </button>
                <button className="px-3 lg:px-5 py-1 lg:py-3 rounded-4xl border border-solid border-[#09080F0D] shadow cursor-pointer"
                  onClick={() => handleAddToFavorite(singleProd?.product_id)}
                >
                  <CiHeart className='text-2xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;