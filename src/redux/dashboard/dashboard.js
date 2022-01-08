import axios from 'axios';

const GET_STATS = 'dashboard/GET_STATS';
const url = 'https://restcountries.com/v3.1/all/?fields=name,official,population,area,region,subregion,languages';

const initialState = { dashboard: [] };

export const getStats = () => async (dispatch) => {
  const result = await axios.get(url);
  const stats = result.data;
  const statsList = stats.map((country) => ({
    id: stats.indexOf(country),
    name: country.name.common,
    official: country.name.official,
    population: country.population,
    area: country.area,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
  }));
  dispatch({
    type: GET_STATS,
    payload: statsList,
  });
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_STATS:
      return { ...state, dashboard: payload };
  }
};

export default reducer;
