import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      alignItems: 'center',
      opacity: 0.2,
      borderColor: theme.TEXT_COLOR,
    },
    focused: {
      opacity: 1,
    },
    icon: {
      color: theme.TEXT_COLOR,
    },
    input: {
      color: theme.TEXT_COLOR,
      paddingLeft: 4,
      flex: 1,
    },
  });
