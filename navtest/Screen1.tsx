import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Screen1() {

    const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text>Screen1</Text>
        <Pressable
            onPress={() => navigation.navigate('details', {
                id: 42, 
                name: "abc"
            })}
        >
            <Text>Go to screen 2</Text>
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
