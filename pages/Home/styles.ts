import { StyleSheet } from 'react-native';
import { Theme } from '../../types/Theme';

export default (theme: Theme) =>
  StyleSheet.create({
    wrapper: { height: '100%' },
    controls_wrapper: {
      paddingHorizontal: 24,
    },
    pokemon_types_text: {
      fontWeight: 'bold',
      color: theme.TEXT_COLOR,
    },
    table: {
      backgroundColor: theme.NEUTRAL_300,
      padding: 16,
      flexGrow: 1,
    },
    table_header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '70%',
      marginBottom: 8,
    },
    table_header_text: {
      flexGrow: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.TEXT_COLOR,
    },
    gap: {
      marginVertical: 16,
    },
  });
