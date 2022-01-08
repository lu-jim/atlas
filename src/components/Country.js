import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../redux/dashboard/dashboard';

const Country = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.dashboard.dashboard);
  useEffect(() => {
    if (!countryList.length) dispatch(getStats());
  }, []);
  let filtered = countryList.filter((match) => match.name === country)[0];
  if (!filtered) filtered = { official: '', area: '', population: '' };
  return (
    <div className="p-5 text-white">
      <h1 className="text-4xl bold">{country}</h1>
      <h2>
        {' '}
        Official Name:
        {filtered.official || ''}
      </h2>
      <p>
        Area:
        {' '}
        {filtered.area || ''}
        Population:
        {' '}
        {filtered.population || ''}
        Languages:
        {' '}
      </p>
    </div>
  );
};

export default Country;
