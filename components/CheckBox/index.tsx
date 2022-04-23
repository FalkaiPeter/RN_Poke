import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import stylesData from './styles';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/App/selectors';
import { darkTheme, lightTheme } from '../../utils/themes';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  checked: boolean;
  onClick: () => void;
  label?: string;
  style?: any;
}

const CheckBox = ({ label, checked, onClick, style }: Props) => {
  const theme = useSelector(selectTheme) === 'dark' ? darkTheme : lightTheme;
  const styles = useTheme(stylesData);

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <TouchableOpacity onPress={onClick}>
        <View style={checked ? { ...styles.check_box, ...styles.checked } : styles.check_box}>
          {checked && <FontAwesome5 name="check" color={theme.WHITE} />}
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default CheckBox;
