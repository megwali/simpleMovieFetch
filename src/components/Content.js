import { Route, Switch } from 'react-router-dom';
import { Home, Search, Show } from '../pages';
import { Container } from './StyledComponents';

const Content = () => (
  <Container>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/show">
        <Show />
      </Route>
    </Switch>
  </Container>
);

export default Content;
