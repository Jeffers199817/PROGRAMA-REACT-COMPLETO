import PropTypes from "prop-types";

export const FirstApp = ({title = "Hola, soy Vegeta" , subtitulo="No hay subtitulo", name="Jefferson"}) => {
  return (
    <>
      <h1 data-testid ='test-title'>{title} </h1>
      <h2>{subtitulo}</h2>
    
      <h3>{name}</h3>
      
    </>
  );
};

FirstApp.propTypes = {
  //title: PropTypes.string.isRequired,
 
};
