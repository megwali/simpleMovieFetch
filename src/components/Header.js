import { Route, Switch } from 'react-router-dom';

const Header = () => (
  <Switch>
    <Route exact path="/">
      <h2>Home</h2>
    </Route>

    <Route path="/search">
      <h2>Search</h2>
    </Route>

    <Route path="/show">
      <h2>Show</h2>
    </Route>
  </Switch>
);

export default Header;
