import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/App/selectors';
import { Theme } from '../types/Theme';
import { darkTheme, lightTheme } from '../utils/themes';

export function useTheme<T>(styles: (theme: Theme) => T) {
  const theme = useSelector(selectTheme);
  return styles(theme === 'dark' ? darkTheme : lightTheme);
}
