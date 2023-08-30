import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15; 

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payLoad > 255 || state.red + action.payLoad < 0
        ? state
        : { ...state, red: state.red + action.payLoad };
    case 'change_green':
      return state.green + action.payLoad > 255 ||
        state.green + action.payLoad < 0
        ? state
        : { ...state, green: state.green + action.payLoad };
    case 'change_blue':
      return state.blue + action.payLoad > 255 || state.blue + action.payLoad < 0
        ? state
        : { ...state, blue: state.blue + action.payLoad };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', payLoad: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payLoad: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payLoad: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payLoad: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payLoad: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payLoad: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
