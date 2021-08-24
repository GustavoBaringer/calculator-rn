import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Button from './src/components/Button'
import Display from './src/components/Display'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // state = {
  //   displayValue: '0'
  // }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label={"AC"} />
        <Button label={"/"} />
        <Button label={"7"} />
        <Button label={"8"} />
        <Button label={"9"} />
        <Button label={"*"} />
        <Button label={"4"} />
        <Button label={"5"} />
        <Button label={"6"} />
        <Button label={"-"} />
        <Button label={"1"} />
        <Button label={"2"} />
        <Button label={"3"} />
        <Button label={"+"} />
        <Button label={"0"} />
        <Button label={"."} />
        <Button label={"="} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  }


});

export default App;
