import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
