import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContinentCard = (props) => {
  const {
    continent, area, population, id, data,
  } = props;
  let background = 'bg-sky-900';
  if (id) background = [2, 3, 6, 7, 10, 11].includes(id) ? 'bg-sky-700' : 'bg-sky-800';
  const span = id === 0 ? 'col-span-2 md:col-span-3 bg-sky-900' : '';
  return (
    <Link to={`continent/${continent}`} className={`${background} ${span} flex  flex-col text-white py-4 px-2 flex justify-center`} id={id} state={data}>
      <h2 className="text-3xl lg:text-4xl uppercase font-bold text-white">{continent}</h2>
      <p className="text-sm md:text-base pt-2">
        {' '}
        Area:&nbsp;
        {new Intl.NumberFormat('de-DE').format(area)}
        &nbsp;m²
      </p>
      <p className="text-sm md:text-base">
        Population:&nbsp;
        {new Intl.NumberFormat('de-DE').format(population)}
      </p>
    </Link>
  );
};

ContinentCard.propTypes = {
  continent: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};
ContinentCard.defaultProps = {
  data: [{}],
};

export default ContinentCard;
