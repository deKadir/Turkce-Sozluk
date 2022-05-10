import React from 'react';
import SvgLogo from './../components/icons/Logo';
import Search from '../components/Search';
import styled from 'styled-components/native';
import bg from '../../assets/bg.jpg';
import { Platform } from 'react-native';
export default function SearchView({ navigation }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <SafeArea>
      <Container source={bg} focus={focus}>
        <LogoContainer>
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
`;
const Container = styled.ImageBackground`
  padding: 10px;
  height: ${(props) => (props.focus ? '0px' : '285px')};
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
