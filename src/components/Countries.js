import PropTypes from 'prop-types';

const Countries = (props) => {
  const { area, population, data } = props;

  return (
    <>
      {area}
      {population}
      {data}
    </>
  );
};
Countries.propTypes = {
  data: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default Countries;
