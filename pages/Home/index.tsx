import { Text, View } from 'react-native';
import Search from '../../components/Search';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes } from '../../redux/Poke';
import stylesData from './styles';
import TypePicker from '../../components/TypePicker';
import { useTheme } from '../../hooks/useTheme';
import PokemonList from '../../components/PokemonList';
import OnlyCaught from '../../components/OnlyCaught';

const Home = () => {
  const styles = useTheme(stylesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.controls_wrapper}>
        <Search style={styles.gap} />
        <Text style={styles.pokemon_types_text}>Pokemon Types</Text>
        <TypePicker />
        <OnlyCaught />
      </View>
      <PokemonList />
    </View>
  );
};

export default Home;
