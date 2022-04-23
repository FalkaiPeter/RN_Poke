import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/Home';
import Drawer from '../../components/Drawer';
import stylesData from './styles';
import { useTheme } from '../../hooks/useTheme';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigation = () => {
  const styles = useTheme(stylesData);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawerStyle,
        sceneContainerStyle: styles.sceneContainerStyle,
      }}
      drawerContent={Drawer}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default DrawerNavigation;
