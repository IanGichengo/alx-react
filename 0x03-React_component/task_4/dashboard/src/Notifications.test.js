import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li').length).toBe(3);
});

test('Notifications renders the correct text', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});
