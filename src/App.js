import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Country from './components/Country';
import Error from './components/Error';
import Continent from './components/Continent';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="h-screen bg-sky-900">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/continent/:continent" element={<Continent />} />
          <Route path="/continent/:continent/:country" element={<Country />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
