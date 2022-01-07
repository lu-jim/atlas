import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Country from './components/Country';
import Error from './components/Error';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/country/:country" element={<Country />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
