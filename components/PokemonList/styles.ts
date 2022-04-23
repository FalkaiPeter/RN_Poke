import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.NEUTRAL_300,
      padding: 16,
      flexGrow: 1,
      zIndex: -1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '70%',
      marginBottom: 8,
    },
    header_text: {
      flexGrow: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.TEXT_COLOR,
    },
  });
