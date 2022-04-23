import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { useTheme } from '../../hooks/useTheme';
import { toggleStatus } from '../../redux/Poke';
import { selectPokemon } from '../../redux/Poke/selectors';
import { capitalise } from '../../utils/capitalise';
import stylesData from './styles';

const Details = () => {
  const { params } = useRoute();
  const styles = useTheme(stylesData);
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon((params as any)!.id));

  const DATA = [
    { label: 'Name', value: capitalise(pokemon.name) },
    { label: 'Weight', value: `${pokemon.weight}kg` },
    { label: 'Height', value: `${pokemon.height}m` },
    { label: 'Abilities', value: pokemon.abilities.map((val) => capitalise(val.ability.name)).join('\n') },
    { label: 'Staus', value: pokemon.status ? 'Caught' : '-' },
  ];

  return pokemon ? (
    <View style={styles.wrapper}>
      <Image
        style={pokemon.status ? [styles.image, styles.caught_image] : styles.image}
        source={{ uri: pokemon.sprites.front_default || '' }}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.label}
        style={styles.table}
        renderItem={({ item, index }) => (
          <View style={[styles.row, !!(index % 2) && styles.row_even]}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
      />
      <Button
        title={pokemon.status ? 'Release' : 'Catch'}
        style={pokemon.status && styles.button}
        onPress={() => dispatch(toggleStatus(pokemon.id))}
      />
    </View>
  ) : (
    <StatusBar />
  );
};
export default Details;
