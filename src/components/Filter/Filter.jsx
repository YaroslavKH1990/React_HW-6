import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(actions.changeFilter(event.target.value));
  return (
    <div>
      Find contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
export default Filter;
