import { useParams, useLocation } from 'react-router-dom';

const Country = () => {
  const { country } = useParams();
  const data = useLocation();
  const countryData = data.state;
  const langList = Object.keys(countryData.languages);
  const langNames = langList.map((language) => (
    <li key={langList.indexOf(language)}>
      {countryData.languages[language]}
    </li>
  ));
  return (
    <div className="p-5 text-white bg-sky-700 h-50">
      <h1 className="text-4xl bold">{country}</h1>
      <h2>
        Official Name:&nbsp;
        {countryData.official || ''}
      </h2>
      <p>
        Area:&nbsp;
        {countryData.area || ''}
        &nbsp;m²
      </p>
      {' '}
      <p>
        Population:&nbsp;
        {countryData.population || ''}
      </p>
      <p>
        Languages:
        {langNames}
      </p>
    </div>
  );
};

export default Country;
