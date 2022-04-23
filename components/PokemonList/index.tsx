import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPokemonIdList } from '../../redux/Poke/selectors';
import stylesData from './styles';
import PokemonListItem from '../../components/PokemonListItem';
import { useTheme } from '../../hooks/useTheme';

const PokemonList = () => {
  const styles = useTheme(stylesData);
  const idList = useSelector(selectPokemonIdList);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Name</Text>
        <Text style={styles.header_text}>Type</Text>
        <Text style={styles.header_text}>Status</Text>
      </View>
      <FlatList data={idList} keyExtractor={(item) => item.toString()} renderItem={({ item }) => <PokemonListItem id={item} />} />
    </View>
  );
};

export default PokemonList;
