import { View, TouchableOpacity } from 'react-native';
import Button from './Button';
import React from 'react';
import styled from 'styled-components/native';
import SvgSearch from './icons/Search';
import SvgClock from './icons/Clock';
import SvgStar from './icons/Star';
import theme from '../utils/theme';
function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return label === 'Search' ? (
          <SearchButtonContainer>
            <SearchButton onPress={onPress}>
              <SvgSearch stroke="white" />
            </SearchButton>
          </SearchButtonContainer>
        ) : (
          <TabButton onPress={onPress}>
            {label == 'History' && <SvgClock />}
            {label == 'Favorite' && <SvgStar />}

            <Box isFocused={isFocused}></Box>
          </TabButton>
        );
      })}
    </View>
  );
}

const SearchButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  background: ${theme.colors.red};
  border-radius: ${theme.radius.full};
  width: 56px;
  height: 56px;
`;
const SearchButtonContainer = styled.View`
  padding: 15px;
  background: white;
  margin-top: -16px;
  border-radius: ${theme.radius.full};
`;
const TabButton = styled(Button)`
  flex-direction: column;
`;
const Box = styled(View)`
  width: 5px;
  margin-top: 6px;
  aspect-ratio: 1;
  background:${(props) => (props.isFocused ? 'red' : 'white')}
  border-radius: ${theme.radius.full};
`;
export default TabBar;
