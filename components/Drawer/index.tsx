import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/App/selectors';
import { darkTheme, lightTheme } from '../../utils/themes';

const Drawer = (props: any) => {
  const theme = useSelector(selectTheme) === 'dark' ? darkTheme : lightTheme;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        key={'doclink'}
        activeTintColor={theme.WHITE}
        inactiveTintColor={theme.WHITE}
        labelStyle={{ fontSize: 16, alignSelf: 'center' }}
        label="PokeAPI Documentation"
        onPress={() => Linking.openURL('https://pokeapi.co/docs/v2')}
      />
    </DrawerContentScrollView>
  );
};

export default Drawer;
