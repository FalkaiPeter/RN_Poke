import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import { toggleStatus } from '../../redux/Poke';
import { selectFilter, selectOnlyCaught, selectPokemon, selectSelectedTypes } from '../../redux/Poke/selectors';
import Button from '../Button';
import stylesData from './styles';

interface Props {
  id: number;
}

const PokemonListItem = ({ id }: Props) => {
  const styles = useTheme(stylesData);
  const { navigate } = useNavigation();

  const { name, types, status } = useSelector(selectPokemon(id));
  const filter = useSelector(selectFilter);
  const selectedTypes = useSelector(selectSelectedTypes);
  const onlyCaught = useSelector(selectOnlyCaught);
  const disptach = useDispatch();

  if (
    (!filter || name.includes(filter)) &&
    (!selectedTypes.length || types.some((t) => selectedTypes.includes(t.type.name))) &&
    (!onlyCaught || (onlyCaught && status))
  )
    return (
      <Pressable key={name} style={styles.row} onPress={() => navigate('Details' as never, { id } as never)}>
        <View style={[styles.stat_wrapper, status && styles.caught]}>
          <Text style={styles.stat}>{name}</Text>
          <Text style={styles.stat}>{types[0].type.name}</Text>
          <Text style={styles.stat}>{status ? 'Caught' : '-'}</Text>
        </View>
        <Button
          style={[styles.button, status && styles.caught_button]}
          onPress={() => disptach(toggleStatus(id))}
          title={status ? 'Release' : 'Catch'}
        />
      </Pressable>
    );
  else return <></>;
};

export default PokemonListItem;

{
  /* <Pressable key={name} style={styles.row} onPress={() => navigate('Details' as never, { id } as never)}>
      <View style={[styles.stat_wrapper, status && styles.caught]}>
        <Text style={styles.stat}>{name}</Text>
        <Text style={styles.stat}>{types[0].type.name}</Text>
        <Text style={styles.stat}>{status ? 'Caught' : '-'}</Text>
      </View>
      <Button
        style={[styles.button, status && styles.caught_button]}
        onPress={() => disptach(toggleStatus(id))}
        title={status ? 'Release' : 'Catch'}
      />
    </Pressable> */
}
