import { TouchableHighlight, Text } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import stylesData from './styles';

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
}

const Button = ({ title, onPress, style }: Props) => {
  const styles = useTheme(stylesData);

  return (
    <TouchableHighlight style={[styles.wrapper, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
export default Button;
