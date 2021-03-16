import { create } from 'react-test-renderer';
import Content from '../Content';
jest.mock('react-router-dom', () => ({ Link: 'Link', Route: 'Route', Switch: 'Switch' }));
jest.mock('../StyledComponents', () => ({ Container: 'Container' }));


describe('Content', () => {
  it('renders', () => {
    const component = create(<Content />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
