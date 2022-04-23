import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View, Switch } from 'react-native';
import Details from '../../pages/Details';
import DrawerNavigation from '../Drawer';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setConnected, setTheme } from '../../redux/App';
import { selectConnected, selectTheme } from '../../redux/App/selectors';
import stylesData from './styles';
import { useTheme } from '../../hooks/useTheme';
import { darkTheme, lightTheme } from '../../utils/themes';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const navigation = useNavigation();
  const styles = useTheme(stylesData);

  const dispatch = useDispatch();
  const themeVariant = useSelector(selectTheme);
  const isConnected = useSelector(selectConnected);

  const theme = useMemo(() => (themeVariant === 'dark' ? darkTheme : lightTheme), [themeVariant]);

  const unsubscribe = useMemo(() => {
    if (unsubscribe) unsubscribe(); //avoid multiple listener
    return NetInfo.addEventListener(({ isConnected }) => dispatch(setConnected(!!isConnected)));
  }, [dispatch]);

  useEffect(() => () => unsubscribe(), []); //cleanup

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: theme.WHITE,
        headerTitleAlign: 'center',
        headerStyle: styles.headerStyle,
        contentStyle: styles.contentStyle,
        headerTitle: () => <Image source={require('../../assets/pokemon.png')} />,
      }}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          headerLeft: () => (
            <Ionicons name="menu" size={32} color={theme.WHITE} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
          ),
          headerRight: () => (
            <View>
              <Switch
                trackColor={{ false: theme.NEUTRAL_300, true: theme.NEUTRAL_300 }}
                thumbColor={theme.PRIMARY_500}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  dispatch(setTheme(themeVariant === 'dark' ? 'light' : 'dark'));
                }}
                value={themeVariant === 'dark'}
              />
              {!isConnected && <AntDesign name="disconnect" size={32} color={theme.WHITE} />}
            </View>
          ),
        }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
