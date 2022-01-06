import axios from 'axios';

const GET_STATS = 'dashboard/GET_STATS';
const url = 'https://restcountries.com/v3.1/all/';

const initialState = { dashboard: [] };

export const getStats = () => async (dispatch) => {
  const result = await axios.get(url);
  const stats = result.data;
  const statsList = stats.map((country) => ({
    name: country.name,
    official: country.official_name,
    population: country.population,
    territory: country.territory,
    language: country.language,
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
