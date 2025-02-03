import { useParams } from "react-router-dom";


const Categories = () => {
  const re = useParams()
  console.log(re);
  return (
    <div>
      This is catagories page
    </div>
  );
};

export default Categories;