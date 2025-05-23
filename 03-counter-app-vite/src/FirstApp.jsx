import PropTypes from "prop-types";

export const FirstApp = ({
  title = "Hola, soy Vegeta"}) => {
  return (
    <>
      <h1>{title}</h1>
      
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
 
};
