import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DataContext } from "../../Context/context";
import {successToast, warningToast } from "../Toasts/ReactToastify";


const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [addToCart, setAddToCart] = useState([])
  const [addFavorites, setAddFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalCost, setTotalCost] = useState(0)
  const [isClicked, setIsClicked] = useState([]);
  const [active, setActive] = useState(true)



  const handleAddToCart = (productId, price) => {
    const newProd = data.find(p => p.product_id === productId);

    if (newProd) {
      setTotalCost(prevTotalCost => {
        const updatedTotalCost = prevTotalCost + price;

        if (updatedTotalCost > 3000) {
          warningToast(`Total cost ($3000) exceeded, cannot add`)
          return prevTotalCost;
        }

        if (addToCart.some(p => p.product_id === productId)) {
          warningToast(`${newProd.product_title} already exists in the cart`)
          return prevTotalCost;
        }

        setAddToCart(prevCart => {
          const newCart = [...prevCart, newProd];
          successToast(`Added to cart: ${newProd.product_title}`)
          return newCart;
        });

        return updatedTotalCost;
      });
    }
  };
  const handleAddToFavorite = ((productId) => {
    setIsClicked([...isClicked, productId]);
    const newFavoriteProd = data.find(p => p.product_id === productId)

    if (newFavoriteProd) {
      successToast(`Added to favorite: ${newFavoriteProd.product_title}`)
      setAddFavorites(preCart => [...preCart, newFavoriteProd])
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])


  console.log('fetch: from data provider:', { data, error, loading });

  if (loading) {
    return <p>loading..........</p>;
  }

  return (
    <DataContext.Provider value={{
      data,
      loading, error, handleAddToCart,
      addToCart, handleAddToFavorite, addFavorites,
      totalCost, setAddToCart, setTotalCost,
      setAddFavorites, isClicked, active, setActive
    }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;