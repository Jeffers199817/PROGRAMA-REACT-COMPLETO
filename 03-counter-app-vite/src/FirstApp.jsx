import PropTypes from "prop-types";

export const FirstApp = ({title = "Hola, soy Vegeta" , subtitulo="No hay subtitulo", name="Jefferson"}) => {
  return (
    <>
      <h1 data-testid ='test-title'>{title} </h1>
      <h1>{subtitulo}</h1>
      <h1>{subtitulo}</h1>
      <h1>{subtitulo}</h1>
      <h1>{subtitulo}</h1>
      <h1>{name}</h1>
      
    </>
  );
};

FirstApp.propTypes = {
  //title: PropTypes.string.isRequired,
 
};
