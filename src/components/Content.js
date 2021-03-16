import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Search, Show } from '../pages';
import { Container } from './StyledComponents';

const Content = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();
  const handleSearch = async (term) => {
    const url = `http://api.tvmaze.com/search/shows?q=${term}`;
    const response = await fetch(url, { method: 'GET' });
    const shows = await response.json();
    setData(shows);
  };

  const handleSave = (show) => {
    const { id } = show;

    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
    } else {
      localStorage.setItem(id, JSON.stringify(show))
    }
  }

  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Home onClick={(show) => setSelected(show)} />
        </Route>

        <Route path="/search">
          <Search onChange={handleSearch} onClick={(show) => setSelected(show)} results={data} />
        </Route>

        <Route path="/show">
          <Show onClick={handleSave} show={selected} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
