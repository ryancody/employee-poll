import renderer from 'react-test-renderer';
import { _getUsers, _getQuestions } from '../utils/_DATA';
import Questions from '../features/questions/Questions';

const currentUser = _getUsers()['amy'];

it('renders correctly', () => {
  const tree = renderer
    .create(<Questions questions={_getQuestions()} currentUser={currentUser} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
