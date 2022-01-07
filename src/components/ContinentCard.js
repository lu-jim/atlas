import PropTypes from 'prop-types';

const ContinentCard = (props) => {
  const { continent, area, population } = props;
  return (
    <div>
      {continent}
      {area}
      {population}
    </div>
  );
};

ContinentCard.propTypes = {
  continent: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default ContinentCard;
