import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { productId } = useParams()
  return (
    <div>
      The  details of {productId} no product
    </div>
  );
};

export default ProductDetails;