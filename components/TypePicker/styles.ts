import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      zIndex: 100000,
    },
    dropdown: {
      borderWidth: 2,
      borderColor: theme.NEUTRAL_500,
      backgroundColor: theme.BACKGROUND_COLOR,
    },
    container: {
      backgroundColor: theme.BACKGROUND_COLOR,
      borderColor: theme.PRIMARY_300,
      borderWidth: 2,
      borderTopWidth: 0,
    },
    text: {
      color: theme.TEXT_COLOR,
      fontWeight: 'bold',
    },
    opened: {
      borderColor: theme.PRIMARY_300,
    },
  });
