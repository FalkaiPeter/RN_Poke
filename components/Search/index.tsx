import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import stylesData from './styles';
import { useMemo, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { setFilter } from '../../redux/Poke';

interface Props extends TextInputProps {
  style?: any;
}

const Search = ({ style, onFocus, onBlur, ...props }: Props) => {
  const styles = useTheme(stylesData);
  const [isfocused, setFocused] = useState(false);
  const dispatch = useDispatch();

  const handleChange = useMemo(
    () =>
      debounce((val: string) => {
        dispatch(setFilter(val));
      }, 200),
    []
  );

  return (
    <View style={[styles.wrapper, isfocused && styles.focused, style]}>
      <Ionicons name="search" size={20} style={styles.icon} />
      <TextInput
        {...props}
        style={styles.input}
        onChangeText={handleChange}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
      />
    </View>
  );
};

export default Search;
