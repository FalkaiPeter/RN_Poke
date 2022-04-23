import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTypes } from '../../redux/Poke/selectors';
import stylesData from './styles';
import { useTheme } from '../../hooks/useTheme';
import { setSelectedTypes } from '../../redux/Poke';
import { View } from 'react-native';

const TypePicker = () => {
  const styles = useTheme(stylesData);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  const types = useSelector(selectTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedTypes(value));
  }, [value]);

  return (
    <View style={styles.wrapper}>
      <DropDownPicker
        open={open}
        value={value}
        items={types}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select..."
        dropDownContainerStyle={styles.container}
        textStyle={styles.text}
        style={[styles.dropdown, open && styles.opened]}
        multiple
      />
    </View>
  );
};

export default TypePicker;
