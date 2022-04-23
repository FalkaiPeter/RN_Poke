import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    headerStyle: { backgroundColor: theme.NAVIGATION_500 },
    contentStyle: { backgroundColor: theme.BACKGROUND_COLOR },
  });
