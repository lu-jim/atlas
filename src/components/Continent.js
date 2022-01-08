import { useParams, useLocation } from 'react-router-dom';
import CountryCard from './CountryCard';

const Continent = () => {
  const { continent } = useParams();
  const data = useLocation();
  const countries = data.state;
  const filtered = countries.filter(
    (match) => match.region.toLowerCase() === continent.toLowerCase(),
  );
  const countryList = filtered.map((country) => (
    <CountryCard
      key={filtered.indexOf(country)}
      country={country.name}
      data={country}
    />
  ));
  return (
    <ul>
      {countryList || ''}
    </ul>
  );
};

export default Continent;
