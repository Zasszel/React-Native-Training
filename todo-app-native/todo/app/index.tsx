import { useCallback, useState } from "react";
import { Text, View, /*ScrollView,*/ FlatList, TextInput, StyleSheet, KeyboardAvoidingView, Platform, /*Alert,*/ Pressable  } from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"

const texts: string[] = [
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
];

export default function RootLayout() {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback(() => {
    if (!text.trim()) return;
    setTodos([...todos, text]);
    setText('');
  }, [text, todos]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {{ flex: 1, backgroundColor: '#fff' }}>
        {/* <FlatList
          data = {texts}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <Text>{item}</Text>}
        /> */}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : undefined}
          >
            <View
              style={styles.inputContainer}
            >
              <TextInput
                value={text}
                onChangeText={setText}
                style={styles.textInput}
              />
              <Pressable 
                onPress={addTodo}
                style={styles.button}
              >
                <Text>+</Text>
              </Pressable>
            </View>

            <FlatList
              data={todos}
              renderItem={({item}) => <Text>{item}</Text>}
              keyExtractor={(_, index) => index.toString()}
            />

          </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 16
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 0
  },

  button: {
    backgroundColor: "red",
    borderRadius: 0,
    justifyContent: 'center',
    padding: 20,
    margin: 20
  }

});