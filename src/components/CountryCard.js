import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
  const { country, data } = props;
  return (
    <li className="odd:bg-sky-700 even:bg-sky-800 py-2 text-center"><Link to={country} state={data} className="text-white">{country}</Link></li>
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
