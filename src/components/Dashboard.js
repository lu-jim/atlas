import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../redux/dashboard/dashboard';
import ContinentCard from './ContinentCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const statList = useSelector((state) => state.dashboard.dashboard);
  useEffect(() => {
    if (!statList.length) dispatch(getStats());
  }, []);
  const stats = { All: [0, 0] }; // [Area, Population]
  statList.forEach((country) => {
    if (Object.keys(stats).indexOf(country.region) === -1) {
      stats[country.region] = [country.area + 0, country.population + 0];
    } else {
      stats[country.region][0] += country.area + 0;
      stats[country.region][1] += country.population + 0;
    }
    stats.All[0] += country.area + 0;
    stats.All[1] += country.population + 0;
  });
  const continentList = Object.keys(stats);
  console.log(stats);
  const list = continentList.map((continent) => (
    <ContinentCard
      key={stats[continent][0] + stats[continent][1]}
      continent={continent}
      area={stats[continent][0]}
      population={stats[continent][1]}
    />
  ));
  return (
    <div id="stat-list" className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-sky-900">
      {list || ''}
    </div>
  );
};
export default Dashboard;
