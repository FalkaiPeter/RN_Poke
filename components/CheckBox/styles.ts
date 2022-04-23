import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    check_box: {
      marginRight: 10,
      height: 20,
      width: 20,
      borderWidth: 2,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.3,
      borderColor: theme.TEXT_COLOR,
    },
    checked: {
      backgroundColor: theme.PRIMARY_300,
      borderColor: theme.PRIMARY_300,
      opacity: 1,
    },
    label: {
      fontWeight: 'bold',
      color: theme.TEXT_COLOR,
    },
  });
