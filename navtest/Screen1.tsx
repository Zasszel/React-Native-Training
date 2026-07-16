import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Screen1() {

    const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text>Screen1</Text>

        <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
            <Text>
                Go to screen2
            </Text>
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
