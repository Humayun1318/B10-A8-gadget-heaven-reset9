import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const DynamicTitle = ({ children }) => {

  const location = useLocation();

  const dynamicName = location.pathname.split("/").filter(Boolean).pop();
  const pageTitle = dynamicName ? `${dynamicName.replace("-", " ")} || Gadget Heaven` : "Gadget Heaven";
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

DynamicTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DynamicTitle;