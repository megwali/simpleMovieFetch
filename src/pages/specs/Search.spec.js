import { create } from 'react-test-renderer';
import Search from '../Search';

describe('Search', () => {
  it('renders', () => {
    const component = create(<Search />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
