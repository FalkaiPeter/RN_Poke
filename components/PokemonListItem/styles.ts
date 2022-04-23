import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginVertical: 8,
      justifyContent: 'space-between',
    },
    stat_wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 16,
      backgroundColor: theme.BACKGROUND_COLOR,
      borderColor: theme.PRIMARY_700,
      borderRadius: 8,
      borderWidth: 1,
      width: '70%',
    },
    caught: {
      borderColor: theme.SECONDARY_500,
    },
    stat: {
      flexGrow: 1,
      textAlign: 'center',
      color: theme.TEXT_COLOR,
    },
    button: {
      flexGrow: 1,
    },
    caught_button: {
      backgroundColor: theme.SECONDARY_500,
    },
  });
