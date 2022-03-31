import { create } from 'react-test-renderer';
import Show from '../Show';

describe('Show', () => {
  it('renders', () => {
    const component = create(<Show />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
