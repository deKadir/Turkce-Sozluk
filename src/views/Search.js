import { View, Button, StyleSheet, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import SvgStar from './../components/icons/Star';
import SvgClock from './../components/icons/Clock';

export default function SearchView({ navigation }) {
  return (
    <View style={style.container}>
      <Button
        title="go to details"
        onPress={() => navigation.navigate('Details')}
      />

      <View>
        <SvgClock width={50} height={50} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
