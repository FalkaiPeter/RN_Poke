import { useDispatch, useSelector } from 'react-redux';
import { toggleOnlyCaught } from '../../redux/Poke';
import CheckBox from '../../components/CheckBox';
import stylesData from './styles';
import { useTheme } from '../../hooks/useTheme';
import { selectOnlyCaught } from '../../redux/Poke/selectors';

const OnlyCaught = () => {
  const styles = useTheme(stylesData);
  const onlyCaught = useSelector(selectOnlyCaught);
  const dispatch = useDispatch();

  return (
    <CheckBox style={styles.wrapper} checked={onlyCaught} onClick={() => dispatch(toggleOnlyCaught())} label="Only show caught Pokemon" />
  );
};

export default OnlyCaught;
