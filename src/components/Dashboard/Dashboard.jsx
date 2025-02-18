import { useContext, useEffect } from "react";
import { useState } from "react";
import { DataContext } from "../../Context/context";
import { MdDelete } from "react-icons/md";
import { Dialog, DialogTitle } from "@headlessui/react";
import purchaseIcon from '../../assets/Group.png'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { addToCart, totalCost, setAddToCart, setTotalCost, addFavorites, handleAddToCart, setAddFavorites, active, setActive } = useContext(DataContext)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [modalTotalCost, setModalTotalCost] = useState(0);

  const navigate =  useNavigate()

  const handleRemoveItem = (prodId, price, cartType) => {
    if (cartType === 'cart') {
      const remCartItem = cart.filter(p => p.product_id !== prodId)
      setCart(remCartItem)
      setAddToCart(remCartItem)
      setTotalCost(totalCost - price)
    } else if (cartType === 'wishlist') {
      const remWishlistItem = wishlist.filter(p => p.product_id !== prodId)
      setWishlist(remWishlistItem)
      setAddFavorites(remWishlistItem)
    }
  }

  const handleSorting = () => {
    const re = cart.sort((a, b) => (b.price - a.price))
    setCart([...re])
  }

  const handlePurchaseModalOpen = (purchasingCost) => {
    setModalTotalCost(purchasingCost);
    setIsOpen(true);
    setTotalCost(totalCost - purchasingCost);
    setAddToCart([])
    setCart([])
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    navigate('/')
  }

  useEffect(() => {
    if (addToCart.length) {
      setCart([...addToCart])
    }
    if (addFavorites.length) {
      setWishlist([...addFavorites])
    }
  }, [addToCart, addFavorites])

  return (
    <div className="">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center ">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-8 rounded-2xl shadow-lg z-10">
          <img src={purchaseIcon} alt="" className="mx-auto" />
          <DialogTitle className="text-2xl font-bold text-[#09080F] my-6">Payment Successfully!</DialogTitle>
          <p className="w-3/4 mx-auto text-[#09080F99] font-medium">Thanks for purchasing.Total:${modalTotalCost}</p>
          <button onClick={() => handleCloseModal(totalCost)} className="mt-4 bg-gray-400 rounded-4xl px-5 py-2.5 text-[#09080F] font-semibold w-full cursor-pointer hover:bg-gray-500">Close</button>
        </div>
      </Dialog>
      <div className=" w-full bg-[#9538E2] py-8 text-center px-4">
        <h5 className="text-2xl lg:text-3xl font-bold text-white">Dashboard</h5>
        <p className="mt-4 mb-8 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className={`py-3.5 px-16 rounded-4xl border border-solid border-white  text-lg font-extrabold ${active ?
            'text-[#9538E2] bg-white' : 'text-white'}`}
            onClick={() => setActive(!active)}
          >cart
          </button>
          <button className={`py-3.5 px-16 rounded-4xl border border-solid border-white text-lg font-extrabold ${active ?
            ' text-white' : 'text-[#9538E2] bg-white'}`}
            onClick={() => setActive(!active)}
          >wishlist
          </button>
        </div>
      </div>
      <div className=" mt-12 mb-72 sm:w-[90%] lg:w-[80%] mx-auto">
        <div className="mt-12 flex justify-between items-center flex-col lg:flex-row">
          <h6 className="font-bold text-2xl text-[#0B0B0B]">Cart</h6>
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <p className="text-2xl font-bold text-[#0B0B0B]">Total Cost:$
              {parseFloat(totalCost.toFixed(2))}</p>
            <button className={`px-5 py-3.5 rounded-4xl border-[1.5px] border-solid border-black shadow-inner text-lg font-semibold
             text-[#9538E2] cursor-pointer duration-300 hover:bg-[#9538e25c] `}
              onClick={handleSorting}
            >Sort by Price</button>
            <button className={`px-5 py-3.5 rounded-4xl border-[1.5px] border-solid border-black shadow-inner text-lg font-semibold
             bg-[#9538E2] text-white  ${totalCost === 0 || totalCost < 0 ? "bg-red-100 text-red-500 cursor-not-allowed" : "duration-300 hover:bg-[#9538e25c]"}`}
              disabled={totalCost === 0 || totalCost < 0 ? true : false}
              onClick={() => handlePurchaseModalOpen(totalCost)}
            >Purchase</button>

          </div>

        </div>


        <div className="mt-8 space-y-6 mx-4 sm:mx-0">
          {/* cart */}
          {
            cart.length > 0 && active ?
              cart.map((item, idx) => {
                return (
                  <div key={idx} className="">
                    <div className="p-8 bg-white rounded-2xl flex gap-8 items-center flex-col md:flex-row">
                      <div className="w-52 rounded-xl bg-[#D9D9D9]">
                        <img src={`${item.product_image}`} alt={`${item.product_title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-2xl font-semibold text-[#09080F]">{item?.product_title}</h4>
                            <p className="text-lg text-[#09080F99] my-4">{item?.description}</p>
                            <p className="text-xl font-semibold text-[#09080FCC]">Price: ${item?.price}</p>
                          </div>
                          <p className="text-3xl md:text-6xl cursor-pointer hover:text-red-600"><button
                            onClick={() => handleRemoveItem(item?.product_id, item?.price, 'cart')}
                            className="text-red-500"
                          ><MdDelete /></button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              : wishlist.length > 0 && !active ?
                wishlist.map((item, idx) => {
                  return (
                    <div key={idx} className="">
                      <div className="p-8 bg-white rounded-2xl flex gap-8 items-center flex-col md:flex-row">
                        <div className="w-52 rounded-xl bg-[#D9D9D9]">
                          <img src={`${item.product_image}`} alt={`${item.product_title}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-2xl font-semibold text-[#09080F]">{item?.product_title}</h4>
                              <p className="text-lg text-[#09080F99] my-4">{item?.description}</p>
                              <p className="text-xl font-semibold text-[#09080FCC] mb-3">Price: ${item?.price}</p>
                              <p>
                                <button className="mr-4 flex items-center gap-3 px-3 lg:px-5 py-0 lg:py-2.5 bg-[#9538E2] rounded-4xl text-white text-lg font-bold shadow cursor-pointer"
                                  onClick={() => {
                                    handleAddToCart(item?.product_id, item?.price);
                                    handleRemoveItem(item?.product_id, item?.price, 'wishlist');
                                  }}
                                >Add To Card
                                </button>
                              </p>
                            </div>
                            <p className="text-3xl md:text-6xl cursor-pointer hover:text-red-600"><button
                              onClick={() => handleRemoveItem(item?.product_id, item?.price, 'wishlist')}
                              className="text-red-500"
                            ><MdDelete /></button></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
                : <p>You didn't  add any item</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;