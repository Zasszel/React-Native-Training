import { Link } from 'expo-router';

import { Text, View, /*ScrollView,*/ FlatList, TextInput, StyleSheet, KeyboardAvoidingView, Platform, /*Alert,*/ Pressable  } from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useCallback, useState } from 'react';


export default function ModalScreen() {

  type Expense = {
    label: string,
    value: number,
    description: string,
  };

  const[isOpen, setIsOpen] = useState(false);

  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  //const [totalExpense, setTotalExpense] = useState(0);

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      label: "Groceries",
      value: 85.5,
      description: "Weekly grocery shopping at the supermarket",
    },
    {
      label: "Rent",
      value: 1200,
      description: "Monthly apartment rent",
    },
    {
      label: "Electricity",
      value: 72.3,
      description: "Electricity bill for July",
    },
    {
      label: "Internet",
      value: 49.99,
      description: "Monthly fiber internet subscription",
    },
    {
      label: "Transportation",
      value: 35,
      description: "Gas and public transport",
    },
    {
      label: "Dining Out",
      value: 42.75,
      description: "Dinner with friends",
    },
    {
      label: "Entertainment",
      value: 18.99,
      description: "Movie tickets",
    },
    {
      label: "Gym",
      value: 29.99,
      description: "Monthly gym membership",
    },
  ]);

  const addExpense = useCallback(() => {

    if (!label.trim()) return;
    if (!value.trim()) return;
    if (!value.trim()) return;

    const expense : Expense = {
      label : label,
      value : parseInt(value),
      description : description
    }

    setExpenses([...expenses, expense]);

    setLabel("");
    setValue("");
    setDescription("");

  }, [label, value, description]);

  const totalsByCategory = expenses.reduce((acc, expense) => {
    acc[expense.label] = (acc[expense.label] || 0) + expense.value;
    return acc;
  }, {} as Record<string, number>);

  const totalExpense = Object.values(totalsByCategory).reduce((sum, value) => sum + value, 0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex : 1}}>
        <KeyboardAvoidingView>
          <View style={styles.body}>
             <View style={styles.categories}>
                <Text>Total: {totalExpense}$</Text>
              </View>

            {
              !isOpen && (
                <View style={styles.categories}>
                  {
                    Object.entries(totalsByCategory).map(([category, total]) => (
                      <View
                        key={category}
                        style={styles.category}
                      >
                        <Text>{category}</Text>
                        <Text>{total}$</Text>
                      </View>
                    ))
                  }
                </View>
              )
            }

            {
              isOpen && (
                <View>
                  <TextInput
                    value={label}
                    onChangeText={setLabel}
                    style={styles.inputs}
                    placeholder='Catgeory'
                  />
                  <TextInput
                    value={value}
                    onChangeText={setValue}
                    style={styles.inputs}
                    keyboardType='numeric'
                    placeholder='Value'
                  />
                  <TextInput
                    value={description}
                    onChangeText={setDescription}
                    style={styles.inputs}
                    placeholder='Description'
                  />
                  <Pressable onPress={addExpense} style={styles.button}> 
                    <Text>Save</Text>
                  </Pressable>
                </View>
              )
            }

            <FlatList
              contentContainerStyle={{paddingBottom: 60}}
              data={expenses}
              renderItem={({item}) => 
                <View
                  style={styles.listItem}
                >
                  <Text>{item.label}</Text>
                  <Text>Spent {item.value}$</Text>
                  <Text style={{opacity: 70}}>{item.description}</Text>
                </View>
              }
              keyExtractor={(_, index) => index.toString()}
            />


          </View>
        </KeyboardAvoidingView>
        <Pressable 
          style={styles.fab}
          onPress={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <Text>-</Text> : <Text>+</Text>}
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: "white"
  },

  listItem: {
    backgroundColor: "#e19ffc",
    margin: 10,
    padding: 20,
    borderRadius: 20
  },

  inputs: {
    backgroundColor: "rgb(142, 134, 250)",
    marginTop: 5,
    marginBottom: 5, 
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },

  button: {
    backgroundColor: "#852aaf",
    padding: 20,
    margin: 20,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  categories: {
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  category: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: "#9fc8e4",
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,

    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#852aaf",

    elevation: 5, // Android
    shadowColor: "#000", // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
