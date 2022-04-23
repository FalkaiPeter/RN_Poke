import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    drawerStyle: { backgroundColor: theme.NAVIGATION_700 },
    sceneContainerStyle: { backgroundColor: theme.BACKGROUND_COLOR },
  });
