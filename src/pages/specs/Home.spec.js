import { create } from 'react-test-renderer';
import Home from '../Home';

describe('Home', () => {
  it('renders', () => {
    const component = create(<Home />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
