import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
  const { country, data } = props;
  return (
    <Link to={`country/${country}`} state={data}>
      <li className="odd:bg-sky-700 even:bg-sky-800">{country}</li>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default CountryCard;
