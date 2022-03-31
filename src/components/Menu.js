import { NavLink } from 'react-router-dom';
import { Container } from './StyledComponents';


const Menu = () => (
  <Container>
    <NavLink activeStyle={{ color: 'blue' }} exact to="/">Home</NavLink>
    <NavLink
      activeStyle={{ color: 'blue' }}
      isActive={(match, location) => match || location.pathname === '/show'}
      to="/search"
    >
      Search
    </NavLink>
  </Container>
)

export default Menu;
