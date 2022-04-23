import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      padding: 16,
    },
    image: {
      width: '100%',
      height: 280,
      borderColor: theme.PRIMARY_500,
      borderWidth: 4,
      resizeMode: 'cover',
    },
    caught_image: {
      borderColor: theme.SECONDARY_500,
    },
    table: {
      marginVertical: 24,
    },
    row: {
      backgroundColor: theme.PRIMARY_300,
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    row_even: {
      backgroundColor: theme.SECONDARY_300,
    },
    label: {
      width: '50%',
      fontSize: 20,
      color: theme.TEXT_COLOR,
    },
    value: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.TEXT_COLOR,
    },
    button: {
      backgroundColor: theme.SECONDARY_500,
    },
  });
