import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = ( state, action )=>{
  switch( action.type ){
    case 'increment':
      return { ...state, count: state.count + action.payLoad};
    case 'decrement':
      return { ...state, count: state.count - action.payLoad};
      
    default:  
    return state; 
  }
};


const CounterScreen = () => {
 const [ state, dispatch ] = useReducer( reducer, { count: 0});
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
        dispatch({ type: 'increment', payLoad: 1})
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
        dispatch({ type: 'decrement', payLoad: 1})
          
        }}
      />
      <Text>Current Count: { state.count }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
