import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Menu from './components/Menu';


const App = () => (
  <Router>
    <Header />
    <Menu />
    <Content />
  </Router>
);

export default App;
