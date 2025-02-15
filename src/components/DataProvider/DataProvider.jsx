import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DataContext } from "../../Context/context";


const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
    <DataContext.Provider value={{ data, loading, error, setData }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;