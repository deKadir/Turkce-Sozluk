import React from 'react';
import SvgLogo from './../components/icons/Logo';
import Search from '../components/Search';
import styled from 'styled-components/native';
import bg from '../../assets/bg.jpg';
import { Platform, Animated, ImageBackground } from 'react-native';
export default function SearchView({ navigation }) {
  const [focus, setFocus] = React.useState(false);

  return (
    <SafeArea>
      <Container source={bg} height={focus ? 0 : 285}>
        <LogoContainer focus={focus}>
          <SvgLogo width="120" height="120" color="white" />
        </LogoContainer>
        <SearchContainer>
          <Search onChangeFocus={(status) => setFocus(status)} />
        </SearchContainer>
      </Container>
      <Content />
    </SafeArea>
  );
}
const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '25px' : '0'};
`;
const LogoContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  opacity: ${(props) => (props.focus ? 0 : 1)};
`;
const Container = styled(ImageBackground)`
  padding: 10px;
  height: ${(props) => props.height}px;
  padding-bottom: 0;
`;
const SearchContainer = styled.View`
  margin-bottom: -24px;
`;

const Content = styled.View`
  background: white;
  flex: 1;
  position: relative;
  z-index: -1;
`;
