import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DataContext } from "../../Context/context";




const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [addToCart, setAddToCart] = useState([])
  const [addFavorites, setAddFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalCost, setTotalCost] = useState(0)
  const [isClicked, setIsClicked] = useState([]);
  const [active, setActive] = useState(true)

  // const handleRemoveCartItem = (prodId) => {
  //   console.log(prodId);
  //   const remCartItem = addToCart.filter(p => p.product_id !== prodId)
  //   setAddToCart(remCartItem)
  // }

  const handleAddToCart = ((productId, price) => {
    const newProd = data.find(p => p.product_id === productId)

    if (newProd) {
      if (addToCart.length > 0) {
        const uniqueProds = addToCart.some(p => p.product_id === productId)
        if (uniqueProds) {
          console.log('already exist');
          return;
        }
        setAddToCart([...addToCart, newProd])
        setTotalCost(price + totalCost)
      }
      setAddToCart([...addToCart, newProd])
      setTotalCost(price + totalCost)
    }
    
  })
  const handleAddToFavorite = ((productId) => {
    setIsClicked([...isClicked, productId]);
    const newFavoriteProd = data.find(p => p.product_id === productId)

    if (newFavoriteProd) {
      if (addFavorites.length > 0) {
        const uniqueFavProds = addFavorites.some(p => p.product_id === productId)
        if (uniqueFavProds) {
          console.log('already exist');
          return;
        }
        setAddFavorites([...addFavorites, newFavoriteProd])
      }
      setAddFavorites([...addFavorites, newFavoriteProd])
    }
  })

  useEffect(() => {

    const fetchData = async () => {
      try {
        // console.log("Fetching user data...");
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

  if (loading) return <p>Loading...</p>;

  return (
    <DataContext.Provider value={{ data, loading, error, handleAddToCart, addToCart, handleAddToFavorite, addFavorites, totalCost, setAddToCart, setTotalCost, setAddFavorites, isClicked, active, setActive }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;