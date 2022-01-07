import PropTypes from 'prop-types';

const ContinentCard = (props) => {
  const { continent, area, population } = props;
  return (
    <div className="bg-sky-700 flex  flex-col text-white py-4 px-2">
      <h2 className="text-xl uppercase font-bold text-white">{continent}</h2>
      <p>
        {' '}
        Area:&nbsp;
        { new Intl.NumberFormat('de-DE').format(area)}
        m²
      </p>
      <p>
        Population:&nbsp;
        { new Intl.NumberFormat('de-DE').format(population)}
      </p>
    </div>
  );
};

ContinentCard.propTypes = {
  continent: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default ContinentCard;
