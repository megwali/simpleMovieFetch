import { create } from 'react-test-renderer';
import Menu from '../Menu';

jest.mock('react-router-dom', () => ({ NavLink: 'NavLink' }));
jest.mock('../StyledComponents', () => ({ Container: 'Container' }));


describe('Menu', () => {
  it('renders', () => {
    const component = create(<Menu />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
