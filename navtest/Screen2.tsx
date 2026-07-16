import { useNavigation, useRoute } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StackParamType } from './App';

export default function Screen2() {

    const navigation = useNavigation();

    const route = useRoute();

    const { id, name } = route.params as StackParamType['details'];

  return (
      <View style={styles.container}>
        <Text>Screen2</Text>
        <Pressable
            onPress={() => navigation.navigate('home')}
        >
            <Text>Go to screen 1: {id} - {name}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
