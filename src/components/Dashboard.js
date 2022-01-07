import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../redux/dashboard/dashboard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const statList = useSelector((state) => state.dashboard.dashboard);
  useEffect(() => {
    if (!statList.length) dispatch(getStats());
  }, []);
  let area = 0;
  let population = 0;
  statList.forEach((country) => {
    if (country.region === 'Europe') {
      console.log(country.name);
      area += country.area;
      population += country.population;
    }
  });
  console.log(area, population);
  return <div id="stat-list">Hi</div>;
};

export default Dashboard;
